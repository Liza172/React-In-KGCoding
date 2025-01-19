import { useContext, useRef } from "react";
import {PostList} from "../Store/Port-list-store";


const CreatePost = () =>
{
  const {addPost} = useContext(PostList);
 
    const userId = useRef();
    const postTitle = useRef();
    const postBody = useRef();
    const reactions = useRef();
    const tags = useRef();

    const handleSubmit = (event) =>
    {
      event.preventDefault(); 
      const userIdData = userId.current.value;
      const postTitleData = postTitle.current.value;
      const postBodyData = postBody.current.value;
      const reactionsData = reactions.current.value;
      const tagsData = tags.current.value.split(/(\s+)/);
      addPost(userIdData, postTitleData, postBodyData, reactionsData, tagsData);
    };
 
  return (
    <form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label 
      htmlFor="userId" 
      className="form-label">
        Enter your User ID
    </label>

    <input 
      type="text"
      ref = {userId} 
      className="form-control" 
      id="userId" 
      placeholder="Your User ID"
    />
  </div>
  
  <div className="mb-3">
    <label 
      htmlFor="title" 
      className="form-label">
      Post Title
    </label>

    <input 
      type="text" 
      ref = {postTitle}
      className="form-control" 
      id="title" 
      placeholder="How are you feeling today?"
    />
  </div>

  <div className="mb-3">
    <label 
      htmlFor="body" 
      className="form-label">
      Post Content
    </label>

    <input 
      type="text" 
      ref = {postBody}
      className="form-control" 
      id="body" 
      placeholder="Tell us more about it..."
    />
  </div>
  <div className="mb-3">
    <label 
      htmlFor="reaction" 
      className="form-label">
      Reactions
    </label>

    <input 
      type="text"
      ref = {reactions} 
      className="form-control" 
      id="reaction" 
      placeholder="How many People reacted to this post"
    />
  </div>

  <div className="mb-3">
    <label 
      htmlFor="tags" 
      className="form-label">
      Hashtags
    </label>

    <input 
      type="text" 
      ref = {tags}
      className="form-control" 
      id="tags" 
      placeholder="Please Enter tags using space"
    />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
export default CreatePost;