import { useState } from "react";
import styles from "./FoodItem.module.css"

const FoodItems = ({items}) => {
  // let foodItems = ["Dal", "Vegitables", "Milk", "Salad", "Roti"]
  let [activeItem, setactiveItem] = useState([]);
  const handleButtonClicked = (item) =>
  {
    if(activeItem.includes(item) == true)
    {
      let newArr = activeItem.filter((item1) => item1 !== item)
      setactiveItem(newArr)

    }
    else
    {
      let newItems = [...activeItem, item];
      setactiveItem(newItems);
    }
    
   
  }
  
  return (
    <ul className = "list-group">
        {items.map((item) => (
             
          // <Item key = {item} foodItem = {item}></Item>
            <li  key = {item} className = {`list-group-item ${activeItem.includes(item) && 'active'}`}>

            <span className={styles.textcolor}>{item}</span>
            <button className={`${styles.btn1} btn btn-info`}
                    onClick = {() => handleButtonClicked(item)}> {activeItem.includes(item)? "Remove" : "Buy"}</button>
          </li>
        ))}
    </ul>


  );
}
export default FoodItems;