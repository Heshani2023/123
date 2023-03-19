import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this quiz."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  subject: {
    type: String,
    required: [true, "Please provide a subject for this quiz."],
  },
  type: {
    type: String,
    required: [true, "Please provide a type for this quiz."],
  },
  marks: {
    type: Number,
  },
});

export default interface Quiz {
  id: {
    type: Number
  }
  name: {
    type: String;
  };
  subject: {
    type: String;
  };
  type: {
    type: String;
  };
  marks: {
    type: Number;
  };
}

// export default mongoose.models.Quiz ||
//   mongoose.model("Quiz", QuizSchema, { collection: "quizes" });
