import React from 'react';
import '../css/ComingSoon.css';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <h1>🚀 Coming Soon</h1>
            <p>We’re working hard to bring you something amazing! Stay tuned for updates.</p>
            <Link to="/" className="homeButton">
                Go Back Home
            </Link>
        </div>
    );
};

export default ComingSoon;
