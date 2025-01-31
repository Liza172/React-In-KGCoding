
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header'
import DisplayCounter from './Components/DisplayCounter'
import Container from './Components/Container'
import Controls from './Components/Controls'
import { useSelector } from 'react-redux'
import PrivacyMessage from './Components/PrivacyMessage'
function App() {
  

  const privacy = useSelector( (store) => store.privacy) 

  return (
      <center className="px-4 py-5 my-5 text-center">
        <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage/> : <DisplayCounter/>}
        </div>
        <Controls></Controls>
        </Container>
      </center>
  )
}

export default App
