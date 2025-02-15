import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    
    const cvURL = "https://drive.google.com/file/d/1__ely_CUuNw7KIJM8E7UdblmdLVwbtAR/view?usp=sharing"
    const [menuActive, setMenuActive] = useState(false);

    const Navigate = useNavigate();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setMenuActive(false);
    };

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuActive(false);
    };

    return (
        <nav className="navbar">
            <div className="logo" style={{ cursor: 'pointer' }} onClick={() => {
                window.scrollTo(0, 0);
                Navigate('/')
            }}>Balram Shukla</div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${menuActive ? 'rotate' : ''}`}></div>
                <div className={`bar ${menuActive ? 'fade' : ''}`}></div>
                <div className={`bar ${menuActive ? 'rotate-reverse' : ''}`}></div>
            </div>
            <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => handleScrollToTop()}>Home</Link></li>
                <li><Link to="/skill" onClick={() => handleScrollToTop()}>Skills</Link></li>
                <li><Link to="/about" onClick={() => handleScrollToSection('about')}>About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certificate" onClick={() => handleScrollToTop()}>Certificates</Link></li>
                <li><a href={cvURL}>Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
