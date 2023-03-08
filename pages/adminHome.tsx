import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar  from '../components/adminNavbar'
import Footer  from '../components/Footer'
import Card  from '../components/Card'
import TableView  from '../components/adminHomeTable'
import { Box } from "@chakra-ui/react";


function adminHome() {
    return (
        <>
          <Head>
            <title>Quiz App</title>
            <meta name="description" content="Quiz App Home for Admin" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ChakraProvider>
            <Box minHeight="100vh" display="flex" flexDirection="column">
                <NavBar />
                <Box justifyContent="center"><Card/></Box>
                <Box flex="1" width='80%'mx="auto" justifyContent="center">
                    <TableView/>
                </Box>
                <Footer />
            </Box>
          </ChakraProvider>
        </>
      )
  }
  
  export default adminHome;