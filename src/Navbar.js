// Navbar.js

import './Navbar.css'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo-white.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className='logo' onClick={handleLogoClick}>
                    <img src={logo} alt="Koala Notes" id='koala-notes-logo'/>
                </li>
                <li className="nav-item">
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
