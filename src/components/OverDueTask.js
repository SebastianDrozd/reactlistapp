import React from 'react'
import "../css/OverDueTask.css"
import ShowTodoModal from './ShowTodoModal';
const OverDueTask = (props) => {
  const {todo,grabber} = props
  const showTodo = () => {

  }
  return (
    <div className='OverDueTask-container'>
      <div className='OverDue-icon-container'>
      <span class="dot"></span>
      </div>
      <div className='o-column'>
      <div className='OverDue-column'>
      <h5>{todo.title}</h5>
      <p className='overdue-description'>{todo.description}</p>
      <p className="overdue-date">{new Date(todo.dateDue).toDateString()}</p>
      </div>
      </div>
      <div className='c-div'>
        <ShowTodoModal final = {grabber} todo={todo} text = "Urgent" color="danger"/>
      </div>
      
    </div>
  )
}

export default OverDueTask