import Item from "./Item"
const FoodItems = ({items}) => {
  // let foodItems = ["Dal", "Vegitables", "Milk", "Salad", "Roti"]

  return (
    <ul className = "list-group">
        {items.map((item) => (
          <Item key = {item} foodItem = {item}></Item>
        ))}
    </ul>


  );
}
export default FoodItems;