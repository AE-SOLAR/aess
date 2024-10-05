import React from "react";
import { useLocation } from "react-router-dom";

import style from "./style.module.css";

const Breadcrumb = () => {
  const location = useLocation();
  const breadcrumb = location.pathname.split("/").slice(1);
  return (
    <>
      {location.pathname !== "/" && (
        <div className={style.breadcrumb}>
          <a href="/">Home</a>
          {breadcrumb.map((e, idx) => {
            const link = breadcrumb.slice(0, idx + 1).join("/");
            return (
              <div key={`${e}.${idx}`} className={style.elements}>
                <span>-</span>
                <a href={`/${link}`}>
                  {e.charAt(0).toUpperCase() + e.slice(1)}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Breadcrumb;
