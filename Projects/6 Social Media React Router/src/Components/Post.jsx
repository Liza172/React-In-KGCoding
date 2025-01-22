import { AiFillDelete } from "react-icons/ai";
import { FcDislike } from "react-icons/fc";
import { FcLike } from "react-icons/fc";



import {PostList} from "../Store/Port-list-store";
import { useContext } from "react";
const Post = ({post}) =>
{

  const {deletePost} = useContext(PostList);
  return (
    <div className="card post-card">
  
    <div className="card-body">

      <h5 className="card-title">{post.title}

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick = {() => deletePost(post.id)}>
          <AiFillDelete/>
          <span className="visually-hidden">unread messages</span>
      </span>
      </h5>
      <p className="card-text">{post.body} </p>
      {post.tags.map((tag) => 
      (
        <button key = {tag} className = "badge text-bg-primary tag">{tag}</button>
      ))}
      <div className="alert alert-info reaction" role="alert">
       This Post has been <FcLike />   {post.reactions.likes}   and   <FcDislike /> {post.reactions.dislikes} peoples...!!!
      </div>
    </div>
  </div>
  )
}
export default Post;