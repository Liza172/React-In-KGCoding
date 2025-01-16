import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext([{todoitems: {},  addnewItem : () => {},  deleteItem : () => {} }]);

const todoItemReducer = (currTodoItems, action) =>
  {
    let newTodoItems = currTodoItems;
    if(action.type === "NEW_ITEM")
    {
      newTodoItems =  [...currTodoItems, {name: action.payload.itemName, dueDate: action.payload.itemDueDate}, ];
    }
    else if(action.type === "DELETE_ITEM")
    {
      newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName)
    }
   return newTodoItems;
  
  }

const TodoItemContextProvider = ({children}) =>
{
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])

  const addNewItem = (itemName, itemDueDate) => 
  {
    const newItemAction = {
      type: "NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    };
  dispatchTodoItems(newItemAction)
  };

  const deleteItem = (itemName, itemDueDate) => 
    {
      const deleteNameAction = {
        type: "DELETE_ITEM",
        payload:{
          itemName 
        },
    };
    dispatchTodoItems(deleteNameAction)
  
  };

  return (
    <TodoItemsContext.Provider 
    value ={ 
    {todoitems: todoItems,
      addNewItem ,
      deleteItem }}
      >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemContextProvider;


                                              


                                             