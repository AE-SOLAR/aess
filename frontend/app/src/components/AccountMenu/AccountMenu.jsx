import React, { useState } from "react";
import "./AccountMenu.css";

const AccountMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button className="account-button" onClick={toggleVisibility}>
        Account
      </button>
      {isVisible && (
        <div className="account-menu">
          <div className="login-box">
            <h2>Log in</h2>
            <input type="email" placeholder="E-mail" className="input-field" />
            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <button className="show-password">
                <img src="eye-icon.png" alt="Show Password" />
              </button>
            </div>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
            <button className="login-button">Log in</button>
          </div>
          <div className="register-box">
            <span>Don't have an account yet? Start your journey now.</span>
            <button className="register-button">Register now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountMenu;
