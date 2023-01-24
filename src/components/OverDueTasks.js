import React from 'react'
import "../css/OverDueTasks.css"
import OverDueTask from './OverDueTask'
const OverDueTasks = (props) => {
    const { todos } = props
    return (
        <div className='OverDue-container'>
            <h3 className='OverDue-title'>Overdue Tasks</h3>
            <div className='Tasks-map-container'>
            {todos && todos.map((todo) => (
                <OverDueTask todo = {todo}/>  
            ))}
            </div>
        </div>
    )
}

export default OverDueTasks