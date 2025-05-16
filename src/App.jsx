import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import OpenDataPage from "./pages/OpenDataPage.jsx";
import CitizenJournalismPage from "./pages/CitizenJournalismPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ArticlesEditPage from "./pages/ArticlesEditPage.jsx";
import ApiArticles from "./components/ApiArticles.jsx";
import Header from "./components/Header.jsx";
import ArticlesShowPage from "./pages/ArticlesShowPage.jsx";
import Content from "./components/Content.jsx";


export default function App() {
  const [user, setUser] = useState(null);

  // Fetch user session on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/auth/user", {
          credentials: "include",
        });
        const data = await response.json();
        setUser(data.user || null);
      } catch (err) {
        console.error("Error fetching user session:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticlesPage user={user} />} />
        <Route path="/open-data" element={<OpenDataPage />} />
        <Route path="/citizen-journalism" element={<CitizenJournalismPage />} />
        <Route path="/api-articles" element={<ApiArticles />} />
        <Route path="/articles/:id" element={<ArticlesShowPage />} />
        <Route path="/articles/edit/:id" element={<ArticlesEditPage />} />
        <Route path="/content" element={<Content />} />
        
        {/* Auth Routes */}
        {user ? (
          <>
            <Route path="/dashboard" element={<DashboardPage user={user} />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<RegisterPage setUser={setUser} />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
          </>
        )}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}


// import "./App.css";
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage.jsx";
// import ArticlesPage from "./pages/ArticlesPage.jsx";
// import OpenDataPage from "./pages/OpenDataPage.jsx";
// import CitizenJournalismPage from "./pages/CitizenJournalismPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import RegisterPage from "./pages/RegisterPage.jsx";
// import DashboardPage from "./pages/DashboardPage.jsx";
// import ArticlesEditPage from "./pages/ArticlesEditPage.jsx";
// import ApiArticles from "./components/ApiArticles.jsx";

// import Header from "./components/Header.jsx";
// import ArticlesShowPage from "./pages/ArticlesShowPage.jsx";
// import HomePage from "./pages/Homepage.jsx";

// export default function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <div className="App">
//       <Header user={user} setUser={setUser} />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Homepage />} />
//         <Route path="/articles" element={<ArticlesPage user={user} />} />
//         <Route path="/open-data" element={<OpenDataPage />} />
//         <Route path="/citizen-journalism" element={<CitizenJournalismPage />} />
//         <Route path="/api-articles" element={<ApiArticles />} /> 
//         <Route path="/articles/:id" element={<ArticlesShowPage />} />
//         <Route path="/articles/edit/:id" element={<ArticlesEditPage />} />

//         {/* Conditional Routes for Logged-In Users */}
//         {user ? (
//           <>
//             <Route path="/dashboard" element={<DashboardPage user={user} />} />
//           </>
//         ) : (
//           <>
//             <Route path="/register" element={<RegisterPage setUser={setUser} />} />
//             <Route path="/login" element={<LoginPage setUser={setUser} />} />
//           </>
//         )}
//         <Route path="*" element={<HomePage/>}/>
//       </Routes>
//     </div>
//   );
// }

