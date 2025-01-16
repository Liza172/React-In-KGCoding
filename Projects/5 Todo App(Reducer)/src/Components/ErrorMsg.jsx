import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo_Item_Store";


const {todoitems} = useContext(TodoItemsContext);

function ErrorMessage() {
  
  return (todoitems.length == 0 && <h2>Empty Bucket</h2>)
}

export default ErrorMessage;