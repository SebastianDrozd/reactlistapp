import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserTodos } from '../utils/requests';
import SideBar from '../components/SideBar';
import "../css/Home.css"
import NoTodo from '../components/NoTodo';
import OverDueTasks from '../components/OverDueTasks';
import ComingUpTasks from '../components/ComingUpTasks';
import SampleComponent from '../components/SampleComponent';

const Home = () => {
  const token = useSelector(state => state.user.token)
  const email = useSelector(state => state.user.email)
  const [todos, setTodos] = useState([])
  const isLoading = false
  const isAuthenticated = true
  const [comingUpTodos, setComingUpTodos] = useState([])
  useEffect(() => {
    getUserTodos(token, email).then(res => {
      setTodos(res.data)
    })
    
    
  }, [])
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <>
        <SideBar></SideBar>
        <div className='home-container'>
          {todos.length == 0 &&  <NoTodo />}
          <OverDueTasks updater = {setTodos} todos = {todos.filter(todo => new Date(todo.dateDue) < new Date() && todo.completed != "true")}/> 
          <ComingUpTasks todos = {todos} />   
          <SampleComponent/>    
        </div>
      </>
    )
  )

}

export default Home