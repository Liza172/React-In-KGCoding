import Header from "../Components/Header"
import Footer from "../Components/Footer"
import {Outlet} from "react-router-dom"
import Fetchitems from "../Components/Fetchitems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../Components/LoadingSpinner"

function App() {

  const fetchStatus = useSelector(store => store.fetchStatus)

  
  return (
    <>
      <Header/>
      <Fetchitems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
