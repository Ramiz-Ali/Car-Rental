import React from 'react'
import Navbar from '../../components/Home/Navbar/navbar'
import Footer from '../../components/Home/Footer/footer'
import Profile from '../../components/Profile/profile'
import './style.css'
const myprofile = () => {
  return (
    <div>
      <div className="navbar-container">
      <Navbar/>
      </div>

      <div className="myprofile-container">
         <Profile/>
      </div>


      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default myprofile
