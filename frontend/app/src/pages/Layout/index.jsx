import React from "react";
import { Outlet } from "react-router-dom";
import style from "./index.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HeroHighlight } from "../../components/ui/HeroHidhtlight";
import CurvedLine from "../../components/ScrollBarLIne";
import Breadcrumbs from "../../components/Breadcrumbs";

const Layout = () => {
  return (
    <div className={style.layoutContainer}>
      <HeroHighlight>
        <div className={style.wrapper}>
          <CurvedLine />
          <Header />
          <div className={style.outletContainer}>
            <Breadcrumbs />
            <Outlet />
          </div>
          <Footer />
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Layout;
