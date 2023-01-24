import React from 'react'
import "../css/OverDueTasks.css"
import OverDueTask from './OverDueTask'
const OverDueTasks = (props) => {
    const { todos } = props
    const {updater} = props
    todos.sort((a,b) => new Date(a.dateDue) - new Date(b.dateDue))
    console.log( updater)
    return (
        <div className='OverDue-container'>
            <h3 className='OverDue-title'>Overdue Tasks</h3>
            <div className='Tasks-map-container'>
            {todos && todos.map((todo) => (
                <OverDueTask grabber={updater} todo = {todo}/>  
            ))}
            </div>
        </div>
    )
}

export default OverDueTasks