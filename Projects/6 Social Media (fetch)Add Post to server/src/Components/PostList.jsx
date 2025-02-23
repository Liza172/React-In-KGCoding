import Post from "./Post"
import { cloneElement, useContext, useState } from "react";
import WelcomeMsg from "./WelcomeMsg";
import { PostList as PostListData } from "../Store/Port-list-store";
import { useEffect } from "react";
import Loading from "./Loading";

const PostList = () =>
{
  const {postList,  fetching} = useContext(PostListData);
  console.log(postList);

 
 return <>
  {fetching && <Loading/>}
  {!fetching && postList.length === 0 && <WelcomeMsg/>}
  {!fetching &&  postList.map((post) => (
    <Post key = {post.id} post = {post}/>
  ))} 
  
    
  </>
  
}
export default PostList;