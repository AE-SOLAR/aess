import React from "react";
import { Outlet } from "react-router-dom";
import style from "./index.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HeroHighlight } from "../../components/ui/HeroHidhtlight";
import CurvedLine from "../../components/CurvedLIne";
import Breadcrumb from "../../components/Breadcrumb";

const Layout = () => {
  return (
    <div className={style.layoutContainer}>
      <HeroHighlight>
        <CurvedLine />
        <div className={style.wrapper}>
          <Header />
          <div className={style.outletContainer}>
            <Breadcrumb />
            <Outlet />
          </div>
          <Footer />
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Layout;
