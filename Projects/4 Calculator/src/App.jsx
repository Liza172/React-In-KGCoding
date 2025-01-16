
import styles  from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { FcCalculator } from "react-icons/fc";


import { useState } from "react";
function App() {
  let [exp, setexp] = useState("");
  const onClickBtn = (buttonText) =>
  {
    if(buttonText == 'C')
    {
      setexp("");
    }
    else if(buttonText == "=")
    {
      const res = eval(exp);
      setexp(res);
    }
    else
    {
      let newExp = exp + buttonText;
      setexp(newExp);
    }
    
  }
  return (
    <>
    <h1 className={styles.parent}>
      <span id={styles.a}>Calculator </span>
      <span id={styles.b}>Project</span>
      <FcCalculator /> 
    </h1>
    <div className={styles.calculator}>
      <Display displayval = {exp}/>
      <ButtonsContainer onClickBtn = {onClickBtn}/>   
    </div>
    </>
  )
}

export default App
