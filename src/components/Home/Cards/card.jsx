import React from 'react'
import './card.css'
import {Heart , Fuel , Bolt , Users} from "lucide-react";
import car from "../../../assets/Images/car.png"
import { Link  } from 'react-router-dom';
const card = () => {
  return (
    <div className="first">
      <div className="car-name-icon">
      <div className="car-name">
         <h3>Swift</h3>
         <p>Sport</p>
         </div>
         <Heart className='heart-icon'/>
         </div>
         <div className="car-image">
         <img src={car} alt="" />
         </div>
         <div className="icons-and-price">
         <div className="car-properties">
          <div className="petrol">
           <Fuel color='#BFBFC1' size={19}/>
           <p>80L</p>
          </div>
          <div className="petrol">
           <Bolt color='#BFBFC1' size={19}/>
           <p>Manual</p>
          </div>
          <div className="petrol">
           <Users color='#BFBFC1' size={19}/>
           <p>People</p>
          </div>
         </div>
         <div className="price-car">
          <h5>pkr.</h5>
          <h3>4000/</h3>
          <p>day</p>
          <Link className='link2' to='/rent'>
          <div className="rent-now-button">
          <button className='rent-now2'>Rent Now</button>
         </div>
         </Link>
         </div>
         </div>


    </div>
  )
}

export default card
