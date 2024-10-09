import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios"; // For API calls
import Footer from "./Footer";
import "./ComponentsCss/SignUpStepOneCss.css";

const SignUpStepOne = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Add password if required for customer login
  const navigate = useNavigate(); 

  const handleContinueClick = async () => {
    try {
      // Make an API call to verify customer login
      const response = await axios.post(
        "https://untitled-twkmuar27a-uc.a.run.app/api/customer-list/",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        alert("Customer matched! Navigating to Dashboard...");
        navigate("/Dashboard"); // Navigate to Dashboard if successful
      } else {
        alert("Customer not matched! Please check your credentials.");
      }
    } catch (error) {
      console.error("Customer Login Error:", error);
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
            <h2>Enter your email address to continue</h2>
            <p>
              Log in to your account. If you don't have one, you will be
              prompted to create one.
            </p>
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
           
              <button className="continue-btn" onClick={handleContinueClick}>
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Third Row: Space */}
        <div className="third-row"></div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpStepOne;
