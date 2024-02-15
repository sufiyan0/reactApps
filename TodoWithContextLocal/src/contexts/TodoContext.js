import { useContext ,createContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo",
            isCompleted: false
        }
    ],
    addTodo: () => {},
    editTodo: () => {},
    completeTodo: () => {},
    deleteTodo: () => {},
});

export const TodoProvider = TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext)
}


