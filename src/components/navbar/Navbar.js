import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header>
            <nav className='d-flex justify-content-between align-items-center'>
                <div>
                    <Link to={`/`}>Web Craft</Link>
                </div>
                <div>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><a href='#'>Services</a></li>
                        <li><Link to={`/contact-us`}>Contact</Link></li>
                        <li><a href='#'>About Us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar