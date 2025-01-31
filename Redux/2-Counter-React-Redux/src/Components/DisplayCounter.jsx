import { useSelector } from "react-redux";

const DisplayCounter = () =>
{
  const counter = useSelector((store) => store.counter);
  return <>

        Counter Current Value : {counter}
           
  </>
}

export default DisplayCounter;