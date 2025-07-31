import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand fs-4" href="#">EM Service</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link fs-4 active" aria-current="page" href="#">Home</a>
              <a class="nav-link fs-4" href="#">Profile</a>
              <a class="nav-link fs-4" href="#">Logout</a>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
