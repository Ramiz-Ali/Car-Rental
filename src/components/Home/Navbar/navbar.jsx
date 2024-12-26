import React, { useState } from 'react'
import logo from "../../../assets/Images/logo.png"
import user from "../../../assets/Images/user.png"
import './navbar.css'
import { Link, Outlet  } from 'react-router-dom';
import { User , Heart , FileClock , LogOut , Menu } from 'lucide-react';
const navbar = () => {
    const [openProfile , setOpenProfile] = useState(false)
    const [openSidebar , setOpenSidebar] = useState( true)
  return (
    <div className="navbar-main">
        <img className='logopng'  src={logo} alt="" />
        <div className={`${openSidebar ? "list1" : "showlist"}`}>
            <Link className='link2' to='/home'><p>Home</p></Link>
            <Link className='link2' to='/vehicle'><p>Vehicle Listing</p></Link>
            <Link className='link2' to='/contact'><p>Contact Us</p></Link>
        </div>
       
        <div className="user-signin">
        <div className="bar-menu">
          <Menu color='white' size={18} onClick={() => setOpenSidebar(!openSidebar)}/>
        </div>
        <img className='userpng' src={user} onClick={() => setOpenProfile((prev)=>!prev)} />
        <Link className='link1' to="/login"><p>Sign In</p></Link>
        <Outlet />
        </div>
        {openProfile &&
        <ul className='dropdown'>
            <div className="imageandtext">
              <div className="drop-down-img">
            <img className='drop-down-image' src={user} alt="" />
            </div>
            <div className="image-text">
            <h5 className='username2'>Ramiz Ali <br /> <p className='username3'>View and edit your profile</p></h5>
            </div>

            </div>
            <hr className='drop-down-line'/>
            <Link className='link2' to='/Myprofile'>
            <div className="profileandicon">
            <User size={18}/>
            <p className='drop-down-items'>Profile</p>
            </div></Link>

            <Link className='link2' to='/favourite'>
            <div className='profileandicon'>
            <Heart size={18}/>
            <p className='drop-down-items'>Favoutite</p>
            </div></Link>

            <Link className='link2' to='/history'>
            <div className='profileandicon'>
            <FileClock size={18}/>
            <p className='drop-down-items'>History</p>
            </div>
            </Link>

            <Link className='link2' to='/login'>
            <div className='profileandicon'>
            <LogOut size={18}/>
            <p className='drop-down-items'>Logout</p>
            </div>
            </Link>
        </ul>
        }
        
    </div>
  )
}

export default navbar
