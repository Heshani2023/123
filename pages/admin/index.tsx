/**
 * Dashboard design for admins
 */
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar  from '../../components/adminNavbar'
import Footer  from '../../components/Footer'
import Card  from '../../components/Card'
import TableView  from '../../components/adminHomeTable'
import { Box } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * Function to buid the admin Hompe page with components
 * @returns the home page for admins build with the components Navigation Bar, Title Card, a table containing the admin's quizzes and the footer. 
 */
function adminHome() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const userRole = (session: any) => {
    let role = session?.user?.role;
    if (role) return role;
    return null;
  };

  useEffect (() => {
    if (status === "unauthenticated") router.replace ("/");
    }, [status]);
  
    if (status === "authenticated"){
      var role: any = userRole(session);
      if (role == "student") {
        router.replace("/student");
      } else if (role == "admin") {
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
    }
  }
  
  export default adminHome;