import React from 'react'
import whiteCar from "../../../assets/Images/whiteCar.png"
import './whitecar.css'
const whitecar = () => {
  return (
    <div className='whitecar-and-text' >
      <img className='white-car-img' src={whiteCar} alt="" />
        <div className="white-car-text">
        <h1>Rent a Car</h1>
        <p>We pride ourselves in always going the  extra mile for our customers</p>
        </div>
    </div>
  )
}

export default whitecar
