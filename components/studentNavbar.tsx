/**
 * Defining NavBar for all the student pages using Chakra UI Framwork for react
 */
import { useSession, signOut } from 'next-auth/react';

import Router from "next/router";
import { useEffect } from "react";


import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

/**
 * Defining the Menu links in an array for easy customization
 */
const Links = ['Home','Take a Quiz'];

/**
 * To create links for the navigation bar items
 * @param param0 If there are any children properties for Navlink 
 * @returns the navigation links which are currently set to display the same page
 */
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    fontWeight={"bold"}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.200', 'orange.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

/**
 * For creating the navigation bar styles and mapping of the Link array data as menu items
 * @returns Navigation bar for all the pages for students mapped with the values in the Links array
 */
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session, status } = useSession()

  return (
    <>
      <Box bg={'yellow.100'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={18} alignItems={'center'}>
            <Box><Image src="../img/logo.png" alt="Quizzeria" /></Box>

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
                as={'a'}
                fontSize={'sm'}
                color={'#CC5801'}
                fontWeight={'bold'}
                variant={'link'}
                href={'#'}
                margin={5}>
                {session?.user?.name}
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'orange'}
              size={'sm'}
              mr={4}
              onClick={() => signOut()}
              >
              Log Out
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    '../img/avatar.png'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}