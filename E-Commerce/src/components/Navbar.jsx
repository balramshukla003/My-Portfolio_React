import React, { useState, useEffect, useRef } from 'react';
import image from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const userDetailRef = useRef(null);

    const navigate = useNavigate();

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
        navigate('/');
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleClickOutside = (event) => {
        if (userDetailRef.current && !userDetailRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isVisible]);

    useEffect(() => {
        return () => {
            const absoluteElement = document.getElementById("absolute-element");
            if (absoluteElement) {
                absoluteElement.style.display = "none";
            }
        };
    }, []);

    return (
        <div className='navbar'>
            <div className='upper-navbar'>
                <div className='nav-title' onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <img src={image} alt="Logo" />
                    <h2>Market Place</h2>
                </div>
                <div className='nav-links'>
                    <Link to="/browse-service">Browse Service</Link>
                    <Link to="/browse-request">Browse Request</Link>
                    <Link to="/post-request">Post a Request</Link>

                    <div className='nav-title' onClick={toggleVisibility}>
                        <img src={image} alt="User" />
                        <h3>user</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className='lower-navbar'>
                <Link to="/explore/graphics">Graphic Design</Link>
                <Link to="/explore/development">Development</Link>
                <Link to="/explore/architecture">Architecture</Link>
                <Link to="/explore/marketing">Marketing</Link>
                <Link to="/explore/advertisement">Advertisement</Link>
                <Link to="/explore/illustration">Illustration</Link>
            </div>

            <div>
                {isVisible && (
                    <div className="userDetail" ref={userDetailRef}>
                        <p className="closeBTN" onClick={toggleVisibility}>
                            X
                        </p>
                        <Link to="/user" onClick={toggleVisibility}>Profile</Link>
                        <Link onClick={toggleVisibility}>Dark Mode</Link>
                        <Link onClick={toggleVisibility}>Dashboard</Link>
                        <Link onClick={toggleVisibility}>Notifications</Link>
                        <Link onClick={toggleVisibility}>Logout</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
