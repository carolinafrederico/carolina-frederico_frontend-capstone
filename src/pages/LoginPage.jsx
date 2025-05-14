import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email, password };
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      {/* Header */}
     

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
            Don't have an account? <Link to="/register" className="nav-link">Register</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LoginPage;


// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import "../App.css";
// import { loginUser } from "../services/press-room-api";
// import { Link } from "react-router-dom";

// const LoginPage = ({ error }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//     loginUser (email, password);
//   };

//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Login Form */}
//       <section className="container-section">
//         <div className="container-content">
//           <h2 className="section-title">Login</h2>

//           {error && <div className="error">{error}</div>}

//           <form onSubmit={handleSubmit} className="form">
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="input-field"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="input-field"
//               />
//             </div>

//             <button type="submit" className="btn">Login</button>
//           </form>

//           <p className="redirect-link">
//             Don't have an account? <Link to="/register" className="nav-link">Register</Link>
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default LoginPage;
