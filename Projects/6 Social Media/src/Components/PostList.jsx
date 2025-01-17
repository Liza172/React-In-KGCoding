import Post from "./Post"
import { useContext } from "react";
import { PostList as PostListData } from "../Store/Port-list-store";

const PostList = () =>
{
  const {postList} = useContext(PostListData);
  console.log(postList);

 return <>
  {postList.map((post) => (
    <Post key = {post.id} post = {post}/>
  ))}
  
    
  </>
  
}
export default PostList;