/**
 * Defined Forgot Password functionality.
 */
import { useRouter } from 'next/router'
import React from "react";
import { InputGroup, Card, InputLeftElement, Input, Center, useToast } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons'
import { Box,useColorModeValue,SimpleGrid,Button,Image,chakra,Stack } from "@chakra-ui/react";

/**
 * Creates a User interface for Forgot Password.
 * Ask for email address.
 * If success it will direct to the reset password page.
*/
export default function forgotPassword() {
    const cardStyle = {
        opacity: 0.95
    }
    const router = useRouter();
    const toast = useToast();


    return (
        <>
            <Box mx="auto" h={"100vh"} bg={"yellow.100"}>
                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={0}
                    _after={{
                        opacity: 0.95,
                        pos: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: -1,
                        content: '" "',
                    }}
                    bg={"yellow.100"}
                >
                    <Box
                        textAlign="center"
                        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                        m="auto"
                    >
                        <chakra.h1
                            fontSize={{ base: "4xl", sm: "3xl", md: "4xl" }}
                            letterSpacing="tight"
                            lineHeight="short"
                            fontWeight="extrabold"
                            color={useColorModeValue("gray.300", "gray.300")}
                        >
                            <chakra.span
                                display={{ base: "block", xl: "inline" }}
                                color={"gray.300"}
                                ml={10}
                            >
                                Forgot Password
                            </chakra.span>
                        </chakra.h1>

                        <Card bgColor='#E7DEEA'
                            maxWidth='80vw' minHeight="44vh"
                            borderRadius={'30px'} sx={cardStyle}
                            marginStart={20}
                            mt={10}
                        >
                        <Stack spacing={6} mt={14} marginStart={8} marginEnd={8}
                        >
                            {/* <FormControl id="email"> */}
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.4em'
                                        children={<EmailIcon color='yellow.400' />}
                                    />
                                    <Input id="email" bg='yellow.400' marginLeft={10} marginEnd={10} type='email' placeholder='Email ID' textColor={'white'} />
                                </InputGroup>

                            <Center h='50px' color='white'>
                            <Button width={60} height={10} bg={useColorModeValue("yellow.400", "yellow.400")}
                                textColor={"white"}  size="lg"
                                onClick={() =>  toast({
                                    title: "Success",
                                    description: "An email has been sent to your mailing address",
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true,
                                    colorScheme: 'gray'
                                })
                            }
                                _hover={{
                                    bg: "gray.500",
                                  }}
                            >
                                Send Verification Code
                            </Button>
                            </Center>

                            <Center h='50px' color='white'>
                            <Button width={60} height={10} bg={useColorModeValue("yellow.400", "yellow.400")}
                                textColor={"white"}  size="lg"
                                onClick={() => router.push("/resetPassword")}
                                _hover={{
                                    bg: "gray.500",
                                  }}
                            >
                                Continue
                            </Button>
                            </Center>


                        </Stack>
                    </Card>
                    </Box>
                    <Box ml={20}>

                        <Image
                            src="/img/forgot.avif"
                            alt="quiz"
                            fit="cover"
                            h={"100vh"}
                            bg="gray.100"
                            loading="lazy"
                        />
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}