import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './Components/FoodItems'
import ErrorMsg from './Components/ErrorMsg.jsx'
function App() {
  //let foodItems = [];
  let foodItems = ["Dal", "Vegetables", "Milk", "Salad", "Roti"]
   
  return (
    <>
        <h1>Healthy Food</h1>

        <ErrorMsg items = {foodItems}></ErrorMsg>

        <FoodItems items = {foodItems}></FoodItems>

    </>
  )
}

export default App
