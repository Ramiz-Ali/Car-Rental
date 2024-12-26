import React from 'react'
import Navbar from '../../components/Home/Navbar/navbar'
import Footer from '../../components/Home/Footer/footer'
import Historymain from '../../components/Historymain/historymain'
import './style.css'
const history = () => {
  return (
    <div className='history-container' >
      <div className="navbar-container">
      <Navbar/>
      </div>

      <div className="history-conatiner2">
           <Historymain/>
      </div>
  

      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  )
}

export default history
