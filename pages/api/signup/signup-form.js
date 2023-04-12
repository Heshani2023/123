import MongoQuizData from "../../../src/data/dbconnection";

export default async (req, res) => {
  try {

    var qd = new MongoQuizData();
    let user = await qd.findUser(req.body.email);

    if (user.email === 'NotFound'){
      qd.addUser(req.body.name, req.body.email, req.body.password, req.body.role)
      res.status(200).json();
    }
    else{
      res.status(500).json();
    }

  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};