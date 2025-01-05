import React from "react";
import '../css/Resume.css'

const Resume = () => {
    return (
        <div className="Resume">
            <div className="Resume-outer" style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
                <header style={{ textAlign: "center", marginBottom: "20px" }}>
                    <h1>Your Name</h1>
                    <p>
                        [Your Phone Number] | [Your Email Address] | <a href="[LinkedIn Profile]">LinkedIn</a> | [City, State]
                    </p>
                </header>

                <section>
                    <h2>Professional Summary</h2>
                    <p>
                        Dynamic marketing professional with over 5 years of experience in digital marketing and brand management. Proven track record of increasing online engagement and driving sales through innovative campaigns.
                    </p>
                </section>

                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li>Digital Marketing</li>
                        <li>SEO/SEM</li>
                        <li>Content Creation</li>
                        <li>Data Analysis</li>
                        <li>Project Management</li>
                    </ul>
                </section>

                <section>
                    <h2>Work Experience</h2>
                    <div>
                        <h3>Marketing Specialist</h3>
                        <p>ABC Company, City, State</p>
                        <p>Jan 2020 - Present</p>
                        <ul>
                            <li>Developed and executed digital marketing strategies that increased website traffic by 30%.</li>
                            <li>Managed social media accounts, resulting in a 50% increase in follower engagement.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2>Education</h2>
                    <div>
                        <h3>Bachelor of Arts in Marketing</h3>
                        <p>XYZ University, City, State</p>
                        <p>Graduated May 2019</p>
                    </div>
                </section>

                <section>
                    <h2>Certifications</h2>
                    <ul>
                        <li>Google Analytics Certified</li>
                        <li>HubSpot Content Marketing Certification</li>
                    </ul>
                </section>

                <section>
                    <h2>Projects</h2>
                    <p>
                        Led a team project to redesign the company website, improving user experience and increasing conversion rates by 20%.
                    </p>
                </section>

                <section>
                    <h2>Volunteer Experience</h2>
                    <div>
                        <h3>Marketing Volunteer</h3>
                        <p>Local Nonprofit Organization, City, State</p>
                        <p>June 2018 - Dec 2019</p>
                        <ul>
                            <li>Created promotional materials and managed social media campaigns to raise awareness for community events.</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Resume;
