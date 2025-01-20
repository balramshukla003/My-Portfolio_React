import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const cvURL = "https://drive.google.com/file/d/1__ely_CUuNw7KIJM8E7UdblmdLVwbtAR/view?usp=sharing"
    const [menuActive, setMenuActive] = useState(false);

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
            <div className="logo">Balram Shukla</div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${menuActive ? 'rotate' : ''}`}></div>
                <div className={`bar ${menuActive ? 'fade' : ''}`}></div>
                <div className={`bar ${menuActive ? 'rotate-reverse' : ''}`}></div>
            </div>
            <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => handleScrollToTop()}>Home</Link></li>
                <li><Link to="/#about" onClick={() => handleScrollToSection('about')}>About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href={cvURL}>Resume</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
