import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import CreatePost from './Components/CreatePost.jsx'
import PostList, {postLoader} from './Components/PostList.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/", element: <PostList/> , loader : postLoader},
      {path: "/create-post", element: <CreatePost/>}
    ],
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
