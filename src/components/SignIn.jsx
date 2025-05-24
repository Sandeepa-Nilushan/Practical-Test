import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Form submitted:', formData);
    // After successful sign in, redirect to home
    navigate('/');
  };

  return (
    <section className="signin-container">
      <div className="signin-wrapper">
        <div className="signin-left-column">
          <div className="signin-text-content">
            <h1 className="signin-heading">
              Welcome <span className="highlight">Back</span>
            </h1>
            <p className="signin-description">
              Sign in to access your account and manage your logistics operations
            </p>
          </div>
        </div>
        
        <div className="signin-right-column">
          <div className="signin-form-container">
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="signin-button">
                Sign In
              </button>

              <p className="signup-prompt">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn; 