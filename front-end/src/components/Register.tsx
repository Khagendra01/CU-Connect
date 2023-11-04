import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInPrompt.css"; // Import the CSS file for styling

interface RegisterInfo {
  firstname: string;
  lastname: string;
  emailaddress: string;
  password: string;
}

function RegisterPrompt() {
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegisterInfoChange = (name: string, value: string) => {
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleRegister = () => {
    // Your registration logic here
  };

  return (
    <div className="sign-in-prompt-container">
      <h1 className="sign-in-title">Sign In</h1>
      <p>Firstname</p>
      <input
        type="text"
        className="username-input"
        placeholder="Enter your FirstName"
        name="firstname"
        value={registerInfo.firstname}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleRegisterInfoChange(e.target.name, e.target.value)
        }
      />
      <p>Lastname</p>
      <input
        type="text"
        className="username-input"
        placeholder="Enter your LastName"
        name="lastname"
        value={registerInfo.lastname}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleRegisterInfoChange(e.target.name, e.target.value)
        }
      />
      <p>Email</p>
      <input
        type="text"
        className="username-input"
        placeholder="Enter your email"
        name="emailaddress"
        value={registerInfo.emailaddress}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleRegisterInfoChange(e.target.name, e.target.value)
        }
      />
      <p>Password</p>
      <input
        type="password"
        className="username-input"
        placeholder="Enter your password"
        name="password"
        value={registerInfo.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleRegisterInfoChange(e.target.name, e.target.value)
        }
      />

      <button onClick={handleRegister} className="sign-in-button">
        Register
      </button>
    </div>
  );
}

export default RegisterPrompt;
