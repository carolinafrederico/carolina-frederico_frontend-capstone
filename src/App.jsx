import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import OpenDataPage from "./pages/OpenDataPage.jsx";
import CitizenJournalismPage from "./pages/CitizenJournalismPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

export default function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/articles" element={<ArticlesPage />}/>
        <Route path="/open-data" element={<OpenDataPage />}/>
        <Route path="/citizen-journalism" element={<CitizenJournalismPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </div>
  );
}
