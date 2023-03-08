import {
  Box,
  Text,
} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box 
      textAlign="center"
      color={'white'}
      padding="1rem"
      margin="2rem 0 0 0"
      bg={'blackAlpha.900'}
    >
      <Text>© 2023 HTeam. All Rights Reserved</Text>
    </Box>
  );
}