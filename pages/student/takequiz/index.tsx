import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../../../components/studentNavbar";
import Footer from "../../../components/Footer";
import Card from "../../../components/ExamTitleCard";
import ShortAnswerQuestionList from "../../../components/shortAnswerQuestions";
import { Box } from "@chakra-ui/react";
import clientPromise from "../../../src/lib/mongodb";

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const quizzes = await db
      .collection("quizes")
      .find({})
      .toArray();

    return {
      props: { quizzes: JSON.parse(JSON.stringify(quizzes)) },
    };
  } catch (e) {
    console.error(e);
  }
}
/**
 * Function to return Take a Quiz UI for students
 * @returns Attempt a Quiz UI for students
 */
export default function takeAQuiz() {
  return (
    <>
      <Head>
        <title>Quiz Bank</title>
        <meta name="description" content="Quiz App Home for students" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <NavBar />
          <Box justifyContent="center">
            <Card />
          </Box>
          <Box flex="1" mx="auto" justifyContent="center" alignContent={"center"}>
            <ShortAnswerQuestionList/>
          </Box>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}
