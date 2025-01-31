import { useRef } from "react";
import { useDispatch } from "react-redux"
import { counterActions, privacyActions } from "../Store";

const Controls = () =>
{
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () =>
  {
   dispatch(counterActions.increment());
  }

  const handleDecrement = () =>
  {
    dispatch(counterActions.decrement());
  }

  const handleADD = () =>
  {
    dispatch(counterActions.add({
      num : inputElement.current.value
    }))
    num : inputElement.current.value = "";
  }
  const handleSubtract = () =>
  {
    dispatch( counterActions.subtract({
      num : inputElement.current.value
    }))
    num : inputElement.current.value = "";
  }
  
  const handlePrivacyToggle = () =>
    {
      dispatch(privacyActions.toggle());
    }
    


  return <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
        
        <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>

        <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type = "text"
        placeholder="Enter Number"
        ref = {inputElement}
        >
        </input>

        <button 
          type="button" 
          className="btn btn-primary btn-danger" 
          onClick={handleADD} > Add</button>

        <button type="button" className="btn btn-success" onClick={handleSubtract}>Subtract</button>
</div>
  </>
}
export default Controls