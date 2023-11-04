import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./navbar";

import "../styles/MainPage.css"; // Import the CSS file for styling

function MainPage() {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="main-container">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="main-page">
        <h1 className="main-title">Hey User, Welcome to Our App</h1>
        <div className="button-container">
          <button onClick={() => handleNavigation("/")} className="big-button">
            Jobs
          </button>
          <button onClick={() => handleNavigation("/")} className="big-button">
            Communities
          </button>
          <button onClick={() => handleNavigation("/feedback")} className="big-button">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
