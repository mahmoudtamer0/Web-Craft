import React, { useState } from 'react'
import './services.css'
import webImg from '../../assets/0_M4bxiCIjcTK-2Xr6 1.png'
import uiImg from '../../assets/UIUX.png'
import EcommercImg from '../../assets/ecommerce3-1 1.png'
const Services = () => {

    const [boxes, setBoxes] = useState
        (
            [
                {
                    id: 0,
                    title: "Web Development",
                    image: webImg,
                    description: " Your website is the best way to talk about you, explain your ideas, and present your products.But for this to happen, your website design must be attractive and smooth to use."
                },
                {
                    id: 1,
                    title: "UI / UX Designe",
                    image: uiImg,
                    description: " Our UI/UX team does their best to provide you with a unique and compelling product design that perfectly reflects your brand personality, enhances your brand awareness in the market, and grows user conversions."
                },
                {
                    id: 2,
                    title: "E-commerce website",
                    image: EcommercImg,
                    description: " An online store where products or services are sold directly to customers. It includes features like shopping carts, payment gateways, and product catalogs."
                }
            ]
        )

    return (
        <div className='services'>
            <div className='text-center services-title mb-5'>
                <h2>Our Services</h2>
            </div>

            {boxes?.map(box => (
                <div key={box.id} className='mt-3 mb-3 services-web d-flex direc-col justify-content-center align-items-center'>
                    <h3 className='services-box-title'>{box.title}</h3>
                    <div className='mt-3'>
                        <img src={box.image} alt='...' />
                    </div>
                    <div className='mt-5 mb-3'>
                        <p>
                            {box.description}
                        </p>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Services