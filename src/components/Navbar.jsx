import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <div className='nav-section'>
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <a href="#" className='navbar-brand'>
          <img src={logo} alt="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"      aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id= "navbarTogglerDemo02">
          <div className='navbar-nav'>
            <div className='nav-item'>
              <a href="#" className='nav-link active'>Home</a>
            </div>
            <div className='nav-item'>
              <a href="" className='nav-link'>Features</a>
            </div>
            <div className='nav-item'>
              <a href="" className='nav-link'>Pricing</a>
            </div>
            <div className='nav-item'>
              <a href="" className='nav-link'>About</a>
            </div>
            <div className='nav-item'>
              <a href="" className='nav-link'>Contact Us</a>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder='search'/>
          </form>
          <form action="" className='buttons'>
            <button className='btn btn-sm '>Log in</button>
            <button className='btn btn-sm '>Signup</button>
          </form>
          {/* <div className=' d-flex'>
            <a href="" className='nav-link'>Home</a>
            <a href="" className='nav-link'>Features</a>
          </div> */}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar