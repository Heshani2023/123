import mongoose, { Model } from "mongoose";

const { MONGODB_URI } = process.env;

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .then(() => {
      console.log("MongoDB connected!!");
    })
    .catch((err) => console.log(err));

  const QuizItemSchema = new mongoose.Schema({
    quiztopic: String,
    question: String,
    answer: String,
  });

  const QuizSchema = new mongoose.Schema({
    name: String,
    subject: String,
    type: String,
    marks: Number,
  });

  const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);
  return { conn, Quiz };
};
