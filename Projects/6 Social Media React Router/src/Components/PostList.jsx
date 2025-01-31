import Post from "./Post"
import { cloneElement, useContext, useState } from "react";
import {useLoaderData} from "react-router-dom"

import WelcomeMsg from "./WelcomeMsg";
import { PostList as PostListData } from "../Store/Port-list-store";


const PostList = () =>
{
 
 const postList = useLoaderData();

 return <>
  
  {!postList.length === 0 && <WelcomeMsg/>}
  { postList.map((post) => (
    <Post key = {post.id} post = {post}/>
  ))} 
  </>
}
  export const postLoader = () => 
  {
    return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    })
  }
    
export default PostList;