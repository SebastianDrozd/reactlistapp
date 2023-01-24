import React from 'react'
import { checkLoggedStatus, signUpUser } from '../utils/requests'
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
    const {loginWithRedirect} = useAuth0()
  
    const handleSignUp = () => {
       loginWithRedirect()
    }
    const testLogin = () => {
        checkLoggedStatus().then(res => {
         
        
        })
    }

  return (
    <>
    <h1>Sign-up Page</h1>
    <button onClick={handleSignUp}>Continue with google</button>
    <button onClick={testLogin}>Test If logged In</button>
    </>
  )
}

export default Signup