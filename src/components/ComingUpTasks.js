import React from 'react'
import "../css/ComingUpTasks.css"
import ComingUpTask from './ComingUpTask'
const ComingUpTasks = (props) => {
    const { todos } = props
    console.log("These are coming up",todos)
  return (
    <>
    <div className='coming-up-tasks-container'>
        <h3 className='coming-up-task-title'>Coming up Tasks</h3>
        <p>These are your tasks due in the next week</p>
        <div className="coming-up-task-map-container">
            {todos && todos.map(todo => (<>
                <ComingUpTask todo = {todo}/>
            </>))}
        </div>
    </div>
    </>
  )
}

export default ComingUpTasks