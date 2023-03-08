import React, { useState } from "react";
import {useRouter} from 'next/router'

export default function addPosts() {
    const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title:string = e.target.title.value;
    const content:string = e.target.content.value;
    console.log(title)
    if (title && content) {
      try {
        let response = await fetch(`/api/addPosts`, {
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
    <><title>Test MongoDb Add</title>
            <div>
          <form action = '' method="post" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" id="title" name="title" />
            <label>content</label>
            <input type="text" id="content" name="content" />
            <button type="submit">Submit</button>
            </form>
            </div>
            </>
      )
}