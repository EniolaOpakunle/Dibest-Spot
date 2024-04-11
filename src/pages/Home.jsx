import React from 'react'
import Navbar from '../components/Navbar'
import globalImage from '../assets/images/global.png'
import shopping_cart from '../assets/images/shopping-cart.png'
import money_receive from '../assets/images/money-recieve.png'
import home from '../assets/images/home.png'
    
    function Home() {
      return (
        <>
        <div className =''>
          
          <div className='header'>
            <div className='sticky-top'>
              <Navbar/>
            </div>
            <div className='text-light welcome'>
              <h1 className=''>Welcome to Dibest Spot</h1>
              <p>Explore, Sign-up and connect in the cayman Islands and the Carribeans</p>
              <button>Start Now</button>
            </div>
            <div className='d-flex  why'>
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
            <div className='row d-flex div1 mt-5'>
              <div className='col-3'>
                <div className='d-flex'>
                  <img src={globalImage} alt="" />
                  <p className='title'>One - Stop Destination</p>
                </div>
                <p className='sub-text'>Explore a variety of marketplaces all in one place – from finding exclusive deals on restaurants to participating in thrilling auctions.</p>
              </div>
              <div className='col-3'>
                <div className='d-flex'>
                  <img src="" alt="" />
                  <p className='title'>Local and Global Research</p>
                </div>
                <p className='sub-text'>Connect with sellers and buyers from your community and beyond. Enjoy the convenience of local shopping with the excitement of international options.</p>
              </div>
            </div>
            <div className='row div2'>
              <div className='col-3'>
                <div className='d-flex'>
                  <img src={shopping_cart} alt="" />
                  <p className='title'>Seamless Shopping Experience</p>
                </div>
                <p className='sub-text'>Our unified DiBest ewallet makes it easy to shop across different categories with a hassle-free checkout process</p>
              </div>
            </div>
            <div className='row d-flex div3'>
              <div className='col-3'>
                <div className='d-flex'>
                  <img src={money_receive} alt="" />
                  <p className='title'>Save Money with alternative Payout options for vendors</p>
                </div>
                <p className='sub-text'>Our alternative payout options incudes no fee solutions that allows you to get more cash across the different categories with a simple process.</p>
              </div>
              <div className='col-3'>
                <div className='d-flex'>
                  <img src={home} alt="" style={{width: '15rem'}}/>
                  <p className='title'>Personalized Dashboards</p>
                </div>
                <p className='sub-text'>Tailor your experience with personalized dashboards, quick links to popular items, and recommendations based on your preferences</p>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
    
    export default Home