import React from "react";
import Navbar from "./Navbar";
import "../App.css";

const Header = ({ user, setUser }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Press Room</h1>
        <span className="tagline">Empowering News, Data, and Voices</span>
      </div>

      {/* Navbar */}
      <Navbar user={user} setUser={setUser} />
    </header>
  );
};

export default Header;


// import React from "react";
// import Navbar from "./Navbar";
// import "../App.css";

// const Header = ({user}) => {
//   return (
//     <header className="header">
//       <div className="header-left">
//         <h1 className="logo">Press Room</h1>
//         <span className="tagline">Empowering News, Data, and Voices</span>
//       </div>

//       {/* Navbar */}
//       <Navbar user = {user}/>
//     </header>
//   );
// };

// export default Header;
