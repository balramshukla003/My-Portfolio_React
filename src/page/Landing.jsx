import React, { useEffect } from 'react';
import '../css/Landing.css';
import { Link } from 'react-router-dom';
import Avtar from '../images/avatar.jpg'
import Profile from '../images/img Balram .jpg';


const Landing = () => {

    useEffect(() => {

        const hash = window.location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className="landing-page">
            <div className="landingInner">


                <header className="hero-section">
                    <div className="content">
                        <h1>Welcome to My Portfolio</h1>
                        <p>
                            Hi, I'm a passionate <span>Software Developer</span> and <span>Web Designer</span>,
                            crafting visually stunning and user-friendly applications.
                        </p>
                        <Link to="/projects" style={{ textDecoration: "none" }} className="cta-button">View My Work</Link>
                    </div>
                    <div className="hero-image">
                        <img src={Avtar} alt="Professional Work" />
                    </div>
                </header>

                <main className='main'>

                </main>

                <section className="about-section" id="about">
                    <div className="about-container">

                        <div className="about-text">
                            <h2>About Me</h2>
                            <p>
                                I’m <span style={{ color: "blueviolet" }}>Balram Shukla</span>, a passionate fresher skilled in Full-Stack and Software Development. With expertise in modern tools like HTML, CSS, JavaScript, React.js, Node.js, and MySQL, I focus on creating user-friendly web applications and scalable software solutions.
                            </p>
                            <p>
                                I combine a keen eye for design with strong problem-solving skills to build intuitive interfaces and robust back-end systems. My goal is to deliver clean, efficient, and impactful solutions while continuously learning and growing as a developer.
                            </p>
                            <p>
                                <strong>Skills:</strong>
                                <ul>
                                    <li>✔️Web Designing</li>
                                    <li>✔️Full-Stack Development</li>
                                    <li>✔️Problem Solving and Debugging</li>
                                </ul>
                            </p>
                            <p>
                                I'm excited about collaborating on innovative projects and contributing to impactful solutions that make a difference. Let's create something amazing together!
                            </p>
                            <Link to="/about/detail" className="cta-link">Know more</Link>

                        </div>
                    </div>



                </section>

            </div>
        </div >
    );
};

export default Landing;