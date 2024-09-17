import React from "react";
import { Outlet } from "react-router-dom";
import style from "./index.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EnergyLine from "../../components/EnergyLine";
import { HeroHighlight } from "../../components/HeroHidhtlight";

export const Layout = () => {
  return (
    <HeroHighlight>
      <div className={style.wrapper}>
        <EnergyLine />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </HeroHighlight>
  );
};
