import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react';

import Router from "next/router";
import { useEffect } from "react";

import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text, Stack } from '@chakra-ui/react'
const host = process.env['HOST'];

export async function getServerSideProps() {
  try {
    
    let response = await fetch(`${host}/api/getPosts`);
    let posts = await response.json();
    return {
      props: { 
        posts: JSON.parse(JSON.stringify(posts)) 
      },
    };
  } catch (e) {
    console.error(e);
  }
}

export async function handleDeletePost (postId: string) {
  
  try {
    let response = await fetch(
      `/api/deletePost?id=${postId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    window.location.reload();
  } catch (error) {
    console.log("An error occurred while deleting ", error);
  }
};


export default function Posts(props : any) {
  const { data: session, status } = useSession()
  const user = session?.user;
  console.log(session)
  useEffect (() => {
    if (status === "unauthenticated") Router.replace ("/");
    }, [status]);
  
    if (status === "authenticated")
      return (
        <>
        <title>Dashboard</title>
        <Stack spacing={3}>
        <Text fontSize='3xl'>Hello {user.name}</Text>
      </Stack>
      <Button colorScheme='red' onClick={() => signOut()}>Sign out</Button>
      <Stack spacing={3}>
      <Text fontSize='3xl'><Link href={{ pathname: '/add' }}>Add Post</Link></Text>
      </Stack>
      

        {
          props.posts.map(post => {
            return(
              <div key={post._id}>
                <h2>
                {post.title} | <Link href={{ pathname: '/edit', query: { id: `${post._id}` } }}>Edit</Link> | <button onClick={() => handleDeletePost(post._id as string)}>
                        Delete
                      </button>
                </h2>
                <p>{post.content}</p>
              </div>
            )
          })
    }
    </>
  )
}