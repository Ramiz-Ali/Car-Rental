import React from 'react'
import './paymentmain.css'
import View2 from '../../assets/Images/View2.png'
import Visa from '../../assets/Images/Visa.png'
import Paypal from '../../assets/Images/Paypal.png'
import Bitcoin from '../../assets/Images/Bitcoin.png'
import security from '../../assets/Images/security.png'
import { Star } from "lucide-react"
const paymentmain = () => {
    return (
        <div className='paymentmain-main'>

            <div className="billing-info-card">
                <div className="billing-info">
                    <div>
                        <div className="billing-info-text">Billing Info</div>
                        <div className="left-right-text-billing">
                            <div>Please enter your billing info</div>
                            <div>Step 1 of 4</div>
                        </div>
                    </div>
                    <div className="billing-info-inputs">
                        <div className="billing-name">
                            <h4>Name</h4>
                            <div className="billing-name-input-div">
                                <input className='billing-name-input' type="text" placeholder='Your Name' />
                            </div>
                        </div>
                        <div className="billing-name">
                            <h4>Phone Number</h4>
                            <div className="billing-name-input-div">
                                <input className='billing-name-input' type="text" placeholder='Phone Number' />
                            </div>
                        </div>
                    </div>

                    <div className="billing-info-inputs">
                        <div className="billing-name">
                            <h4>Address</h4>
                            <div className="billing-name-input-div">
                                <input className='billing-name-input' type="text" placeholder='Address' />
                            </div>
                        </div>
                        <div className="billing-name">
                            <h4>Town/City</h4>
                            <div className="billing-name-input-div">
                                <input className='billing-name-input' type="text" placeholder='Town or City' />
                            </div>
                        </div>
                    </div>


                </div>
                {/*second div */}

                <div className="rental-info-main">
                    <div>
                        <div className="billing-info-text">Rental Info</div>
                        <div className="left-right-text-billing">
                            <div>Please select your rental date</div>
                            <div>Step 2 of 4</div>
                        </div>
                    </div>
                    <div className="radio-name">

                        <input type="radio" />
                        <p>Pick-Up</p>

                    </div>

                    <div className="billing-info-inputs">
                        <div className="billing-name">
                            <h4>Locations</h4>
                            <div className="billing-name-input-div">
                                <input className='billing-name-input' type="text" placeholder='Select your city' />
                            </div>
                            
                        </div>
                        <div className="billing-name">
                            <h4>Date</h4>
                            <div className="billing-name-input-div">
                                <input className='billing-name-input-month' type="Month" placeholder='Phone Number' />
                            </div>
                        </div>

                        <div className="billing-name">
                        <h4>Time</h4>
                        <div className="billing-name-input-div">
                            <input className='billing-name-input-month' type="Text" placeholder='Select your time' />
                        </div>
                    </div>
                    </div>
                    

                    <div className="radio-name">

                        <input type="radio" />
                        <p>Drop-Off</p>

                    </div>

                    <div className="billing-info-inputs">
                        <div className="billing-name">
                            <h4>Locations</h4>
                            <div className="billing-name-input-div">
                                <input className='billing-name-input' type="text" placeholder='Select your city' />
                            </div>
                        </div>
                        <div className="billing-name">
                            <h4>Date</h4>
                            <div className="billing-name-input-div">
                                <input className='billing-name-input-month' type="Month" placeholder='Phone Number' />
                            </div>
                        </div>

                        <div className="billing-name">
                        <h4>Time</h4>
                        <div className="billing-name-input-div">
                            <input className='billing-name-input-month' type="Text" placeholder='Select your time' />
                        </div>
                    </div>
                    </div>
                    
                </div>
                {/* Third Div */}

                <div className="rental-info-main2">
                    <div>
                        <div className="billing-info-text">Payment Method</div>
                        <div className="left-right-text-billing">
                            <div>Please enter your payment method</div>
                            <div>Step 3 of 4</div>
                        </div>
                    </div>
                    <div className="visa-card-input">
                        <div className="radio-name2">
                            <div className='radio-texxxt'>
                                <input type="radio" />
                                <p>Credit-Card</p>
                            </div>
                            <div>
                                <img src={Visa} alt="" />
                            </div>

                        </div>

                        <div className="billing-info-inputs">
                            <div className="billing-name">
                                <h4>Card Number</h4>
                                <div className="billing-name-input-div2">
                                    <input className='billing-name-input2' type="text" placeholder='Card number' />
                                </div>
                            </div>
                            <div className="billing-name">
                                <h4>Expiration Date</h4>
                                <div className="billing-name-input-div2">
                                    <input className='billing-name-input-month2' type="text" placeholder='DD/MM/YY' />
                                </div>
                            </div>
                        </div>
                        <div className="billing-info-inputs">
                            <div className="billing-name">
                                <h4>Card Hiolder</h4>
                                <div className="billing-name-input-div2">
                                    <input className='billing-name-input2' type="text" placeholder='Card Holder' />
                                </div>
                            </div>
                            <div className="billing-name">
                                <h4>CVC</h4>
                                <div className="billing-name-input-div2">
                                    <input className='billing-name-input-month2' type="text" placeholder='CVC' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="paypal-payment">
                        <div className='radio-texxxt'>
                            <input type="radio" />
                            <p>PayPal</p>
                        </div>
                        <img src={Paypal} alt="" />
                    </div>

                    <div className="paypal-payment">
                        <div className='radio-texxxt'>
                            <input type="radio" />
                            <p>Bitcoins</p>
                        </div>
                        <img src={Bitcoin} alt="" />
                    </div>


                </div>

                {/* forth Div */}

                <div className="confirmation-info">
                    <div>
                        <div className="billing-info-text">Confirmation</div>
                        <div className="left-right-text-billing">
                            <div>Just few clicks and your rental is ready!</div>
                            <div>Step 4 of 4</div>
                        </div>
                    </div>

                    <div className="payment-checkbox">
                        <input type='checkbox' />
                        <p>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                    </div>

                    <div className="payment-checkbox">
                        <input type='checkbox' />
                        <p>I agree with our terms and conditions and privacy policy.</p>
                    </div>

                    <div className="payment-rent-btn">
                        <button className='payment-noww-btn'>Rent Now</button>
                    </div>

                    <div className="security-text">
                        <img src={security} alt="" />
                        <h3>All your data is safe</h3>
                        <p>We are using the most advanced security to provide you the best experience ever.</p>
                    </div>




                </div>




            </div>


{/* right Card */}
            <div className="payment-card">
                <div className="pay-card-text">
                    <h2>Rental Summary</h2>
                    <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
                </div>

                <div className="image-car-name">
                    <img src={View2} alt="" />
                    <div className="car-name-star-icons">
                        <h2>Nissan GT-R</h2>
                        <div className="payment-card-stars">
                            <div>
                            <Star color='#FBAD39' size={17} />
                            <Star color='#FBAD39' size={17} />
                            <Star color='#FBAD39' size={17} />
                            <Star color='#FBAD39' size={17} />
                            <Star color='#90A3BF' size={17} /></div>
                            <div className="payment-total-review">440+ Reviewers</div>
                        </div>

                    </div>
                </div>
                <hr />

                <div className="subtotal">
                    <p className='subtotal-p1'>Subtotal</p>
                    <p className='subtotal-p2'>$80.00</p>
                </div>

                <div className="subtotal">
                    <p className='subtotal-p1'>Tax</p>
                    <p className='subtotal-p2'>$0</p>
                </div>

                <div className="total-rental">
                    <div className="rental-price-p">
                        <h3>Total Rental Price</h3>
                        <p>Overall price and include rental discount</p>
                    </div>
                    <h1>$80.00</h1>
                </div>
            </div>
        </div>
    )
}

export default paymentmain
