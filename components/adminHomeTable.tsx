import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { Quiz } from "../types/admin_quiz";

interface Props {
  quizzes: Quiz[];
}
const quizzes: Quiz[] = [
  {
    id: 1,
    name: "Quiz 1",
    subject: "Math",
    type: "Multiple Choice",
    marks:"16/20",
    time:"60 min",
    quizTakers:10,
    Attempts:2
  },
  {
    id: 2,
    name: "Quiz 2",
    subject: "English",
    type: "True or False",
    marks:"80%",
    time:"20 min",
    quizTakers:15,
    Attempts:2
  },
  {
    id: 3,
    name: "Quiz 8",
    subject: "Science",
    type: "Fill in the Blanks",
    marks:"30%",
    time:"60 min",
    quizTakers:35,
    Attempts:5
  },
  {
    id: 4,
    name: "Quiz 15",
    subject: "IQ",
    type: "Short Answer",
    marks:"90/100",
    time:"10 min",
    quizTakers:10,
    Attempts:2
  },
  // Add more quizzes as needed
];

const QuizTable = ({ quizzes }: Props) => {
  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Quiz Name</Th>
          <Th>Subject</Th>
          <Th>Quiz Type</Th>
          <Th>Marks</Th>
          <Th>Time</Th>
          <Th>Quiz Takers</Th>
          <Th>Attempts</Th>
          <Th textAlign={"right"}></Th>
          <Th textAlign={"right"}></Th>
        </Tr>
      </Thead>
      <Tbody>
        {quizzes.map((quiz) => (
          <Tr key={quiz.id}>
            <Td>{quiz.name}</Td>
            <Td>{quiz.subject}</Td>
            <Td>{quiz.type}</Td>
            <Td>{quiz.marks}</Td>
            <Td>{quiz.time}</Td>
            <Td>{quiz.quizTakers}</Td>
            <Td>{quiz.Attempts}</Td>
            <Td textAlign={"right"}>
              <Button colorScheme="orange">Edit</Button>
            </Td>
            <Td textAlign={"right"}>
              <Button colorScheme="orange">Delete</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const TableView2 = () => {
  return <QuizTable quizzes={quizzes} />;
};

export default TableView2;
