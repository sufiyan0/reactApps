import React,{useState} from 'react'
import TodoForm from './TodoForm';
import   {v4 as uuidv4 } from 'uuid';
import  Todo  from './Todo';
uuidv4();


export default function TodoWraper() {
  const [todos,setTodos] = useState([])
  
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4() , task: todo , isEditing: false , completed: false}])
  } 
  
  const deleteTodo = id => {
   setTodos(todos.filter( todo => todo.id !== id )) 
  }


  return (
    <div className='TodoWrapper ' >
      <h1>What you want to do</h1>

      <TodoForm addTodo={addTodo}/>
      {/* {console.log(todos)} */}
      
      {todos.map( (todo) => (

       <Todo task={todo}  deleteTodo={deleteTodo} />
      
      ))}

    </div>
  )
}
