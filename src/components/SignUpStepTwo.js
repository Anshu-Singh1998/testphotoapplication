import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios"; // For API calls
import Footer from "./Footer";
import "./ComponentsCss/SignUpStepTwoCss.css";

const SignUpStepTwo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async () => {
    try {
      // Make an API call to log in as an admin
      const response = await axios.post(
        "https://untitled-twkmuar27a-uc.a.run.app/api/login/",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/SignUpStepOne"); // Navigate to SignUpStepOne upon success
      } else {
        alert("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="container">
      <main className="main-content">
        {/* First Row: Logo */}
        <div className="first-row">
          <div className="logo">TEST</div>
        </div>

        {/* Second Row: Columns */}
        <div className="second-row">
          <div className="column column-one">
            <h2>Enter your email and password to continue</h2>
          </div>
          <div className="column column-two">
            <div className="form-container">
              <input
                type="email"
                placeholder="Email"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="password-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              <p className="password-hint">
                Use a minimum of 6 characters (case sensitive) with at least one
                number or special character.
              </p>
              <button className="continue-btn" onClick={handleLogin}>
               Agree & Continue
              </button>
            </div>
          </div>
        </div>

        {/* Third Row: Legal Disclaimer */}
        <div className="third-row">
          <p className="legal-disclaimer">
            Dingoo will use your data to personalise and improve your Dingoo
            experience and to send you information about Dingoo. You can change
            your communication preferences anytime. By clicking "Agree & Continue", 
            you agree to our Subscriber Agreement and acknowledge that you have read 
            our Privacy Policy and Collection Statement.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpStepTwo;
