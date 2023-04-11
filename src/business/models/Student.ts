export default interface Student {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  role: string;
  quizzes: { subject: string; marks: number }[];
}
