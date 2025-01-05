import { Link } from 'react-router-dom';
import '../css/Project.css';
import React, { useEffect } from 'react'

import Project1_1 from "../images/Screenshot 2025-01-04 195640.png"
import Project1_2 from "../images/Screenshot 2025-01-04 195359.png"
import Project2_1 from "../images/Screenshot 2025-01-05 134854.png"
import Project2_2 from "../images/Screenshot 2025-01-05 134927.png"
import Project3_1 from "../images/Screenshot 2025-01-05 135807.png"
import Project3_2 from "../images/Screenshot 2025-01-05 135837.png"
import Project4_1 from "../images/Screenshot 2025-01-05 141626.png"
import Project4_2 from "../images/Screenshot 2025-01-05 142302.png"

const Project = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-outer">
            <h1 className='heading'>Project Showcase</h1>
            <div className="project-container">
                <div className="project-image">
                    <img style={{ marginBottom: '20px' }} src={Project1_1} alt="Project Image" />
                    <img src={Project1_2} alt="Project Image" />
                </div>
                <div className="project-details">
                    <h2>1. Market Place</h2>
                    <p>A dynamic job-seeking platform where users can create profiles to showcase their skills, experience, and portfolios. Employers can easily search for candidates. Key features include user registration, easy access to jobers.</p>
                    <p style={{ textDecoration: 'underline' }}>Technology Used</p>
                    <p style={{ display: 'flex' }}><span style={{ fontWeight: 'bold' }}>Frontend:</span>&nbsp;React.js, JSX, Html, CSS, JS </p>
                    <p style={{ display: 'flex', marginTop: '-10px' }}><span style={{ fontWeight: 'bold' }}>Backend:</span>&nbsp;Node.js, Express.js</p>
                    <p>The project is currently undergoing continuous enhancements to provide a more user-friendly interface, ensuring a seamless and intuitive experience for all users.</p>
                    <a href='https://github.com/balramshukla003/Market-Place' style={{ color: "white", backgroundColor: '#393737' }} className="btn">GitHub</a>
                    <Link to="" className="btn">LinkedIN</Link>
                </div>
            </div>
            <div className="project-container">
                <div className="project-image">
                    <img style={{ marginBottom: '20px' }} 
                    src={Project2_1} alt="Project Image" />
                    <img src={Project2_2} alt="Project Image" />
                </div>
                <div className="project-details">
                    <h2>2. InnoTech</h2>
                    <p>The InnoTech Quiz Application is an engaging and interactive platform designed for both students and teachers. It allows students to take quizzes and access educational resources, while teachers can host quizzes. Built with modern web technologies, this application ensures a seamless and enjoyable user experience.</p>
                    <p style={{ textDecoration: 'underline' }}>Technology Used</p>
                    <p style={{ display: 'flex' }}><span style={{ fontWeight: 'bold' }}>Frontend:</span>&nbsp; HTML, CSS, JS </p>
                    <p style={{ display: 'flex', marginTop: '-10px' }}><span style={{ fontWeight: 'bold' }}>Backend:</span>&nbsp; Node.js, Express.js</p>
                    <p style={{ display: 'flex', marginTop: '-10px' }}><span style={{ fontWeight: 'bold' }}>Database:</span>&nbsp; MySQL</p>
                    <a href="https://github.com/balramshukla003/Quiz_App-InnoTech"  style={{ color: "white", backgroundColor: '#393737' }} className="btn">GitHub</a>
                    <a href="" className="btn">LinkedIN</a>
                </div>
            </div>
            <div className="project-container">
                <div className="project-image">
                    <img style={{ marginBottom: '20px' }} src={Project3_1} alt="Project Image" />
                    <img src={Project3_2} alt="Project Image" />
                </div>
                <div className="project-details">
                    <h2>3. Resturant Mangement System</h2>
                    <p>The Restaurant Website project aims to create an engaging and
                        user-friendly platform for a fine dining restaurant. The website
                        allows customers to explore the menu, book tables online, view
                        restaurant details, and access contact information.The website focuses on responsive
                        design and providing an optimal user experience across devices.</p>
                    <p style={{ textDecoration: 'underline' }}>Technology Used</p>
                    <p style={{ display: 'flex' }}><span style={{ fontWeight: 'bold' }}>Frontend:</span>&nbsp; HTML, CSS, JS </p>
                    <a href='https://github.com/balramshukla003/Resturant-Website' style={{ color: "white", backgroundColor: '#393737' }} className="btn">GitHub</a>
                    <Link to="" className="btn">LinkedIN</Link>
                </div>
            </div>
            <div className="project-container">
                <div className="project-image">
                    <img style={{ marginBottom: '20px' }} src={Project4_1} alt="Project Image" />
                    <img src={Project4_2} alt="Project Image" />
                </div>
                <div className="project-details">
                    <h2>4. Student Database Management</h2>
                    <p>The Restaurant Website project aims to create an engaging and
                        user-friendly platform for a fine dining restaurant. The website
                        allows customers to explore the menu, book tables online, view
                        restaurant details, and access contact information.The website focuses on responsive
                        design and providing an optimal user experience across devices.</p>
                    <p style={{ textDecoration: 'underline' }}>Technology Used</p>
                    <p style={{ display: 'flex' }}><span style={{ fontWeight: 'bold' }}>Frontend:</span>&nbsp; HTML, CSS, JS </p>
                    <a href='https://github.com/balramshukla003/JAVA-DBMS-project' style={{ color: "white", backgroundColor: '#393737' }} className="btn">GitHub</a>
                    <a href='https://www.linkedin.com/posts/balram-shukla-3189b6269_educationtechnology-schoolmanagement-studentrecords-activity-7176246651689349120-enKu?utm_source=share&utm_medium=member_desktop' className="btn">LinkedIN</a>
                </div>
            </div>
        </div>
    )
}

export default Project
