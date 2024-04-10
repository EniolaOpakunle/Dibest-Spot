    import React from 'react'
import Navbar from '../components/Navbar'
    
    function Home() {
      return (
        <>
        <div className =''>
          
          <div className='header'>
            <div className=''>
              <Navbar/>
            </div>
            <div className='text-light welcome'>
              <h1 className=''>Welcome to Dibest Spot</h1>
              <p>Explore, Sign-up and connect in the cayman Islands and the Carribeans</p>
              <button>Start Now</button>
            </div>
            <div className='d-flex m-auto why'>
              <div className='text-light'>
                <h2>Why Dibest Spot for the Carribbean?</h2>
              </div>
              <div className='card'>
                <h6 className='card-title'>Cayman's Island</h6>
                <p className='card-body'>Experience a marketplace designed with the unique needs of the Cayman Islands in mind</p>
              </div>
              <div className='card'>
                <h6 className='card-title'>Cayman's Island</h6>
                <p className='card-body'>Experience a marketplace designed with the unique needs of the Cayman Islands in mind</p>
              </div>
            </div>
          </div>
          <div className='w-75 m-auto features'>
            <h4 className=''>Key Features</h4>
            <div className='row'>
              <div className='col-3'>
                <div>
                  <img src="" alt="" />
                  <p>One - Stop Destination</p>
                </div>
              </div>
              <div className='col-3'>
                <div>
                  <img src="" alt="" />
                  <p>One - Stop Destination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
    
    export default Home