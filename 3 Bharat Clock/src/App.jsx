
import ClockHeading from './Components/ClockHeading'
import ClockSlogan from './Components/ClockSlogan'
import CurrentTime from './Components/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  

  return (
    <center>
      <div>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </div>
    </center>
  )
}

export default App
