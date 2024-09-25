import React from "react";
import { Outlet } from "react-router-dom";
import style from "./index.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HeroHighlight } from "../../components/ui/HeroHidhtlight";
import CurvedLine from "../../components/CurvedLIne";

export const Layout = () => {
  return (
    <HeroHighlight>
      <CurvedLine />
      <div className={style.wrapper}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </HeroHighlight>
  );
};
