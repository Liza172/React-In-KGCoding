import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo_Item_Store";



function ErrorMessage() {
  const {todoitems} = useContext(TodoItemsContext);

  return (todoitems.length == 0 && <h2>Empty Bucket</h2>)
}

export default ErrorMessage;