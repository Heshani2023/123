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
  Flex,
  Box
} from "@chakra-ui/react";
import Quiz from "../src/models/Quiz";
import { useState } from "react";
import ReactPaginate from "react-paginate";
/**
 * to load css styles to the page since there are no default pagination in Chakra UI
 */
import GlobalStyles from "./globalStyles"
/**
 * Interface props to define the Quiz
 */
interface QuizProps {
  quizzes: Array<Quiz>;
}

export async function updateMarks(postId: number, marks: number) {
  try {
    const options:any = {
      method: "POST",
      
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: `{"marks": ${marks}}`
    }

    let response = await fetch(`/api/quizes/post?id=${postId}`,options)
    .then (response => response.json())
    .then (response => console.log(response))
    .catch(err => console.error(err));
    
    window.location.reload();
  } catch (error) {
    console.log("An error occured while updating marks ", error);
  }
}

/**
 * Defining the number of items per a page for pagination. 
 */
const ITEMS_PER_PAGE = 5;
/**
 * To define the table and map it with the quiz data object
 * @param param0 : Quiz object created with the types for loading data
 * @returns a table of quiz data related to the student/quiztaker
 */
export default function QuizTable({ quizzes }: QuizProps) {
  /**
   * calculations for pagination: currentpage, selected page, offset, number of pages and the set of queries listed in a single page.
   */
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * ITEMS_PER_PAGE;
  const pagedQuizzes = quizzes.slice(offset, offset + ITEMS_PER_PAGE);
  const noOfPages = Math.ceil(quizzes.length / ITEMS_PER_PAGE);
  return (
    <>
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
        {pagedQuizzes.map((quiz) => (
          <Tr key={quiz._id}>
            <Td>{quiz.name}</Td>
            <Td>{quiz.subject}</Td>
            <Td>{quiz.type}</Td>
            <Td>{quiz.marks}</Td>
            <Td textAlign={"right"}>
              <Button colorScheme="orange" onClick={() => updateMarks(quiz._id as Number, -1)}>Retake Quiz
              
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    <Flex justifyContent="center" mt={5}>
      <GlobalStyles/>
      <Box display="inline-block" borderRadius="md" border="0px solid gray" >
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={noOfPages}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"} 
        />
      </Box>
    </Flex>
    </>
  );
}


