// Navbar.js

import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className='logo'>
                    <a href="/" className="nav-link">Koala Notes</a>
                </li>
                <li className="nav-item home">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/new" className="nav-link">New Note</a>
                </li>
                <li className="nav-item">
                    <a href="/logout" className="nav-link">Log Out</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
