import React from 'react'
import './profile.css'
import Ellipse from '../../assets/Images/Ellipse.png'
const profile = () => {
    return (
        <div className="profile-container1">
            <div className='profile-main'>
                <div className="image-save-btn">
                    <div className="image-upload-btn">
                        <img src={Ellipse} alt="" />
                        <div className="profile-upload-btn-div">
                            <button className='profile-upload-btn'>Upload</button>
                        </div>
                    </div>
                    <div className="profile-save-btn-div">
                        <button className='profile-save-btn'>Save Profile</button>
                    </div>
                </div>

                <div className="profile-line1">
                    <div className="fullname">
                        <h3>Full Name</h3>
                        <input type="text" className='full-name-input' placeholder='Enter Full Name' />
                    </div>
                    <div className="fullname">
                        <h3>Email</h3>
                        <input type="text" className='full-name-input' placeholder='Enter Your Email' />
                    </div>
                    <div className="fullname">
                        <h3>Phone</h3>
                        <input type="text" className='full-name-input' placeholder='Enter Phone No.' />
                    </div>
                </div>
                <div className="profile-line1">
                    <div className="fullname">
                        <h3>Postcode</h3>
                        <input type="text" className='full-name-input' placeholder='Enter Postcode' />
                    </div>
                    <div className="fullname">
                        <h3>Address</h3>
                        <input type="text" className='full-name-input' placeholder='Enter Address' />
                    </div>
                    <div className="fullname">
                        <h3>Gender</h3>
                        <div className="radio-buttons">
                            <div className="radio1">
                                <p>Male</p>
                                <input type="radio" id='Male' value={"Male"} />
                            </div>
                            <div className="radio1">
                                <p>Female</p>
                                <input type="radio" id='Female' value={"Female"} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className='profile-main2'>
             <div className="fisrt-cards-data">
                <h3>Driving Licence</h3>
                <div className="first-card">
                    <p>Upload your licence back image, <br /> Supported Formats: JPG, PNG,; <br />Max File Size:5MB. </p>
                </div>
                <div className="upload-picture-div">
                        <button className='upload-picture-btn'>Upload Picture</button>
                    </div>
             </div>

             <div className="fisrt-cards-data">
                <h3>Car Licence Back Image</h3>
                <div className="first-card">
                    <p>Upload your licence back image, <br /> Supported Formats: JPG, PNG,; <br />Max File Size:5MB. </p>
                </div>
                <div className="upload-picture-div">
                        <button className='upload-picture-btn'>Upload Picture</button>
                    </div>
             </div>


             <div className="fisrt-cards-data">
                <h3>Driving Licence</h3>
                <div className="first-card">
                    <p>Upload your licence back image, <br /> Supported Formats: JPG, PNG,; <br />Max File Size:5MB. </p>
                </div>
                <div className="upload-picture-div">
                        <button className='upload-picture-btn'>Upload Picture</button>
                    </div>
             </div>



            </div>
        </div>








    )
}

export default profile
