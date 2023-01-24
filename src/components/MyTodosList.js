import React from 'react'
import TodoCard from './TodoCard'
import "../css/MyTodoList.css"
import { DragDropContext } from 'react-beautiful-dnd';
const MyTodosList = (props) => {
  const {todos} = props
  console.log("this are todos in mytodolist",todos)
  return (
    <>
    <div className='todo-list-container'>
    {todos && todos.map(todo => (<TodoCard todo={todo}/>))}
    </div>
    </>
  )
}

export default MyTodosList