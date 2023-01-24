import React from 'react'
import "../css/TodoCard.css"
const TodoCard = (props) => {
    const { todo } = props
    return (
        <div className='todo-card'>
            <p className='todo-title'>{todo.title}</p>
            <p className='todo-description'>{todo.description}</p>
        </div>
    )
}

export default TodoCard