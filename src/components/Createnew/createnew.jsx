import React from 'react'
import './createnew.css'
import { useState } from 'react'
import image12 from "../../assets/Images/image12.png"
import Group2 from "../../assets/Images/Group2.png"
import logo from "../../assets/Images/logo.png"
import { Eye, EyeOff } from "lucide-react";
const createnew = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div className="login-main-createnew">
      <img className='login-image' src={image12} alt="" />
      <img className='login-image2' src={Group2} alt="" />
      <div className="createnew-data">
        <div className="logo-and-text">
          <img src={logo} alt="" />
          <div className="below-logo-text">
            <h1>Create New Password</h1>
            <p>Please Enter Your Password And Confirm Password</p>
          </div>
        </div>
        <div className="login-inputs">

          <div className="email-input-div">
            <h5>Password</h5>
            <div className="input-and-icon">
              <input type={show ? 'text' : 'password'} className='password-input' placeholder='Enter Your Password' maxLength={8} />
              <button className='eye-btn' onClick={() => setShow(!show)}> {show ? (<Eye size={20} color='#64748B' />) : (<EyeOff size={20} color='#64748B' />)}</button>
            </div>
          </div>

          <div className="email-input-div">
            <h5>Confirm Password</h5>
            <div className="input-and-icon">
              <input type={show2 ? 'text' : 'password'} className='password-input' placeholder='Confimr Password' maxLength={8} />
              <button className='eye-btn' onClick={() => setShow2(!show2)}> {show2 ? (<Eye size={20} color='#64748B' />) : (<EyeOff size={20} color='#64748B' />)}</button>
            </div>
          </div>


          <div className="new-continue-btn-div">
            <button className='new-continue-btn'>Continue</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default createnew
