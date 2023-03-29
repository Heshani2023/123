/**
 * To create title card component for take a quiz UI
 */
import { Box, Heading, chakra } from "@chakra-ui/react";

/**
 * Creating the title card for the Quiz Title and an indecator for quiz time
 * @returns the title of the Quiz as a header and an indecator for quiz time
 */
export default function Card() {
  return (
    <Box textAlign={"center"} width={"100%"} margin={"auto"} paddingTop={'2vh'}>
      <Heading fontSize={'4xl'}>Mid Term Exam - COMP 6905</Heading>
      <chakra.h3 fontSize={'xl'} paddingTop={'1vh'}>55:30</chakra.h3>
    </Box>
  );
}
