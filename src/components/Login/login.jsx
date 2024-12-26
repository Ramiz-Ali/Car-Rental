import React from 'react'
import { useState } from 'react'
import './login.css'
import { Link  } from 'react-router-dom';
import image12 from "../../assets/Images/image12.png"
import Group2 from "../../assets/Images/Group2.png"
import logo from "../../assets/Images/logo.png"
import {Eye , EyeOff} from "lucide-react";
import google from "../../assets/Images/google.png"
import fblogo from "../../assets/Images/fblogo.png"
import apple from "../../assets/Images/apple.png"
const login = () => {
    const [show , setShow] = useState(false);
  return (
    <div className="login-main-main">
      <img className='login-image' src={image12} alt="" />
      <img className='login-image2' src={Group2} alt="" />
      <div className="login-data">
        <div className="logo-and-text">
        <img src={logo} alt="" />
        <div className="below-logo-text">
        <h2>Login To Your Account</h2>
        <p>Welcome back! Please enter your details</p>
        </div>
        </div>
        <div className="login-inputs">
            <div className="email-input-div">
                <h5>Email</h5>
                <input type="text" className='emai-input1' placeholder='Enter Your Email' />
            </div>
            <div className="email-input-div">
                <h5>Password</h5>
                <div className="login-input-and-icon">
                <input type={show ? 'text' : 'password'} className='password-input' placeholder='Enter Your Password' maxLength={8} />
                <button className='eye-btn' onClick={()=> setShow(!show)}> {show? (<Eye size={20} color='#64748B'/>): (<EyeOff size={20} color='#64748B'/>)}</button>
                </div>
                </div>
                <div className="remember-forget2">
                <div className="rember-me-div">
                    <input type="checkbox" className='check-box-input' />
                    <p>Remember me</p>
                </div>
                <Link className='link2' to="/forget"><p className='remember-forget-p1'>Forget Password?</p></Link>
            </div>

            <div className="login-btn-div">
                <button className='login-btn'>Login</button>
            </div>
            <div className="dont-account">
            <p className='dont-account-p1'>Donot have an account? <Link className='link2' to="/signin"> <p className='dont-account-p2'>Sign Up</p></Link></p>
        </div>
        </div>
      <div className="signin-google">
          <p className='signin-google-p1'>OR</p>
          <div className="google-div2">
            <img className='google-img' src={google} alt="" />
            <p>Signin with Google</p>
          </div>

          <div className="google-div2">
            <img className='fb-img' src={fblogo} alt="" />
            <p>Signin with Facebook</p>
          </div>

          <div className="google-div2">
            <img className='google-img' src={apple} alt="" />
            <p>Signin with Apple</p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default login
