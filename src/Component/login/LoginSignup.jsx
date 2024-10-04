import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordRegex.test(formData.password)) {
      setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, and one special character.");
      return;
    }
    setErrorMessage("");
    alert(`${isLogin ? "Login" : "Sign Up"} form submitted successfully!`);
    setFormData({ name: "", email: "", password: "" });
    navigate('/'); // Navigate to homepage
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-container">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required={!isLogin}
              />
            </div>
          )}
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <div className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
