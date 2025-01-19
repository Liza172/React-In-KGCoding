import { createContext , useReducer} from "react";

export const PostList = createContext({
  postList :[],
  addPost: () => {},
  deletePost: () => {}
});

const postListReducer = (currPostList,action) =>
{
  return currPostList;
}

const PostListProvider = ({children}) =>
{
  const [postList, dispathchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};
  const deletePost = () => {};

  return (
  <PostList.Provider value={{postList, addPost, deletePost}}>{children}</PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
  id : "1",
  title : 'Going to Mumbai',
  body : 'Hi friends, I am going to Mumbai for my vacations.Hope to enjoy a lot. peace out.',
  reactions : 200,
  userId : 'Liza04',
  tags : ["Vacations", "Mumbai", "Enjoying"], 
  },
  {
    id : "2",
    title : 'Pass ho gaya bhai',
    body : '4 saal ki masti k baad bhi ho gaya hain paas. Hard to beleive.',
    reactions : 150,
    userId : 'Liza04',
    tags : ["Graduating", "Unbelivable"], 
  },
  
];
export  default PostListProvider;
