import MongoQuizData from "../../src/data/dbconnection";

export async function getServerSideProps() {
  var qd = new MongoQuizData();
  let quizzes = await qd.findAllQuizzes();
  console.log("All Quizzes retrieved: ", quizzes);

  let oneQuiz = await qd.findQuiz("Math");
  console.log("One Quiz retrieved: ", oneQuiz);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function DemoHome() {
  return (
    <h1>
      This page was created to demo that the data layer works. Pls check the
      console for proof.{" "}
    </h1>
  );
}
