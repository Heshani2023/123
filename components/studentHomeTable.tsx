/**
 * Designing a table view for students to display their current quizzes
 */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Center,
} from "@chakra-ui/react";
import Quiz, { UserQuiz } from "../src/business/models/Quiz";

/**
 * Interface props to define the Quiz
 */
interface QuizProps {
  quizzes: Array<UserQuiz>;
}

export async function updateMarks(postId: number, marks: number) {
  try {
    const options: any = {
      method: "POST",

      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: `{"marks": ${marks}}`,
    };

    let response = await fetch(`/api/quizes/post?id=${postId}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    window.location.reload();
  } catch (error) {
    console.log("An error occured while updating marks ", error);
  }
}

/**
 * To define the table and map it with the quiz data object
 * @param param0 : Quiz object created with the types for loading data
 * @returns a table of quiz data related to the student/quiztaker
 */

export default function QuizTable({ quizzes }: QuizProps) {

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
        {quizzes.map((userQuiz) => (
          <Tr key={userQuiz._id}>
            <Td>{userQuiz.name}</Td>
            <Td>{userQuiz.subject}</Td>
            <Td>{userQuiz.type}</Td>
            <Td>{userQuiz.marks}</Td>
            <Td textAlign={"right"}>
              <Button
                colorScheme="orange"
                onClick={() => updateMarks(userQuiz._id as Number, -1)}
              >
                Retake Quiz
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
