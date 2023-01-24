import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createTodo, createUserTodo, getUserTodos } from '../utils/requests'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PostTodo = () => {
    const token = useSelector(state => state.user.token)
    const email = useSelector(state => state.user.email)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [todos,setTodos] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [wantsDueDate,setWantsDueDate] = useState(false)
    const[wantsPublic,setWantsPublic] = useState(false)

   const createTodo = () => {
    let todo = {
      title: title,
      description: description,
      email: email
    }
    createUserTodo(token,todo).then(res => {console.log(res.data)})
   }

  return (
    <>
    <h2> Create a new Todo</h2>
    <input onChange={e => setTitle(e.target.value)} placeholder='Title' type="text" />
    <input onChange={e => setDescription(e.target.value)} placeholder='description' type="text" />
    <br />
    <br />
    
    <div style={{display:"flex"}}>
    <p>Would you like to set a due date for this task?</p>
      <button type="button" class="btn btn-success" onClick={() => setWantsDueDate(true)}>Yes</button>
     
    </div>
    {
        wantsDueDate && <DatePicker selected={startDate} onChange={(date) => {setStartDate(date);console.log(startDate)} } />
    }
    <div style={{display:"flex"}}>
    <p>Would you like to make this todo public?</p>
      <button type="button" class="btn btn-success" onClick={() => setWantsDueDate(true)}>Yes</button>
    </div>
    
    <button onClick={createTodo}>Create New Todo</button>
    </>

  )
}

export default PostTodo