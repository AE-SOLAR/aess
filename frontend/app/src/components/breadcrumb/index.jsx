import React from "react";
import { useLocation } from "react-router-dom";

import style from "./style.module.css";

export const Breadcrumb = () => {
  const location = useLocation();
  console.log(location);
  const breadcrumb = location.pathname.split("/").slice(1);
  console.log(breadcrumb);
  return (
    <>
      {location.pathname !== "/" && (
        <div className={style.breadcrumb}>
          <a href="/">Home</a>
          {breadcrumb.map((e, idx) => {
            const link = breadcrumb.slice(0, idx + 1).join("/");
            return (
              <>
                <span>-</span>
                <a href={`/${link}`}>
                  {e.charAt(0).toUpperCase() + e.slice(1)}
                </a>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
