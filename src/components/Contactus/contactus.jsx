import React from 'react'
import './contactus.css'
import {Smartphone , MailOpen , DollarSign , MapPin} from "lucide-react";
import Ellipse2 from '../../assets/Images/Ellipse2.png'
const contactus = () => {
  return (
    <div className='contactus-main'>
       <div className="contact-card">
           <div className="information-text">
            <h2>Contact Information</h2>
            <p>Fill up the form and our team will get back <br /> to within 24 hours</p>
           </div>

           <div className="contact-icons-text">
              <div className="icons-contact-info">
                <div className="icons-contact">
                    <Smartphone color='#3563E9' size={18}/>
                </div>
                <p>+91 98765 43210</p>
              </div>

              <div className="icons-contact-info">
                <div className="icons-contact">
                    <MailOpen color='#3563E9' size={18}/>
                </div>
                <p>domain@paypal.com</p>
              </div>

              <div className="icons-contact-info">
                <div className="icons-contact">
                    <DollarSign color='#3563E9' size={18}/>
                </div>
                <p>http://paypal.com</p>
              </div>

              <div className="icons-contact-info">
                <div className="icons-contact">
                    <MapPin color='#3563E9' size={18}/>
                </div>
                <p>Location</p>
              </div>
           </div>
           <img className='contact-card-image1' src={Ellipse2} alt="" />
           <img className='contact-card-image2' src={Ellipse2} alt="" />
       </div>
       <div className="contact-text-inputs">
          <div className="names">
            <div className="first-name">
                <h3>First Name</h3>
                <input type="text" className='contact-text-input' />
            </div>
            <div className="first-name">
                <h3>Last Name</h3>
                <input type="text" className='contact-text-input' />
            </div>
          </div>

          <div className="names">
            <div className="first-name">
                <h3>Mail</h3>
                <input type="text" className='contact-text-input' />
            </div>
            <div className="first-name">
                <h3>Phone</h3>
                <input type="text" className='contact-text-input' />
            </div>
          </div>

          <div className="contact-message">
            <h3>Message</h3>
            <div className="messege-input2-div">
            <input type="text" className='contact-message-input2' placeholder='Write message here..' />
          </div>
          </div>
          <div className="quote-btn-div">
            <button className='quote-btn'>Get a quote</button>
          </div>
       </div>
    </div>
  )
}

export default contactus
