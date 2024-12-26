import React from 'react'
import banner from "../../../assets/Images/banner.png"
import './lambo.css'
const lambo = () => {
  return (
    <div className="lambo-main">
    <div className='lambo-img'>
      <div className="lambo-image"><img src={banner} alt="" /></div>
      <div className="lambo-text">
        <div className="lamboh1">
        <h1>Safer, Faster And <br /> Comfortable</h1>
        </div>
        <div className="lambo-para">
        <p>Get in touch with our <br /> luxury cars</p>
        </div>
        <div className="rate-button-div">
        <button className='rate-btn'>Rent Now</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default lambo
