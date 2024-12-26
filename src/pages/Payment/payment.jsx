import React from 'react'
import './style.css'
import Navbar from '../../components/Home/Navbar/navbar'
import Footer from '../../components/Home/Footer/footer'
import Paymentmain from '../../components/Paymentmain/paymentmain'
const payment = () => {
  return (
    <div>
      <div className="navbar-container">
      <Navbar/>
      </div>
    <div className="payment-container">
        <Paymentmain/>
    </div>

      <div className="footer-container">
        <Footer/>
      </div>

    </div>
  )
}

export default payment
