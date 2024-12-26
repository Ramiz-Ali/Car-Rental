import React from 'react'
import Navbar from '../../components/Home/Navbar/navbar'
import Footer from '../../components/Home/Footer/footer'
import Vehicleright from '../../components/Vehicleright/vehicleright'
import Card from '../../components/Home/Cards/card'
import './style.css'
const vehicle = () => {
  return (
    <div>
       <div className="navbar-container2">
      <Navbar/>
      </div>
       <div className='vehicle-container'>
        <div>
        <Vehicleright/>
        </div>
        <div className="cards-container2">
      {
                    Array(9).fill().map((item)=>(
                        <Card/>
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

export default vehicle
