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
                        <li><a href='#'>home</a></li>
                        <li><a href='#'>home</a></li>
                        <li><a href='#'>home</a></li>
                        <li><a href='#'>home</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar