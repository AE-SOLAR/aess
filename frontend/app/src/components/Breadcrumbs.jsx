import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumb = location.pathname.split("/").slice(1);
  return (
    <>
      {location.pathname !== "/" && (
        <div className="z-20 p-0 m-0 pl-4 font-light flex flex-wrap items-center justify-start gap-2 text-[0.8rem] list-none text-[var(--color-brand-gray)] dark:text-[var(--color-brand-light-gray)]">
          <Link to="/">Home</Link>
          {breadcrumb.map((e, idx) => {
            const link = breadcrumb.slice(0, idx + 1).join("/");
            return (
              <div
                key={`${e}.${idx}`}
                className="flex flex-nowrap gap-2 last:font-bold"
              >
                <span className="!font-light">-</span>
                <Link to={`/${link}`}>
                  {e.charAt(0).toUpperCase() + e.slice(1)}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
