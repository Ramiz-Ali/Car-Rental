import React from 'react'
import './style.css'
import Navbar from '../../components/Home/Navbar/navbar'
import Footer from '../../components/Home/Footer/footer'
import Rentdata from '../../components/Rentdata/rentdata'
import Card from '../../components/Home/Cards/card'
const rent = () => {
  return (
    <div>
       <div className="navbar-container3">
      <Navbar/>
      </div>
      <div className="rent-container">
        <div className="rentdata-container">
         <Rentdata/>
         </div>
         <div className="navbar3">
            <p className='p11'>Recent Car</p>
            <p className='p22'>View All</p>
        </div>
         <div className="cards-container3">
      {
                    Array(4).fill().map((item)=>(
                        <Card/>
                    ))
                }
      </div>

      <div className="navbar3">
            <p className='p11'>Recomendation Car</p>
            <p className='p22'>View All</p>
        </div>
         <div className="cards-container3">
      {
                    Array(4).fill().map((item)=>(
                        <Card/>
                    ))
                }
      </div>


      </div>
       
      <div className="footer-container2">
        <Footer/>
      </div>
      </div>
  )
}

export default rent
