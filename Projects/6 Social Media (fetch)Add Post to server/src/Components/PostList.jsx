import Post from "./Post"
import { cloneElement, useContext, useState } from "react";
import WelcomeMsg from "./WelcomeMsg";
import { PostList as PostListData } from "../Store/Port-list-store";
import { useEffect } from "react";
import Loading from "./Loading";

const PostList = () =>
{
  const {postList, addIitialPost} = useContext(PostListData);
  console.log(postList);
  const [fetching, setFetching] = useState(false);
  const controller  = new AbortController();
  const signal = controller.signal;

  useEffect( () => {
    setFetching(true)
    fetch("https://dummyjson.com/posts", {signal})
    .then((res) => res.json())
    .then(data => {
      addIitialPost(data.posts);
      setFetching(false);
    });

    return () => {
      console.log("Cleaning Up UseEffect.");
      controller.abort;
    }
  }, [])
    
 return <>
  {fetching && <Loading/>}
  {!fetching && postList.length === 0 && <WelcomeMsg/>}
  {!fetching &&  postList.map((post) => (
    <Post key = {post.id} post = {post}/>
  ))} 
  
    
  </>
  
}
export default PostList;