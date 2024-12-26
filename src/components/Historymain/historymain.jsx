import React , {useState} from 'react'
import './historymain.css'
import car from "../../assets/Images/car.png"
import Image from "../../assets/Images/Image.png"
import { Fuel , Bolt , Users , Star} from "lucide-react";
const historymain = () => {
    const [showPopup , setShowPopup] = useState(false)
    const [showPopup2 , setShowPopup2] = useState(false)

    
  return (
    <>
    <div className="history-main">
    <div className="history-text-p">
      <h2>History</h2>
      <p>Here you can the history of rent cars that you used</p>
    </div>

    <div className="history-cards">
        <div className="history-card1">
              <div className="cards-left">
                <div className="history-car-name">
                    <h3>Nissan Gt-R</h3>
                    <p>Sports</p>
              </div>

              <div className="history-car-img">
                    <img src={car} alt="" />
              </div>
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
              </div>

              <div className="cards-right">
                    <div className="cancel-return-btns">
                        <p onClick={() => setShowPopup2((prev)=>!prev)}>Cancel</p>
                        <div className="return-btn-div">
                            <button className='return-btn'>Return</button>
                        </div>
                    </div>
                    <div className="history-pick-point">
                        <span className='history-pick-point-span1'>London Bridge</span>
                        <span className='history-pick-point-span2'>Pick Point</span>
                    </div>

                    <div >
                        <p className="history-days">------------------------------ <p className='days28'>28 Days</p></p>
                    </div>
                    <div className="history-car-name-drop">
                    <div className="history-pick-point">
                        <span className='history-pick-point-span1'>King George</span>
                        <span className='history-pick-point-span2'>Drop Off</span>
                    </div>
                    <div className="history-car-price">
                        <p>Price</p>
                        <h4>$99.0</h4>
                        <p>/day</p>
                    </div>
                    </div>
              </div>
        </div>

        <div className="history-card1">
              <div className="cards-left">
                <div className="history-car-name">
                    <h3>Nissan Gt-R</h3>
                    <p>Sports</p>
              </div>

              <div className="history-car-img">
                    <img src={car} alt="" />
              </div>
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
              </div>

              <div className="cards-right">
                    <div className="cancel-return-btns">
                        
                        <div className="re-rent-btn-div">
                            <button className='re-rent-btn' onClick={() => setShowPopup((prev)=>!prev)}>Re-Rent</button>
                        </div>
                    </div>
                    <div className="history-pick-point">
                        <span className='history-pick-point-span1'>London Bridge</span>
                        <span className='history-pick-point-span2'>Pick Point</span>
                    </div>

                    <div >
                        <p className="history-days">------------------------------ <p className='days28'>28 Days</p></p>
                    </div>
                    <div className="history-car-name-drop">
                    <div className="history-pick-point">
                        <span className='history-pick-point-span1'>King George</span>
                        <span className='history-pick-point-span2'>Drop Off</span>
                    </div>
                    <div className="history-car-price">
                        <p>Price</p>
                        <h4>$99.0</h4>
                        <p>/day</p>
                    </div>
                    </div>
              </div>
        </div>

        
    </div>
    
    </div>

{showPopup &&

    <div className="history-popup1">
    <div className="thanku-popup-main">
        <div className="thanku-top">
        </div>

        <div className="thanku-text-p">
            <span className='thanku-text-span1'>Thank you!</span>
            <span className='thanku-text-span2'>Please rate your trip</span>
        </div>

        <div className="popup-stars">
            <Star color='#FFBD30'/>
            <Star color='#FFBD30'/>
            <Star color='#FFBD30'/>
            <Star color='#FFBD30'/>
            <Star color='#9DADC6'/>
        </div>

        <div className="hey-joe-msg-div">
            <p>Hey Joe!</p>
            <input type="text" className='hey-joe-meg-input' placeholder='Write message here..' />
        </div>

        <div onClick={() => setShowPopup((prev)=>!prev)} className="popup-send-div">
            <button className='popup-send'>Send</button>
        </div>

    </div>
    </div>
}

   {showPopup2 &&

<div className="history-popup2">
      <div className="popup2">
        <img src={Image} alt="" />

        <p>Are you Sure you want to cancel this order. After Cancel this order you have 2 Warnings left  after your account will Blocked</p>
     <div className="yes-no-btns">
        <div className="popup2-yesbtn-div">
           <button className='popup2-yes'>Yes</button>
        </div>
        <div className="popup2-nobtn-div" onClick={() => setShowPopup2((prev)=>!prev)}>
           <button className='popup2-no' >No</button>
        </div>

      </div>
      </div>
      </div>
      

}

</>
  )
}

export default historymain
