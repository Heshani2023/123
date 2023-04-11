import { MongoClient } from "mongodb";
import Quiz, { UserQuiz } from "../business/models/Quiz";
import IQuestion from "../business/models/IQuestion";
import Question from "../business/models/question";
import Student from "../business/models/Student";
import IGetQuizData from "../business/interfaces/IGetQuizData";
import IGetQuestionData from "../business/interfaces/IGetQuestionData";

import Questions from "../business/models/question";

/*
 * Concrete class that implements IGetQuizData and serves up data from MongoDB
 */
export default class MongoQuizData implements IGetQuizData, IGetQuestionData {
  uri = process.env.MONGODB_URI ??"";

  async findQuiz(id: string) {
    const client = new MongoClient(this.uri);
    var quiz: Quiz | null = null;
    try {
      await client.connect();

      const database = client.db("test");
      const quizzes = database.collection("quizes");

      const query = { subject: id };

      const result = await quizzes.findOne(query);
      quiz = JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return quiz;
    }
  }

  async findAllQuizzes() {
    const client = new MongoClient(this.uri);
    var quizzes: Quiz[] | null = null;
    try {
      await client.connect();

      quizzes = await client
        .db("test")
        .collection<Quiz>("quizes")
        .find({})
        .toArray();
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return quizzes;
    }
  }

  async findQuizzesTakenByUser(name: string) {
    const client = new MongoClient(this.uri);
    //use an array to populate UserQuizes
    var userQuizzes = Array<UserQuiz>();

    try {
      await client.connect();

      //first get the quiz subjects that the user has taken. Refer: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/project/
      var dummyUser = {
        id: 0,
        name: "dummyname",
        lastname: "dummylastname",
        username: "dummyusername",
        email: "dummyemail",
        password: "dummypassword",
        role: "dummyrole",
        quizzes: [{ subject: "Math", marks: 101 }],
      };

      var dummyQuiz = {
        id: 0,
        name: "DummyMathQuiz",
        subject: "Math",
        type: "DummyType",
        marks: 0,
        time: 0,
      };
      var user: Student =
        (await client
          .db("test")
          .collection<Student>("users")
          .findOne({ name: name })) ?? dummyUser;
      for (let q in user.quizzes) {
        var quiz: Quiz =
          (await this.findQuiz(user.quizzes[q].subject)) ?? dummyQuiz;
        userQuizzes.push({
          id: quiz.id,
          subject: quiz.subject,
          name: quiz.name,
          marks: user.quizzes[q].marks,
          type: quiz.type
        } as UserQuiz);
      }
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return userQuizzes;
    }
  }

  async findQuestion(qid: number) {
    const client = new MongoClient(this.uri);
    var question: IQuestion | null = null;
    try {
      await client.connect();

      const database = client.db("test");
      const questions = database.collection("questions");

      const query = { qid: qid };

      const result = await questions.findOne(query);
      question = JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return question;
    }
  }

  async findQuestionAnswer(qid: number) {
    const client = new MongoClient(this.uri);
    var question: IQuestion | null = null;
    var answer: string = "";
    try {
      await client.connect();

      const database = client.db("test");
      const questions = database.collection("questions");

      const query = { subject: qid };

      const result = await questions.findOne(query);
      question = JSON.parse(JSON.stringify(result));
      answer = question?.answer??"";

    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return answer;
    }
  }

  async findQuestionType(qid: number) {
    const client = new MongoClient(this.uri);
    
    var question: IQuestion | null = null;
    var type: string = "";
    try {
      await client.connect();

      const database = client.db("test");
      const questions = database.collection("questions");

      const query = { subject: qid };

      const result = await questions.findOne(query);
      question = JSON.parse(JSON.stringify(result));
      type = question?.type??"";
      
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return type;
    }
  }

  async findUser(email: string) {
    const client = new MongoClient(this.uri);
    var dummyUser = {
      id: 0,
      name: "NotFound",
      lastname: "NotFound",
      username: "NotFound",
      email: "NotFound",
      password: "NotFound",
      role: "NotFound",
      quizzes: [{ subject: "NotFound", marks: 100 }],
    };

    var user: Student = dummyUser
    try {
      await client.connect();
      //first get the quiz subjects that the user has taken. Refer: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/project/
      

      user =
        (await client
          .db("test")
          .collection<Student>("users")
          .findOne({ email: email })) ?? dummyUser;
    }catch (err) {
      console.error(err);
    } finally {
      await client.close();
      return user;
    }
  }

  async checkQuesAns(subject: string , question: string , userAns: string) {
    
    const client = new MongoClient(this.uri);
    var dummyQuestion = {
      id: 0,
      question: "NotFound",
      answer: "NotFound",
      subject: "NotFound",
      type: "NotFound",
    };
    
    var _question: Questions = dummyQuestion
    
    try {
      await client.connect();
      //first get the quiz subjects that the user has taken. Refer: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/project/

      _question  =
        (await client
          .db("test")
          .collection<Questions>("questions")
          .findOne({ subject: subject , question: question })) ?? dummyQuestion;
    }catch (err) {
      console.error(err);
      return false
    } finally {
      await client.close();
      if (_question.answer == userAns){
        return true
      }
      else{
        return false
      }
    }
  }
  /**
   * to find the question list of a certain quiz
   * @param subject - subject of the quizz(this is the identifier used to find the quiz which a certain question is belongs to)
   */
  async findQuestionListOfAQuiz(subject:string){
    const client = new MongoClient(this.uri);
    var questions: Question[] | null=null;
    try{
      await client.connect();
      questions = await client
        .db("test")
        .collection<Question>("questions")
        .find({subject})
        .toArray();
    }
    catch(err){
      console.error(err);
    }
    finally {
      await client.close();
      return questions;
    }
  }
}
