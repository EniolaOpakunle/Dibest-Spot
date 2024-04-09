import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <>
    <nav className='navbar navbar-expand-lg w-100'>
      <div className='container-fluid justify-content-start w-100'>
        <a href="#" className='navbar-brand'>
          <img src={logo} alt="logo" />
        </a>
        <div className='collapse navbar-collapse' id='navbarNav'>
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
            <button className='btn btn-sm btn-outline-success'>Log in</button>
            <button className='btn btn-sm btn-outline-success'>Signup</button>
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