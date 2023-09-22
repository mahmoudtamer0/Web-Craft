import React from 'react'
import whatsImage from "../../assets/social-whatsapp-circle-512 1.png"
import faceImage from "../../assets/Facebook-logo-blue-circle-large-transparent-png 1.png"
import gmailImage from "../../assets/Gmail_Icon 1.png"
import "./contact.css"
const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='main-title text-center'>
                    <h4>contact  us</h4>
                </div>

                <div className='contact-heading text-center mt-4 mb-4'>
                    <h5>
                        24 <span>hours Available</span>
                    </h5>
                </div>

                <div className='contact-description'>
                    <p>We are here to help. Whatever you want to discuss, we love to hear about your business goals and we can provide marketing strategies to help you achieve these goals and develop your business.</p>
                </div>

                <div style={{ gap: "15px" }} className='row align-items-center justify-content-center mt-5'>
                    <div className='col-lg-3 social-box'>
                        <div><img src={whatsImage} /></div>
                        <div><p>01012345678</p></div>
                    </div>
                    <div className='col-lg-3 social-box'>
                        <div><img src={faceImage} /></div>
                        <div><p>Facebook.com</p></div>
                    </div>
                    <div className='col-lg-3 social-box'>
                        <div><img style={{ marginTop: "10px" }} src={gmailImage} /></div>
                        <div><p>Gmail.com</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact