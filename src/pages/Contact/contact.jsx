import React from 'react'
import './style.css'
import Navbar from '../../components/Home/Navbar/navbar'
import Footer from '../../components/Home/Footer/footer'
import Contactus from '../../components/Contactus/contactus'
const contact = () => {
  return (
    <div>
      <div className="navbar-container">
      <Navbar/>
      </div>
     
     <div className="contact-container1">
        <Contactus/>
     </div>

      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  )
}

export default contact
