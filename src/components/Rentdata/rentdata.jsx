import React from 'react'
import './rentdata.css'
import { Heart, Star , ChevronDown } from "lucide-react";
import Maskgroup from "../../assets/Images/Maskgroup.png"
import View2 from "../../assets/Images/View2.png"
import view3 from "../../assets/Images/view3.png"
import user from "../../assets/Images/user.png"
import Profill from "../../assets/Images/Profill.png"
import {Link} from "react-router-dom"
const rentdata = () => {
    return (
        <div className='rentdata-main'>
            <div className="images-card">
                <div className="view-images">
                    <img className='big-car-image' src={Maskgroup} alt="" />
                    <div className="view-images-small">
                        <img className='small-images' src={View2} alt="" />
                        <img className='small-images' src={view3} alt="" />
                        <img className='small-images' src={View2} alt="" />
                        <img className='small-images' src={View2} alt="" />
                        <img className='small-images' src={view3} alt="" />
                        <img className='small-images' src={view3} alt="" />
                        <img className='small-images' src={View2} alt="" />
                        <img className='small-images' src={view3} alt="" />
                        <img className='small-images' src={View2} alt="" />

                    </div>
                </div>

                <div className="rentdata-card">
                    <div className="car-name1">
                        <h2>Nissan GT-R</h2>
                        <Heart />
                    </div>
                    <div className="star-ratings">
                        <Star size={15} color='#FBB245' />
                        <Star size={15} color='#FBB245' />
                        <Star size={15} color='#FBB245' />
                        <Star size={15} color='#FBB245' />
                        <Star size={15} color='#FBB245' />
                        <p>440+ Reviewers</p>
                    </div>
                    <div className="card-data2">
                        <p className='card-data-p1'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>

                        <div className="card-data2-line1">
                            <p>Type Car</p>
                            <h5>Sport</h5>
                            <p>Capacity</p>
                            <h5>2 Person</h5>
                        </div>

                        <div className="card-data2-line2">
                            <p>Steering</p>
                            <h5>Manual</h5>
                            <p>Gasoline</p>
                            <h5>70L</h5>
                        </div>
                        <div className="car-price3-btn">
                            <div className="car-price3">
                                <div className="car-price-rent">
                                    <h2>$80.00/</h2>
                                    <p>day</p>
                                </div>
                                <p className='car-price-line'>$100.00</p>
                            </div>
                            <Link className='link2' to='/payment'>
                            <div className="rentdata-rent-btn">
                                <button className='rent-noww-btn'>Rent Now</button>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviews-main">
                <div className="reviews-total">
                    <h3>Reviews</h3>
                    <div className="reviews-count">13</div>
                </div>
                <div className="reviewr-name">
                    <div className="reviewr-name-left">
                        <img className='review-user-img' src={user} alt="" />
                        <div className="review-username">
                            <h3>Alex Stanton</h3>
                            <p>CEO at Bhuplak</p>
                        </div>
                    </div>
                    <div className="reviewr-name-right">
                        <p>21 July 2023</p>
                        <div className="reviewr-right-stars">
                            <Star size={20} color='#FBB245' />
                            <Star size={20} color='#FBB245' />
                            <Star size={20} color='#FBB245' />
                            <Star size={20} color='#FBB245' />
                            <Star size={20} color='#FBB245' />
                        </div>
                    </div>

                </div>
                <div className="reviewr-review-text">
                    <p>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the  officers is also very friendly and very polite.</p>
                </div>

                <div className="reviewr-name">
                    <div className="reviewr-name-left">
                        <img className='review-user-img' src={Profill} alt="" />
                        <div className="review-username">
                            <h3>Skylar Dias</h3>
                            <p>CEO at Amazon</p>
                        </div>
                    </div>
                    <div className="reviewr-name-right">
                        <p>21 July 2023</p>
                        <div className="reviewr-right-stars">
                            <Star size={20} color='#FBB245' />
                            <Star size={20} color='#FBB245' />
                            <Star size={20} color='#FBB245' />
                            <Star size={20} color='#FBB245' />
                            <Star size={20} color='#FBB245' />
                        </div>
                    </div>

                </div>
                <div className="reviewr-review-text">
                    <p>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the  officers is also very friendly and very polite.</p>
                </div>
              <div className="show-all-icon">
                <p>Show All</p>
                <ChevronDown size={18} color='#959FAF'/>
            </div>
            </div>


        </div>
    )
}

export default rentdata
