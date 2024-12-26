import React from 'react'
import { useState } from 'react'
import { Link  } from 'react-router-dom';
import image12 from "../../assets/Images/image12.png"
import Group2 from "../../assets/Images/Group2.png"
import logo from "../../assets/Images/logo.png"
import {Eye , EyeOff} from "lucide-react";
import google from "../../assets/Images/google.png"
import fblogo from "../../assets/Images/fblogo.png"
import apple from "../../assets/Images/apple.png"
import './signin.css'
const signin = () => {
    const [show , setShow] = useState(false);
  return (
   
      <div className="signin-main">
        <img className='login-image1' src={image12} alt="" />
        <img className='login-image2' src={Group2} alt="" />
        <div className="login-data">
          <div className="logo-and-text">
          <img src={logo} alt="" />
          <div className="below-logo-text">
          <h2>Login To Your Account</h2>
          <p>Welcome back! Please enter your details</p>
          </div>
          </div>
          <div className="signin-inputs">
              <div className="email-input-div">
                  <h5>Name</h5>
                  <input type="text" className='emai-input2' placeholder='Enter Your Name' />
              </div>

              <div className="email-input-div">
                  <h5>Phone</h5>
                  <input type="text" className='emai-input2' placeholder='Enter Your Phone No' />
              </div>

              <div className="email-input-div">
                  <h5>Email</h5>
                  <input type="text" className='emai-input2' placeholder='Enter Your Email' />
              </div>


              <div className="email-input-div">
                  <h5>Password</h5>
                  <div className="input-and-icon">
                  <input type={show ? 'text' : 'password'} className='password-input' placeholder='Enter Your Password' maxLength={8} />
                  <button className='eye-btn' onClick={()=> setShow(!show)}> {show? (<Eye size={20} color='#64748B'/>): (<EyeOff size={20} color='#64748B'/>)}</button>
                  </div>
                  </div>
                  
  
              <div className="signin-btn-div">
                  <button className='signin-btn'>Sign in</button>
              </div>
              <div className="dont-account2">
              <p className='dont-account-p1'>Already have an account? <Link className='link2' to="/login"> <p className='dont-account-p2'>Login</p></Link></p>
          </div>
          </div>
        <div className="signin-google">
            <p className='signin-google-p1'>OR</p>
            <div className="google-div">
              <img className='google-img' src={google} alt="" />
              <p>Signin with Google</p>
            </div>
  
            <div className="google-div">
              <img className='fb-img' src={fblogo} alt="" />
              <p>Signin with Facebook</p>
            </div>
  
            <div className="google-div">
              <img className='google-img' src={apple} alt="" />
              <p>Signin with Apple</p>
            </div>
        </div>
      </div>
      </div>
  )
}

export default signin
