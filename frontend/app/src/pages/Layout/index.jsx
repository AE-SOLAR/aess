import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HeroHighlight } from "../../components/ui/HeroHidhtlight";
import CurvedLine from "../../components/ScrollBarLIne";
import { RedLine } from "../../components/ui/red-line";

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <HeroHighlight>
        <div className="mx-auto max-w-[1440px] w-[100vw] min-h-[100vh] flex flex-col relative overflow-hidden bg-transparent px-4">
          <RedLine />
          {location.pathname === "/" && <CurvedLine />}
          <Header />
          <div className="flex-grow flex flex-col">
            <Outlet />
          </div>
          <Footer />
        </div>
      </HeroHighlight>
    </>
  );
};

export default Layout;
