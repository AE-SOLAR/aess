import React, { useState } from "react";
import { FaFacebook, FaMicrosoft, FaInstagram } from "react-icons/fa";

import styles from "./styles.module.css";
import { BrandInput } from "../../components/Input";
import BrandButton from "../../components/BrandButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика для обработки формы
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleMicrosoftLogin = () => {
    // Логика для входа через Microsoft
    console.log("Вход через Microsoft");
  };

  const handleFacebookLogin = () => {
    // Логика для входа через Facebook
    console.log("Вход через Facebook");
  };

  const handleInstagramLogin = () => {
    // Логика для входа через Instagram
    console.log("Вход через Instagram");
  };

  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <BrandInput id="email" value={email} setValue={setEmail}>
          Email:
        </BrandInput>
        <BrandInput
          id="password"
          value={password}
          setValue={setPassword}
          type="password"
        >
          Password:
        </BrandInput>
        <BrandButton type="submit">Login</BrandButton>
      </form>

      <div className={styles.socialLogin}>
        <div className={styles.socialButtons}>
          <button
            onClick={handleMicrosoftLogin}
            className={`${styles.socialBtn} ${styles.microsoft}`}
          >
            <FaMicrosoft />
          </button>
          <button
            onClick={handleFacebookLogin}
            className={`${styles.socialBtn} ${styles.facebook}`}
          >
            <FaFacebook />
          </button>
          <button
            onClick={handleInstagramLogin}
            className={`${styles.socialBtn} ${styles.instagram}`}
          >
            <FaInstagram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
