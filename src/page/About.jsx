import '../css/About.css';
import Profile from '../images/avatar.jpg';
import React, { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <div className="details-outer">
            <div className='Image'>
                <img src={Profile} alt="Balram Shukla" />
            </div>
            <div className='my-detail-box'>
                <div className='detail-area'>
                    <h2 style={{ marginBottom: '10px' }}>Personal Information</h2>
                    <p><strong>Name:</strong> Balram Shukla</p>
                    <p><strong>Date of Birth:</strong> Febuaury 22, 2004</p>
                    <p><strong>Email:</strong> balramshukla003@gmail.com</p>
                    <p><strong>Phone:</strong> +91 9026050563</p>
                    <p><strong>Address:</strong>Ghaziabad, UP-Delhi NCR</p>
                </div>
                <div className='detail-area'>
                    <h2>Education</h2>
                    <h5 style={{ textDecoration: "underline", marginTop: '10px' }}>Bachelor of Computer Application</h5>
                    <p> Dr Rammanohar Lohia Awadh university, Ayodhya</p>
                    <p> Jun 2022 - Jun 2025</p>
                    <p> Percentage: 75+</p>
                    <h5 style={{ textDecoration: "underline", marginTop: '10px' }}>Intermediate XII</h5>
                    <p> UP Board of Higher Education, Gonda</p>
                    <p> Mar 2021 - Mar 2022</p>
                    <p> Grade: 1st Division</p>
                    <h5 style={{ textDecoration: "underline", marginTop: '10px' }}>High School X</h5>
                    <p> Central Board of Higher Education, Gonda</p>
                    <p> Mar 2019 - Mar 2020</p>
                    <p> Grade: 1st Division</p>
                </div>

            </div>
        </div>
    );
};

export default About;
