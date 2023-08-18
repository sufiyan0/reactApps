import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from './Todo'
import { v4 as uuidv4 } from "uuid";
import TodoEditor from './TodoEditor';
import { isEditable } from "@testing-library/user-event/dist/utils";
uuidv4();

const ToodWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo ))

  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editForm = (id) => {
      setTodos(todos.map( todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    const newTodo =  todos.map(todo => todo.id === id ? {...todo , task ,isEditing : !isEditable }: todo)
    setTodos(newTodo)
  }
  return (
    <>
      <div className="TodoWrapper">
        <h1>Add Todo Items </h1>
        <TodoForm addTodo={addTodo} />
        {
            todos.map((todo,index) => (
              todo.isEditing ? (
                  <TodoEditor editForm={editTask} task={todo}/>

              ):(
                <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editForm={editForm}/>
                )
            ))
        }       
      </div>
     
    </>
  );
};

export default ToodWrapper;
