/**
 * To create title card for the whole site as a reusable component
 */
import { Box, Heading, chakra } from "@chakra-ui/react";

/**
 * Creating the title card for the dashboard pages for students ans admins
 * @returns the title of the tables in both dashboard pages
 */
export default function Card() {
  return (
    <Box textAlign={"center"} width={"100%"} margin={"auto"} paddingTop={'2vh'} paddingBottom={'3vh'}>
      <Heading fontSize={'4xl'}>My Quizzes</Heading>
    </Box>
  );
}