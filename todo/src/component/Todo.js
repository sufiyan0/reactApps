import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Todo({task , deleteTodo }) {
  return (
    <div className='Todo'>
      <p>{task.task}</p>

      <div>

        {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
        {/* <FontAwesomeIcon icon={faTrash}  onClick={() => deleteTodo(task.id)} /> */}
        <FontAwesomeIcon icon={faTrash}  onClick={() =>  deleteTodo(task.id)} />
        
      </div>
    </div>
  )
}
