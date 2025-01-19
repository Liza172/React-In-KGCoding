
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import { useState } from 'react'
import PostListProvider from './Store/Port-list-store'
function App() {

  const [selectedTab, setselectedTab] = useState("Create Post");
  return (
    <PostListProvider>
      <div className ="app-container">
        <Sidebar selectedTab = {selectedTab} setselectedTab = {setselectedTab}></Sidebar>
        <div className="contain">
          <Header></Header>
          {selectedTab == "Home" ? (<PostList></PostList>) : ( <CreatePost></CreatePost>)}
          <Footer></Footer>
        </div>
    </div>
    </PostListProvider>
  )
}

export default App
