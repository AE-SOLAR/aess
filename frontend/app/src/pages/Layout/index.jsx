import React from "react";
import { Outlet, Link } from "react-router-dom";
import style from "./index.module.css";
import Footer from "../../components/Footer/footer.jsx";
import Header from "../../components/Header/header.jsx";

export const Layout = () => {
  return (
    <div>
      <header className={`${style.header}`}>
        <Header />
        <div className={`${style.menu}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/admin">Protected Page</Link>
            </li>
          </ul>
        </div>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
};
