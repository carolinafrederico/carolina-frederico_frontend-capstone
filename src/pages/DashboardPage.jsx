import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreatePost from "../components/CreatePost/CreatePost";
import ReadPosts from "../components/ReadPost";
import UpdatePost from "../components/UpdatePost";
import DeletePost from "../components/DeletePost";
import "../App.css";

const DashboardPage = (props) => {
  return (
    <>
      

      <section className="dashboard-container">
        <h2 className="dashboard-title">Dashboard</h2>

        <div className="dashboard-grid">
          {/* Create Post */}
          <div className="dashboard-section">
            <h3>Create Post</h3>
            <CreatePost user={props.user}/>
          </div>

          {/* Read Posts */}
          <div className="dashboard-section">
            <h3>All Posts</h3>
            <ReadPosts user={props.user}/>
          </div>

         
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DashboardPage;


// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import "../App.css";

// const DashboardPage = ({ user }) => {
//   const [name, setName] = useState(user?.name || "");
//   const [email, setEmail] = useState(user?.email || "");

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     console.log("Updated Name:", name);
//     console.log("Updated Email:", email);
//   };

//   return (
//     <>
//       {/* Header */}
//       <Header />

//       <div className="container-section">
       

//         <div className="container-content">
//           <h2 className="section-title">User Dashboard</h2>
//           <div className="profile-section">
//             <h3 className="section-title">Profile Information</h3>
//             <form onSubmit={handleUpdate} className="form">
//               <div className="form-group">
//                 <label htmlFor="name">Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="input-field"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="input-field"
//                 />
//               </div>

//               <button type="submit" className="btn">Update Info</button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default DashboardPage;
