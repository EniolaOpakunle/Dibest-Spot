import React from 'react'
import Navbar from '../components/Navbar'
import globalImage from '../assets/images/global.png'
import shopping_cart from '../assets/images/shopping-cart.png'
import money_receive from '../assets/images/money-recieve.png'
import home from '../assets/images/home.png'
import marketImage1 from '../assets/images/Frame1.png'
import marketImage2 from '../assets/images/Frame2.png'
import marketImage3 from '../assets/images/Frame3.png'
import marketImage4 from '../assets/images/Frame4.png'
    
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
          <div className='market row col-12'>
            <div className='col-lg-6 '>
              <p className='title '>Join any of the Dibest Spot MarketPlaces Today and Enjoy</p>
            </div>
            <div className='col-lg-6'>
              <div className='d-flex div1' >
                <div className="card" style={{width:"300px"}}>
                  <div className="d-flex">
                    <div className="">
                      <img src={marketImage1} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="" style={{width: "175px" , height: ''}}>
                      <div className="card-body">
                        <h5 className="card-title">Go Global</h5>
                        <p className="card-text">Explore a world of possibilities with international sellers and unique items from around the globe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-flex div2'>
                <div className="card" style={{width:"300px"}}>
                  <div className="d-flex">
                    <div className="">
                      <img src={marketImage2} className="img-fluid rounded-start" alt="..." style={{width: ""}}/>
                    </div>
                    <div className="" style={{width: "175px"}}>
                      <div className="card-body">
                        <h5 className="card-title">Exciting Auctions</h5>
                        <p className="card-text">Dive into the thrill of live auctions. Bid on your dream items and enjoy the excitement of winning!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{width:"300px"}}>
                  <div className=" d-flex g-0">
                    <div className="">
                      <img src={marketImage3} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="" style={{width: "175px"}}>
                      <div className="card-body">
                        <h5 className="card-title">Community Connection</h5>
                        <p className="card-text">Connect with like-minded individuals, share recommendations, and build a vibrant online community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-flex div1' >
                <div className="card" style={{width:"300px"}}>
                  <div className="d-flex">
                    <div className="">
                      <img src={marketImage4} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="" style={{width: "175px" , height: ''}}>
                      <div className="card-body">
                        <h5 className="card-title">Shop Local</h5>
                        <p className="card-text">Support local businesses and find the best deals from restaurants, ondemand service providers, rental properties, classifies and local products crafted or sold right in your community.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        </>
      )
    }
    
    export default Home