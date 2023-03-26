import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  
  var [value, setValue] = useState('');
 
  function handelSubmint(e) {
    e.preventDefault();

    addTodo(value);
    console.log(value);

    setValue('');
  }

 
  return (
    <form  className='TodoForm' onSubmit={handelSubmint}>
   
      <input type="text" className='todo-input' value={value} 
      placeholder='What is your task today' 
      onChange = {(e) => setValue(e.target.value)} />

      <button type='submit' className='todo-btn'>Add
       Todo</button>
    </form>
  )
}

export default TodoForm