import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from '../components/Navbar'
import Home from './Home'
import LandingPage from './LandingPage'
import Login from './Login'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App