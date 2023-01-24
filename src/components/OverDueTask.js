import React from 'react'
import "../css/OverDueTask.css"
import { FaHome} from 'react-icons/fa';
import { FaTelegram} from 'react-icons/fa';
const OverDueTask = (props) => {
  const {todo} = props
  const showTodo = () => {

  }
  return (
    <div className='OverDueTask-container'>
      <div className='OverDue-icon-container'>
      <span class="dot"></span>
      </div>
      <div className='OverDue-column'>
      <h5>{todo.title}</h5>
      <p className='overdue-description'>{todo.description}</p>
      </div>
      <div onClick={showTodo}><p className='circle-overdue'>Urgent</p></div>
    </div>
  )
}

export default OverDueTask