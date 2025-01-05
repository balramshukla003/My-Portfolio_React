import '../css/Login.css';
import React, { useState } from 'react';
import image from '../images/draw2.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with:', email, password);

    // Replace with actual authentication logic
    if (email === 'balramshukla003@gmail.com' && password === 'balram') {
      navigate('/');
    } else {
      alert('Invalid Email or Password');
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Social Registeration with ${platform} is Comming Soon`)
  };

  return (
    <div
      className="login-pg"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <div className="login-inner">
        <div className="login-form">
          <h2 className="Heading"><p style={{ fontSize:'35px' }}>&#8592;</p>Welcome Back!</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="divider">or login with</div>
          <div className="social-login">
            <button
              className="social-button google"
              onClick={() => handleSocialLogin('Google')}
            >
              Google
            </button>
            <button
              className="social-button facebook"
              onClick={() => handleSocialLogin('Facebook')}
            >
              Facebook
            </button>
            <button
              className="social-button github"
              onClick={() => handleSocialLogin('GitHub')}
            >
              GitHub
            </button>
          </div>
          <p className="signup-link">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
      <div className="login-inner-img">
        <img src={image} alt="Login Illustration" />
      </div>
    </div >
  );
};

export default Login;
