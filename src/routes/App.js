import React from 'react'
import { Route, Routes } from "react-router-dom"
import AllTasks from '../components/AllTasks'
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
    <Route path= "/home/all" element={<AllTasks/>} />
    
    <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App