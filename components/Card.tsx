import { Box,chakra } from "@chakra-ui/react";
export default function Card() {
  return (
    <Box textAlign={"center"} width={"100%"} margin={'auto'}>
        <chakra.h1
        py={5}
        fontSize={48}
        fontFamily={'Work Sans'}
        fontWeight={'bold'}
        color={"gray.800"}>
        My Quizzes
        </chakra.h1>
    </Box>
  );
}