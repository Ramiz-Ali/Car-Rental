import React from 'react'
import Navbar from '../../components/Home/Navbar/navbar'
import Card from '../../components/Home/Cards/card'
import Footer from '../../components/Home/Footer/footer'
import './style.css'
const favourite = () => {
  return (
    <div className='favourite-container'>
       <div className="navbar-container">
      <Navbar/>
      </div>
      
      <div className="nav-cards">
      <div className="favourite-nav">
        <h3>Favourite</h3>
      </div>

      <div className="fav-cards-container">
      {
                    Array(3).fill().map((item)=>(
                        <Card />
                    ))
                }
      </div>
      </div>

      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  )
}

export default favourite
