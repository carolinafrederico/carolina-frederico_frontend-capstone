import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({setUser}) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate =useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const newUser = {username, email, password}
        const response = await fetch ("http://localhost:3001/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        }) 
        const data = await response.json()
        
        setUser (data.user)
        navigate("/dashboard")
    } catch (error) {
        
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Registration Form */}
      <section className="container-section">
        <div className="container-content">
          <h2 className="section-title">Register</h2>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <button type="submit" className="btn">Register</button>
          </form>

          <p className="redirect-link">
            Already have an account?{" "}
            <Link to="/login" className="nav-link">Login</Link>
            
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RegisterPage;
