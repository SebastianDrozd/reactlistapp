import React from 'react'
import "../css/ComingUpTask.css"
const ComingUpTask = (props) => {
  const {todo} = props
  return (
    <div className='coming-up-task-container'>
      <span class="dot-coming-up"></span>
      <div className='coming-up-column'>
      <h5>{todo.title}</h5>
      <p>{todo.description}</p>
      </div>
      <div><p className='circle-coming-up'>{new Date(todo.dateDue).toDateString()}</p></div>
    </div>
  )
}

export default ComingUpTask