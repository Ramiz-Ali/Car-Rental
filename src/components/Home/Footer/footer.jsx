import React from 'react'
import './footer.css';
import Group from "../../../assets/Images/Group.png"
const footer = () => {
  return (
    <div className="footer-main">
        <div className="footer-main1">
        <div className="logo-and-para">
            <div className="image-logo">
          <img src={Group} alt="" />
          </div>
          <div className="logo-para">
            <p>Lorem ipsum dolor sit amet consectetur. <br /> Sit mi dolor  nullam faucibus  molestie. <br /> Quis mauris at egetbr  risus  mattis ornare.<br /> Nec lorem in  et sapien  tristique neque <br /> vivamus. Egestas tempus  facilisis  in <br /> habitant vitae.</p>
          </div>
        </div>
        <div className="footer-lists">
        <div className="footer-list1">
            <h3>About</h3>
            <p>How It Works</p>
            <p>Terms And Conditions</p>
            <p>Privacy Policy</p>
            <p>About Us</p>
        </div>
        <div className="footer-list1">
            <h3>Important Links</h3>
            <p>Vehicle Listing</p>
            <p>Contact Us</p>
            
        </div>
        <div className="footer-list1">
            <h3>Socials</h3>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
            </div>
        </div>        
    </div>
    <hr  />
    <p className='footer-last'>©2023 CharterCar. All rights reserved</p>
    </div>
  )
}

export default footer
