import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) => {
            const newTodosObject = state.todos.filter((todo) => todo.id !== action.payload)
            state.todos = newTodosObject
        },
        editTodo:(state,action) => {
            const newTodosValue = state.todos.map((todo) => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        text: action.payload.text

                    }
                }
            })
            state.todos = newTodosValue
        }

    }

})

export const {addTodo ,removeTodo,editTodo} = todoSlice.actions
export default todoSlice.reducer