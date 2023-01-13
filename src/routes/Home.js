import React, { useContext, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux'
import { setLoggedIn, setLoggedOut } from '../Redux/userSlice';
import { createApiToken, createTodo } from '../utils/requests';

const Home = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [publicTodo, setPublicTodo] = useState("off")
  const dispatch = useDispatch()
  const { user, isAuthenticated, isLoading, logout,getAccessTokenSilently } = useAuth0();
  const logoutButton = () => {
    logout({ returnTo: window.location.origin })
    dispatch(setLoggedOut())
  }
  const sendTodo = () => {
    createTodo({ title: title, description: description, user: user.email, isPublic: publicTodo })
      .then((res) => {
        console.log(res.data)
      })

  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  else{
  dispatch(setLoggedIn())
  getAccessTokenSilently().then(res => {
    localStorage.setItem("token",res)
    console.log(localStorage.getItem("token"))
  })
  
  //createApiToken().then(res => {
   // console.log(res.body)
  //})

  return (

    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={logoutButton}>Logout</button>
        <br />
        <input onChange={(e) => { setTitle(e.target.value) }} placeholder='title' type="text" />
        <input onChange={(e) => { setDescription(e.target.value) }} placeholder='description' type="text" />
        <input onChange={(e) => { setPublicTodo(e.target.value) }} type="checkbox"></input>
        {publicTodo}
        <button onClick={sendTodo}>Submit Todo</button>
      </div>
    )
  )
}
}

export default Home