import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <>
    <nav className='navbar navbar-expand-lg w-100'>
      <div className='container-fluid w-100'>
        <a href="#" className='navbar-brand'>
          <img src={logo} alt="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"      aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id= "navbarTogglerDemo02">
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href="#" className='nav-link active'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link'>Features</a>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link'>Pricing</a>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link'>About</a>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link'>Contact Us</a>
            </li>
          </ul>
          <form action="">
            <input type="text" placeholder='search'/>
          </form>
          <form action="">
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
    </>
  )
}

export default Navbar