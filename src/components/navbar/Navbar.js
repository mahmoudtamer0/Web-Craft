import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <header>
            <nav className='d-flex justify-content-between align-items-center'>
                <div>
                    <h2>Web Craft</h2>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>About Us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar