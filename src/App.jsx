import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import OpenDataPage from "./pages/OpenDataPage.jsx";
import CitizenJournalismPage from "./pages/CitizenJournalismPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/open-data" element={<OpenDataPage />} />
        <Route path="/citizen-journalism" element={<CitizenJournalismPage />} />

        {/* Authentication Routes */}
        <Route path="/register" element={<RegisterPage setUser={setUser} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={<DashboardPage user={user} />} 
        />
      </Routes>
    </div>
  );
}
