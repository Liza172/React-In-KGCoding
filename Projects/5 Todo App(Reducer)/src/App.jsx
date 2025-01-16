import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer, useState } from "react";
import ErrorMessage from "./Components/ErrorMsg";
import  TodoItemsContext  from "./Store/Todo_Item_Store";



function App() {

  //const [todoItems, setTodoItems] = useState([]);
  
    


  return (
    <TodoItemsContext>
    <center className="todo-container">

      <AddTodo />
      <ErrorMessage  />
      <TodoItems  />
    </center>
    </TodoItemsContext>
  );
}

export default App;