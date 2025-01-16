import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer, useState } from "react";
import ErrorMessage from "./Components/ErrorMsg";
import { TodoItemsContext } from "./Store/Todo_Item_Store";

const todoItemReducer = (action) =>
{
  return [];
}
function App() {

  const [todoItems, setTodoItems] = useState([]);
  const [newTodoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])


  const handlenewTodoItems = (todoName, todoDueData) => {
    let NewTodoItems = [...todoItems, {name: todoName, dueDate: todoDueData}];
    setTodoItems(NewTodoItems);
  }

  const handleDeleteButton = (todoName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems)
  }
  return (
    <TodoItemsContext.Provider value = {{todoitems: todoItems,
                                          addNewItem : handlenewTodoItems,
                                          deleteItem : handleDeleteButton
    }}>
    <center className="todo-container">

      <AddTodo onNewItem = {handlenewTodoItems}/>
      {todoItems.length == 0 && <ErrorMessage todoItems={todoItems} />}
      <TodoItems todoItems={todoItems} onDeleteButton = {handleDeleteButton}/>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;