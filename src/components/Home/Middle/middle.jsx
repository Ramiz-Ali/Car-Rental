import React from 'react'
import './middle.css';
import vecotr1 from "../../../assets/Images/vector1.png"
import driver from "../../../assets/Images/driver.png"
import {BriefcaseBusiness , Settings , Users} from "lucide-react";
const middle = () => {
  return (
    <div className='fell-the-best-main'>
    <div className="fell-the-best">
        <div className="tex">
        <h1>Fell The Best Experience With Our Luxury Cars</h1>
        </div>
        <div className="vectors">
        <div className="vector1">
          <div className="vector1-image">
          <img className='vector1-image' src={vecotr1} alt=""/>
          <BriefcaseBusiness className='vectoer1-icon' size={50} color='white'/>
          </div>
          <h2>Book With Flexibility</h2>
          <p>Easily find car and book with no change fees.</p>
        </div>
        <div className="vector1">
          <div className="vector1-image">
          <img className='vector1-image' src={vecotr1} alt=""/>
          <Settings className='vectoer1-icon' size={50} color='white'/>
          </div>        
          <h2>Trusted And Free</h2>
          <p>Easily find car and book with no <br />  change fees.</p>
        </div>
        <div className="vector1">
          <div className="vector1-image">
          <img className='vector1-image' src={vecotr1} alt=""/>
          <Users className='vectoer1-icon1' size={40} color='white'/>
          </div> 
          <h2>we Know Travel</h2>
          <p>Easily find car and book with no <br /> change fees.</p>
        
        </div>
        
        
        </div>
        
    </div>
    <div className="fell-the-best2">
     <img className='driver-image' src={driver} alt="" />
     <h1>Become A Driver <br /> Your Time. Your Goals. You're The <br />Boss.</h1>
     <p>Subscribe And Join Us</p>
     <div className="input-btn">
     <input className='input-btn-input' type="text" placeholder='Email'/>
     <div className="input-btn-div">
     <button className='input-btn-btn'>Next</button>
     </div>
     </div>
</div>
</div>
  )
}

export default middle
