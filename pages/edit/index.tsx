import React, { useState } from "react";
import {useRouter} from 'next/router'
let id = 0
export async function getServerSideProps (context) {
    try {
        id = context.query["id"]
      let response = await fetch(`${process.env['HOST']}/api/findPost?id=${id}`);
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

export default function editPosts(props : any) {
    const router = useRouter()
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        const title = e.target.title.value;
        const content = e.target.content.value;


        if (title && content) {
          try {
            let response = await fetch(`/api/editPost?id=${props.posts._id}`, {
              method: "POST",
              body: JSON.stringify({
                title,
                content,
              }),
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              },
            });
            response = await response.json();
            
            
          } catch (errorMessage: any) {
            console.log(errorMessage);
          }
          router.push("/")
        } else {
          console.log("All fields are required");
        }
    
        
    
      };

    return (
      <>
      <title>Test MongoDb Edit</title>
        <div>
      <form action = '' method="post" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" id="id" name="id" defaultValue={props.posts._id} hidden/>
        <input type="text" id="title" name="title" defaultValue={props.posts.title} />
        <label>content</label>
        <input type="text" id="content" name="content" defaultValue={props.posts.content} />
        <button type="submit">Submit</button>
        </form>
        </div>
        </>
  )
}