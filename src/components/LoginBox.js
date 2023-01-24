import React from 'react'
import "../css/LoginBox.css"
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFullyLoggedIn, setLoggedIn, setName, setToken } from '../Redux/userSlice'
const LoginBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
    const handleLogin = async googleData => {
      let token = {}
        const res = await fetch("http://localhost:4000/api/v1/auth/google", {
            method: "POST",
            body: JSON.stringify({
            token: googleData.tokenId,
            apiToken: googleData.accessToken
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => response.json())
          .then(res => token = res)
          .catch(err => console.log(err))
        //console.log("this is token from express",token)'
        console.log("this is response from api",token)
        dispatch(setFullyLoggedIn({token:token.accessToken,name:token.name,email:token.email}))
        navigate("/home")
      }
  return (
    
    <>
    <div className='container'>
    <div className='login-box-container'>
        <h1>Login</h1>
        <GoogleLogin
                    clientId="761061600030-qocjs9rs74pokqgpki7nvivufa2saa6m.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
    </div>
    </div>
    </>
  )
}

export default LoginBox