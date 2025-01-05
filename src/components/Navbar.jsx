import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    window.onload = () => {
        if (window.location.hash === "#about") {
            handleScrollToSection()
        }
    }
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">Balram Shukla</div>
            <ul className="nav-links">
                <li><Link to="/" onClick={() => handleScrollToTop()}>Home</Link></li>
                <li><Link to="/#about" onClick={() => handleScrollToSection('about')}>About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href='https://drive.google.com/file/d/1BXWhuhYjth-3-OsaklS8I5uUuiWs6uEJ/view?usp=sharing'>Resume</a></li>
            </ul>
        </nav >
    );
};

export default Navbar;
