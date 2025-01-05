import React, { useState } from 'react';
import '../css/UserProfile.css';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [activeLink, setActiveLink] = useState('basic');

  const renderContent = () => {
    switch (activeLink) {
      case 'basic':
        return <div>Basic Details Content</div>;
      case 'education':
        return <div>Education Details Content</div>;
      case 'skills':
        return <div>Skills Content</div>;
      case 'work':
        return <div>Work Experience Content</div>;
      case 'projects':
        return <div>Projects Content</div>;
      case 'accomplishments':
        return <div>Accomplishments Content</div>;
      case 'resume':
        return <div>Resume Content</div>;
      default:
        return <div>Select a section from the menu.</div>;
    }
  };

  return (
    <div className="profile-outer">
      <div className="profile-left-side">
        <div className="pic-section">
          <img
            src="https://via.placeholder.com/96"
            alt="profile-pic"
            style={{ borderRadius: '50px' }}
          />
          <h5>Username</h5>
          <p>balramshukla003@gmail.com</p>
        </div>
        <div className="other-links">
          <Link
            to="#"
            className={`${activeLink === 'basic' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('basic')}
          >
            Basic Details
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'education' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('education')}
          >
            Education Details
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'skills' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('skills')}
          >
            Skill, Subjects & Language
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'work' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('work')}
          >
            Intern & Work Ex
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'projects' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('projects')}
          >
            Projects
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'accomplishments' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('accomplishments')}
          >
            Accomplishments
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'resume' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('resume')}
          >
            Resume, Doc & Write ups
          </Link>
        </div>
      </div>

      <div className="profile-right-side">{renderContent()}</div>
    </div>
  );
};

export default UserProfile;
