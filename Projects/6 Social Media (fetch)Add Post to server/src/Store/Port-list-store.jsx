import { createContext , useReducer, useState, useEffect} from "react";

export const PostList = createContext({
  postList :[],
  addPost: () => {},
  addIitialPost: () => {},
  deletePost: () => {},
  fetch : false
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
    newPostList = [action.payload, ...currPostList]
  }

  else if(action.type === "ADD_INITIAL_POST")
  {
    newPostList = action.payload.posts;
    
  }
  return newPostList;;
}

const PostListProvider = ({children}) =>
{
  const [postList, dispathchPostList] = useReducer(postListReducer,[]);


  const [fetching, setFetching] = useState(false);

  const addPost = (post) => 
  {
    dispathchPostList
    ({
      type: "ADD_POST",
      payload: post,
    });
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
    


  return (
  <PostList.Provider value={{postList, addPost,addIitialPost, deletePost, fetching}}>{children}</PostList.Provider>
  );
};


export  default PostListProvider;
