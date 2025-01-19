import Post from "./Post"
import { useContext } from "react";
import WelcomeMsg from "./WelcomeMsg";
import { PostList as PostListData } from "../Store/Port-list-store";

const PostList = () =>
{
  const {postList, addIitialPost} = useContext(PostListData);
  console.log(postList);

  const handleGetPosts = () =>
  {
    fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then(data => {
      addIitialPost(data.posts)
    });
  }

 return <>
  {postList.length === 0 && <WelcomeMsg onGetPosts={handleGetPosts}/>}
  {postList.map((post) => (
    <Post key = {post.id} post = {post}/>
  ))}
  
    
  </>
  
}
export default PostList;