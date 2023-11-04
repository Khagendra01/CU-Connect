import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/navbar.css"; // Import the CSS file for styling

interface NavbarProps {
  // Define your props here if you have any
}

function Navbar(props: NavbarProps) {
  const navigate = useNavigate();

  const logOut = () => {

  }

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <button className="home-button" onClick={() => handleNavigation("/")}>
          Home
        </button>
        <div className="profile-icon">
          {/* You can place your profile icon or avatar here */}
          <img
            src="/img/profile.jpg"
            alt="Profile"
            onClick={() => handleNavigation("/profile")}
          />
        </div>
        <button onClick={() => logOut()}>Log out</button>
      </div>
    </>
  );
}

export default Navbar;
