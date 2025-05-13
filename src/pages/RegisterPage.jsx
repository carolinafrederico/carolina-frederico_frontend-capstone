import React, { useState } from "react";
import Header from '../components/Header';
import "../App.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
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
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <a href="/login" className="nav-link">Login</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
