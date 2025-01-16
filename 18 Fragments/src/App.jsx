import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './Components/FoodItems'
import ErrorMsg from './Components/ErrorMsg.jsx'
import Container
from './Components/Container.jsx'
import FoodInput from './Components/FoodInput.jsx'
function App() {
  //let foodItems = [];
  let [foodItems, setFoodItems] = useState([
    // "Dal", "Vegetables", "Milk", "Salad", "Roti"
  ])

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTestState = textStateArr[1];
  // console.log(`Current value of textState : ${textToShow}`);

  let [textToShow, setTestState] =  useState("Food Item Entered by user");
  console.log(`Current value of textState : ${textToShow}`);
  const OnKeyDown = (event) =>
  {
    if(event.key === "Enter")
    {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      console.log("Food value entered is " + newFoodItem);
    }
  }
   
  return (
    <>
    <Container>
        <h1 className="food_heading">Healthy Food</h1>
        <ErrorMsg items = {foodItems}></ErrorMsg>
        <FoodInput  handleKeyDown= {OnKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items = {foodItems}></FoodItems>

    </Container>
   
    </>
  )
}

export default App
