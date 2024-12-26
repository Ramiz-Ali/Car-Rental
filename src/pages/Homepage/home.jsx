import React from 'react'
import Navbar from '../../components/Home/Navbar/navbar'
import Lambo from '../../components/Home/Lamborgini/lambo'
import Whitecar from '../../components/Home/Whitecar/whitecar'
import Card from '../../components/Home/Cards/card'
import Middle from '../../components/Home/Middle/middle'
import Footer from '../../components/Home/Footer/footer'
import './style.css'
const home = () => {
  return (
    <div>
        <div className="navbar-container">
      <Navbar/>
      </div>
      <div className="lambo-container">
        <Lambo/>
      </div>
      <div className="home-container2">
      <div className="whitecar-container">
        <Whitecar/>
      </div>
      <div className="navbar2">
            <p className='p11'>Popular Cars</p>
            <p className='p22'>View All</p>
        </div>
      <div className="cards-container">
      {
                    Array(4).fill().map((item)=>(
                        <Card />
                    ))
                }
      </div>
    <div className="middlee-container">
      <Middle/>
      </div>
      
    </div>

    <div className="footer-container">
        <Footer/>
      </div>
    </div>
  )
}

export default home

