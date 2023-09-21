import React from 'react'
import landImg from '../../assets/pn 1.png'
import './landing.css'
const Landing = () => {
    return (
        <div className='landing'>

            <div className='container'>
                <div className='row align-items-center justify-content-between'>
                    <div className='landing-text col-lg-6'>
                        <div>
                            <h3>Get your own</h3>
                            <h3 className='active-h3'>Professional-Looking</h3>
                            <h3>Website Now </h3>
                        </div>
                        <div>
                            <p>we serve Branding, UI/UX Design, websites, E-commerce, and web apps</p>
                        </div>
                        <div>
                            <button>order now</button>
                        </div>
                    </div>
                    <div className='col-lg-6 landing-img'>
                        <img src={landImg} alt='..' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing