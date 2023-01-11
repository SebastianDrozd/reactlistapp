import React from 'react'

const Navbar = () => {
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

              <button class="btn btn-outline-success" type="submit">   <a href={`login`}>Login</a></button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar