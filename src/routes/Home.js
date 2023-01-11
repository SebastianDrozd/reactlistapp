import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux'
import { setLoggedIn,setLoggedOut } from '../Redux/userSlice';
const Home = () => {

  const count = useSelector(state => state.user.loggedIn)
  const dispatch = useDispatch()

  const { user, isAuthenticated, isLoading,logout } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const logoutButton = () => {
    logout({returnTo: window.location.origin})
    dispatch(setLoggedOut())
  }

  dispatch(setLoggedIn())
  return (
    
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={logoutButton}>Logout</button>
      </div>
    )
  )
}

export default Home