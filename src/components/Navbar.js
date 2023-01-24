import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { setFullyLoggedOut } from '../Redux/userSlice'
const Navbar = () => {
  const username = useSelector(state => state.user.name)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    dispatch(setFullyLoggedOut())
    navigate("/")
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Todo App</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form class="d-flex" role="search">

              {username.length == 0 && <button class="btn btn-outline-success" type="submit">   <Link to="/login">Login</Link></button>}
              {username.length > 0 && <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {username}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">My Profile</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <a onClick={logout} class="dropdown-item" href="">Logout</a>
                </div>
              </div>}

            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar