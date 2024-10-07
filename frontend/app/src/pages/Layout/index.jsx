import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HeroHighlight } from "../../components/ui/HeroHidhtlight";
import CurvedLine from "../../components/ScrollBarLIne";
import Breadcrumbs from "../../components/Breadcrumbs";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <HeroHighlight>
        <div className="mx-auto px-[40px] max-w-[1440px] w-[100vw] min-h-[100vh] flex flex-col gap-[20px] relative overflow-hidden bg-transparent">
          <CurvedLine />
          <Header />
          <div className="flex-grow flex flex-col px-4">
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
