import React, {useState} from 'react'

const TodoEditor = ({editForm,task}) => {
  
  var [value, setValue] = useState(task.task);
 
  function handelSubmint(e) {
    e.preventDefault();

    editForm(value,task.id);
   

    // setValue('');
  }

 
  return (
    <form  className='TodoForm' onSubmit={handelSubmint}>
   
      <input type="text" className='todo-input' value={value} 
      placeholder='Update task' 
      onChange = {(e) => setValue(e.target.value)} />

      <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}

export default TodoEditor
