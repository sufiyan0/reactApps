import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value , setValue] = useState('');
   
    function handelSubmint (e) {
        e.preventDefault()
        addTodo(value)

        setValue('')

    }


  return (
    <div>
        <form className='TodoForm'  onSubmit={handelSubmint}>
            <input type="text" className='todo-input' value={value} onChange={(e) => setValue( e.target.value) }/>
            <button type='submit' className='todo-btn'>Add Todo</button>
            
        </form>

    </div>
  )
}

export default TodoForm