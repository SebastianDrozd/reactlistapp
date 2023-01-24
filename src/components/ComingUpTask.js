import React from 'react'
import "../css/ComingUpTask.css"
import ShowTodoModal from './ShowTodoModal'
const ComingUpTask = (props) => {
  const {todo} = props
  return (
    <div className='coming-up-task-container'>
      <div className='coming-up-icon-container'>
      <span class="dot-coming-up"></span>
      </div>
      <div className="c-column">
      <div className='coming-up-column'>
      <h5>{todo.title}</h5>
      <p>{todo.description}</p>
      <p className='circle-coming-up'>{new Date(todo.dateDue).toDateString()}</p>
      </div>
      </div>
      <div className='coming-up-div'> 
        <button className='btn btn-primary'>View Task</button>
      </div>
    </div>
  )
}

export default ComingUpTask