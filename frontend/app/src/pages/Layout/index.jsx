import React from "react";
import { Outlet, Link } from "react-router-dom";
import style from "./index.module.css";
import Footer2 from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";

export const Layout = () => {
  return (
    <div className={style.wrapper}>
      <header className={`${style.header}`}>
        <Header />
      </header>

      <Outlet />
      <Footer2 />
    </div>
  );
};
