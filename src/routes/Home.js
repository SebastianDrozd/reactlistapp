import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux'
import { getAllTodos, getUserTodos } from '../utils/requests';
import SideBar from '../components/SideBar';
import PostTodo from '../components/PostTodo';
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
      let newDate = new Date()
      let dateCopy = newDate
      dateCopy.setDate(dateCopy.getDate() + 7)
     
      console.log(dateCopy)
      for(let to of todos){
        console.log("dude date", to.dateDue)
        if(new Date(to.dateDue) < dateCopy && new Date(to.dateDue) > new Date()) {
          console.log("this is the date", to.dateDue)
          setComingUpTodos([...comingUpTodos, to])
        }
      }
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
          <OverDueTasks todos = {todos.filter(todo => new Date(todo.dateDue) < new Date())}/> 
          <ComingUpTasks todos = {comingUpTodos} />   
          <SampleComponent/>    
        </div>
      </>
    )
  )

}

export default Home