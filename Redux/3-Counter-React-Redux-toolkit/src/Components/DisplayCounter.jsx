import { useSelector } from "react-redux";

const DisplayCounter = () =>
{
  const {counterval}= useSelector((store) => store.counter);
  return <>

        Counter Current Value : {counterval}
           
  </>
}

export default DisplayCounter;