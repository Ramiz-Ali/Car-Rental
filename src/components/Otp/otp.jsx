import React, { useState, useEffect } from 'react';
import './otp.css';
import image12 from "../../assets/Images/image12.png";
import Group2 from "../../assets/Images/Group2.png";
import logo from "../../assets/Images/logo.png";
import { Link  } from 'react-router-dom';

const Otp = () => {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        let intervalId = null;

        intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds > 0 ? prevSeconds - 1 : 0);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = `${Math.floor(seconds / 60)}:${seconds % 60}`.padStart(5, '0');

    return (
        <div className="login-main-otp">
            <img className='login-image' src={image12} alt="" />
            <img className='login-image2' src={Group2} alt="" />
            <div className="otp-data">
                <div className="logo-and-text-otp">
                    <img src={logo} alt="" />
                    <div className="below-logo-text">
                        <h1>OTP Verification</h1>
                        <p className='otp-p1'>Please enter the otp we have sent to your Register Email</p>
                    </div>
                </div>
                <div className="otp-inputs">

                    <div className="otp-input">
                        <div className='otp-input1'>
                            <input className='otp-input1-input' type="text" maxLength={1} />
                        </div>
                        <div className='otp-input1'>
                            <input className='otp-input1-input' type="text" maxLength={1} />
                        </div>
                        <div className='otp-input1'>
                            <input className='otp-input1-input' type="text" maxLength={1} />
                        </div>
                        <div className='otp-input1'>
                            <input className='otp-input1-input' type="text" maxLength={1} />
                        </div>
                        <div className='otp-input1'>
                            <input className='otp-input1-input' type="text" maxLength={1} />
                        </div>
                        <div className='otp-input1'>
                            <input className='otp-input1-input' type="text" maxLength={1} />
                        </div>
                        <div className='otp-input1'>
                            <input className='otp-input1-input' type="text" maxLength={1} />
                        </div>

                    </div>
                    <div className="timer">
                        <h3>{formattedTime}</h3>
                    </div>
                    <Link className='link2' to="/createnew">
                    <div className="continue-btn-div">
                        <button className='continue-btn'>Confirm</button>
                    </div>
                    </Link>
                    <button className='resend-btn'>Resend</button>
                </div>
            </div>
        </div>
    )
}

export default Otp;
