import { createContext , useReducer} from "react";

export const PostList = createContext({
  postList :[],
  addPost: () => {},
  addIitialPost: () => {},
  deletePost: () => {}
});

const postListReducer = (currPostList,action) =>
{
  let newPostList = currPostList;
  if(action.type ==="DELETE_POST")
  {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postid)
  }
  else if(action.type === "ADD_POST")
  {
    newPostList = action.payload.posts;
  }

  else if(action.type === "ADD_INITIAL_POST")
  {
      newPostList = [action.payload, ...currPostList]
  }
  return newPostList;;
}

const PostListProvider = ({children}) =>
{
  const [postList, dispathchPostList] = useReducer(postListReducer,[]);

  const addPost = (userIdData, postTitleData, postBodyData, reactionsData, tagsData) => 
  {

    console.log(`${userIdData} ${postTitleData} ${postBodyData} ${reactionsData} ${tagsData}`)
    dispathchPostList
    ({
      type: "ADD_POST",
      payload:
      {
        id : Date.now(),
        title : postTitleData,
        body : postBodyData,
        reactions : reactionsData,
        userId : userIdData,
        tags : tagsData, 
      }
    })
  };

  const addIitialPost = (posts) => 
    {
      dispathchPostList
      ({
        type: "ADD_INITIAL_POST",
        payload:
        {
          posts
        }
      })
    };

  const deletePost = (postid) => {
    dispathchPostList({
      type:"DELETE_POST",
      payload: {
        postid,
      },
    })
    console.log(`Delete Post call for ${postid}`)
  };

  return (
  <PostList.Provider value={{postList, addPost,addIitialPost, deletePost}}>{children}</PostList.Provider>
  );
};


export  default PostListProvider;
