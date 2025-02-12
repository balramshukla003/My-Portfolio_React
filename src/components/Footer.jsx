import React, { useState, useEffect } from 'react'
import '../css/Footer.css'
import socialLinks from '../api/Social-Links';
import { Link } from 'react-router-dom';
import Icons from './Icons.jsx';

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-links">
                    <h3>Important Links</h3>
                    <ul>
                        <li><Link to="/" onClick={() => handleScrollToTop()}>Home</Link></li>
                        <li><Link to="/about/detail" onClick={() => handleScrollToTop()}>About</Link></li>
                        <li><a href='https://drive.google.com/file/d/1BXWhuhYjth-3-OsaklS8I5uUuiWs6uEJ/view?usp=sharing' onClick={() => handleScrollToTop()}>Resume</a></li>
                        <li><Link to="/projects" onClick={() => handleScrollToTop()}>Projects</Link></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Follow me on</h3>
                    <div className="social-icons">
                        <Link to={socialLinks.facebook} className="social-icon facebook">Facebook</Link>
                        <Link to={socialLinks.twitter} className="social-icon twitter">Twitter</Link>
                        <Link to={socialLinks.instagram} className="social-icon instagram">Instagram</Link>
                        <Link to={socialLinks.github} className="social-icon github">GitHub</Link>
                        <Link to={socialLinks.linkedin} className="social-icon linkedin"><Icons.Linkedin /></Link>
                        <Link to={socialLinks.telegram} className="social-icon telegram">Telegram</Link>
                        <Link to={socialLinks.whatsapp} className="social-icon whatsapp">WhatsApp</Link>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Contact me</h3>
                    <p>Phone: +91 9026050563</p>
                    <a className='mailB' href="mailto:balramshukla003@gmail.com">Email: balramshukla003@gmail.com</a>
                    <a className='mailA' href="mailto:balramshukla003@gmail.com">Email</a>
                </div>
            </div >
        </footer >
    );
};

export default Footer;