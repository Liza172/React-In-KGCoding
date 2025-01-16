import { createContext } from "react";

export const TodoItemsContext = createContext([{todoitems: {},
                                                addnewItem : () => {},
                                                deleteItem : () => {}
                                              }]);