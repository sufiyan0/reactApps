import React,{useState} from 'react'

export default function TodoForm({addTodo}) {

  const [value, setValue] = useState('');

  const handelClick = (e) => {

    e.preventDefault();
    
    addTodo(value)
    
    setValue('');
  }

  return (
    <form className='TodoForm' onSubmit={handelClick}>
      
    <input  className='todo-input' type="text"  placeholder='Enter
     Your todo here' value={value} onChange={(e) => setValue(e.target.value)}/>
     <input className='todo-input' type="text" placeholder='Enter your name' />
    <button type='submit' className='todo-btn'>Add Todo</button>
    </form>
  )
}
