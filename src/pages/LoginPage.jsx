import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

const LoginPage = ({ error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Login Form */}
      <section className="container-section">
        <div className="container-content">
          <h2 className="section-title">Login</h2>

          {error && <div className="error">{error}</div>}

          <form onSubmit={handleSubmit} className="form">
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

            <button type="submit" className="btn">Login</button>
          </form>

          <p className="redirect-link">
            Don't have an account? <a href="/register" className="nav-link">Register</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LoginPage;
