import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo_Item_Store";

function ErrorMessage() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;


  return <h2>Empty Bucket</h2>
}

export default ErrorMessage;