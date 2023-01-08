import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {getAllTodos} from './requests'

function App() {

  const [todos,setTodos] = useState([])
  const [title,setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
   getAllTodos().then(res => setTodos(res.data))
  },[])

const postTodo = () => {
  console.log("Button Clicked.")
  console.log("Sending object.... Title:" + title + ", Description: " + description)
  axios.post("http://127.0.0.1:3001/groceries",{title: title , description: description})
       .then(response => console.log(response))
       getAllTodos().then(res => setTodos(res.data))
}

  return (
    <>
    <h1>React Todo App</h1>
    <p>These are your todos</p>
    {todos && todos.map(todo => (<>
    <div style={{border: "1px solid black"}}>
    <p>{todo.title}</p>
    <p>{todo.description}</p>
    </div>
    <br />
    </>))}


    <h3>Create a new Todo</h3>
    <input placeholder='Title' 
          value={title} 
          type="text" 
          onChange={e => setTitle(e.target.value)}/>
    <br />
  

    <input type="Description" 
      value = {description} onChange = {e => {setDescription(e.target.value)}}/>
      
    <button onClick={postTodo}>Submit</button>
    </>
  )
}

export default App;
