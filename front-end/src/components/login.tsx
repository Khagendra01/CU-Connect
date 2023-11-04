import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInPrompt.css"; // Import the CSS file for styling

interface LoginInfo {
  username: string;
  password: string;
}

function SignInPrompt() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLoginInfoChange = (name: string, value: string) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSignIn = () => {
    handleNavigation("/mainPage")
  };

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="sign-in-prompt-container">
      <h1 className="sign-in-title">Sign In</h1>
      <p>Username</p>
      <input
        type="text"
        className="username-input"
        placeholder="Enter your username"
        name="username"
        value={loginInfo.username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleLoginInfoChange(e.target.name, e.target.value)}
      />
      <p>Password</p>
      <input
        type="password"
        className="username-input"
        placeholder="Enter your password"
        name="password"
        value={loginInfo.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleLoginInfoChange(e.target.name, e.target.value)}
      />

      <button onClick={handleSignIn} className="sign-in-button">
        Sign In
      </button>
      <br></br>
      <button className="register-button" onClick={() => handleNavigation("/register")}>Create a new account</button>
    </div>
  );
}

export default SignInPrompt;
