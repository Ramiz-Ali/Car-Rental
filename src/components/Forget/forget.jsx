import React from 'react'
import image12 from "../../assets/Images/image12.png"
import Group2 from "../../assets/Images/Group2.png"
import logo from "../../assets/Images/logo.png"
import './forget.css'
import { Link  } from 'react-router-dom';


const forget = () => {
  return (
    <div className="login-main-main2">
      <img className='login-image' src={image12} alt="" />
      <img className='login-image2' src={Group2} alt="" />
      <div className="forget-data">
        <div className="logo-and-text">
        <img src={logo} alt="" />
        <div className="below-logo-text">
       <h1>Forget Your Account</h1>
        <p>Please Enter Your Register Email</p>
        </div>
        </div>
        <div className="login-inputs">
            <div className="email-input-div">
                <h5>Email</h5>
                <input type="text" className='emai-input3' placeholder='Enter Your Email' />
            </div>
            <Link className='link2' to="/otp">
            <div className="continue-btn-div">
            <button className='continue-btn'>Continue</button>
            </div>
            </Link>
        </div>
        </div>
        </div>
  )
}

export default forget
