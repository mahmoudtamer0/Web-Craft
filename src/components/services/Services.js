import React, { useState } from 'react'
import './services.css'
import webImg from '../../assets/0_M4bxiCIjcTK-2Xr6 1.png'
import uiImg from '../../assets/UIUX.png'
import EcommercImg from '../../assets/ecommerce3-1 1.png'
const Services = () => {



    return (
        <div className='services'>
            <div className='text-center services-title mb-5'>
                <h2>Our Services</h2>
            </div>
            <div className='mt-3 mb-3 services-web d-flex direc-col justify-content-center align-items-center'>
                <h3 className='services-box-title'>Web Development</h3>
                <div className='mt-3'>
                    <img src={webImg} alt='...' />
                </div>
                <div className='mt-5 mb-3'>
                    <p>
                        Your website is the best way to talk about you, explain your ideas, and present your products.
                        But for this to happen, your website design must be attractive and smooth to use.
                    </p>
                </div>
            </div>

            <div className='mt-3 mb-3 services-web d-flex direc-col justify-content-center align-items-center'>
                <h3 className='services-box-title'>UI / UX Designe</h3>
                <div className='mt-3'>
                    <img src={uiImg} alt='...' />
                </div>
                <div className='mt-5 mb-3'>
                    <p>
                        An online store where products or services are sold directly to customers. It includes features like shopping carts, payment gateways, and product catalogs.
                    </p>
                </div>
            </div>

            <div className='mt-3 mb-3 services-web d-flex direc-col justify-content-center align-items-center'>
                <h3 className='services-box-title'>UI / UX Designe</h3>
                <div className='mt-3'>
                    <img src={EcommercImg} alt='...' />
                </div>
                <div className='mt-5 mb-3'>
                    <p>
                        An online store where products or services are sold directly to customers. It includes features like shopping carts, payment gateways, and product catalogs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services