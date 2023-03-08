import { Table, Thead, Tbody, Tr, Th, Td, Button, Center } from "@chakra-ui/react";
import { Quiz } from "../types/student_quiz";

interface Props {
  quizzes: Quiz[];
}
const quizzes: Quiz[] = [
  {
    id: 1,
    name: "Quiz 1",
    subject: "Math",
    type: "Multiple Choice",
    marks:"16/20"
  },
  {
    id: 2,
    name: "Quiz 2",
    subject: "English",
    type: "True or False",
    marks:"80%"
  },
  {
    id: 3,
    name: "Quiz 8",
    subject: "Science",
    type: "Fill in the Blanks",
    marks:"30%"
  },
  {
    id: 4,
    name: "Quiz 15",
    subject: "IQ",
    type: "Short Answer",
    marks:"90/100"
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
            <Td textAlign={"right"}>
              <Button colorScheme="orange">Retake Quiz</Button>
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
