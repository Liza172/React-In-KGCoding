import { useState } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo_Item_Store";

import { MdAssignmentAdd } from "react-icons/md";

function AddTodo( ) {

    const [todoName, setTodoName] = useState('');
    const [todoDate, setTodoDate] = useState('');
    const {addNewItem} = useContext(TodoItemsContext);

    const handleChangeName = (e) => {
        setTodoName(e.target.value);
    }

    const handleChangeDate = (e) => {
        setTodoDate(e.target.value)
    }

    const handleAddClick = () => {
      addNewItem(todoName, todoDate);
      setTodoDate('');
      setTodoName('');
    }

    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" 
                onChange={handleChangeName}
                value={todoName}
            />
          </div>
          <div className="col-4">
            <input type="date" 
                onChange={handleChangeDate}
                value={todoDate}
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button"
                onClick={handleAddClick}
            >
              <MdAssignmentAdd />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;