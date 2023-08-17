import React,{useState} from 'react'

const TodoForm = () => {
    const [value , setValue] = useState('')

  return (
    <div>
        <form action="#">
            <input type="text" value={value} onChange={(e) => setValue( e.target.value) }/>
            <button>Add Todo</button>
            
        </form>

    </div>
  )
}

export default TodoForm