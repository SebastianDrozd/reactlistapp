import React,{useState} from 'react'
import "../css/ComingUpTasks.css"
import ComingUpTask from './ComingUpTask'
const ComingUpTasks = (props) => {
    let { todos } = props
    console.log("These are coming up",todos)
   todos = todos.filter(todo => { return new Date(todo.dateDue) > new Date()})
   todos.sort((a,b) => new Date(a.dateDue) - new Date(b.dateDue))
  return (
    <>
    <div className='coming-up-tasks-container'>
        <h3 className='coming-up-task-title'>Coming up Tasks</h3>
        <p>These are your tasks that you have coming up</p>
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