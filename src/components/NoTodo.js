import React from 'react'
import TaskModal from './TaskModal'

const NoTodo = () => {
    return (
        <>
            <div className='no-todo-div'>
                <h4>You currently do not have any active Tasks</h4>
                <p >Create a new Task now!</p>
                <TaskModal />
                
            </div>
        </>
    )
}

export default NoTodo