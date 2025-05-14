import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear user state
      

      // Optionally, make a logout request to the backend to invalidate session
      await fetch("http://localhost:3001/auth/logout", {
        method: "GET",
        credentials: "include", // If using cookies for authentication
      });

      // Redirect to home or login
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/articles" className="nav-link">Articles</Link>
        <Link to="/open-data" className="nav-link">Open Data</Link>
        <Link to="/citizen-journalism" className="nav-link">Citizen Journalism</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </div>
      <div className="nav-right">
        {user ? (
          <button className="nav-link" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button className="nav-link">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




// import React from "react";
// import "../App.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({user}) => {
//   async function handleClick (e) {
//     try {
      
//     } catch (error) {
      
//     }
//   }

//   return (
//     <nav className="navbar">
//       <nav className="navbar">
//       <div className="nav-left">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/articles" className="nav-link">Articles</Link>
//         <Link to="/open-data" className="nav-link">Open Data</Link>
//         <Link to="/citizen-journalism" className="nav-link">Citizen Journalism</Link>
//       </div>
//     </nav>
//       <div className="nav-right">
//         {
//           user ? (
// <button className="nav-link" onClick={handleClick}>Logout</button>
//           ): (
// <Link to="/login"><button className="nav-link">Login</button></Link>
//           )
//         }<a href="/login" className="nav-link">Login</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;