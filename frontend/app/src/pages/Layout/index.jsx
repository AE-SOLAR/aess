import React from "react";
import { Outlet, Link } from "react-router-dom";
import style from "./index.module.css";
import Footer from "../../components/Footer/footer.jsx";
import Header from "../../components/Header/index.jsx";

export const Layout = () => {
  return (
    <div className={style.wrapper}>
      <header className={`${style.header}`}>
        <Header />
      </header>

      <Outlet />
      <Footer />
    </div>
  );
};
