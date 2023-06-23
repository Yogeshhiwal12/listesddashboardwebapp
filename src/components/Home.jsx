import React, { useState } from 'react';
import image1 from '../assets/apple 1.png';
import image2 from '../assets/google-icon 1.png';
import './Home.css';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
const Home = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(!showRegisterForm);
  };
  const handleGoogleLoginSuccess = (response) => {
    // Handle successful login using Google
    console.log('Google login success', response);
    // You can perform further actions here, such as sending the login data to your server.
  };
  const handleGoogleLoginFailure = (error) => {
    // Handle failed login using Google
    console.log('Google login failure', error);
    // You can show an error message or perform other actions as needed.
  };
  const onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  };
  return (
    <div className="container">
      {/* Left Part */}
      <div className="left-part">
        <h2 className="logo">Board.</h2>
      </div>
      {/* Right Part */}
      <div className="right-part">
        <h2 className="title">Sign in</h2>
        <p className="subtitle">Sign in to your account</p>
        <div className="social-login">
          <div className="social-login-item">
            <GoogleLogin
              clientId="174844640328-afm9vq5m4oatuf49llbb1nebrrt0n7pt.apps.googleusercontent.com"
              buttonText=""
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
              cookiePolicy={'single_host_origin'}
              className="social-icon"
            />
            <p onClick={() => {}}>Sign in with Google</p>
          </div>
          <div className="social-login-item">
            <img src={image1} alt="Apple Logo" className="social-icon" />
            <p>Sign in with Apple</p>
          </div>
        </div>
        {/* Additional Google Sign-In Button */}
        <div className="g_id_signin" data-type="standard" data-callback="onSignIn"></div>
        {/* Login Form */}
        {showLoginForm && (
          <div className="form-container">
            <form>
              <input type="text" placeholder="Email Address" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <p className="forgot-password">
                <a href="#" className=" text-blue-700">
                  Forgot password?
                </a>
              </p>
              <Link to="/dashboard">
                <button className="submit-button">Sign in</button>
              </Link>
            </form>
          </div>
        )}
        {/* Register Form */}
        {showRegisterForm && (
          <div className="form-container">
            <form>
              <input type="text" placeholder="User Name" className="input-field" />
              <input type="text" placeholder="Email Address" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <button className="submit-button">Register</button>
            </form>
          </div>
        )}
        {/* Toggle Forms */}
        <p className="toggle-forms">
          {showLoginForm ? (
            <>
              Don't have an account?{' '}
              <a href="#" onClick={toggleForms} className=" text-blue-700">
                Register here
              </a>
            </>
          ) : (
            <>
              Have an account?{' '}
              <a href="#" onClick={toggleForms} className=" text-blue-700">
                Login here
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};
export default Home;
