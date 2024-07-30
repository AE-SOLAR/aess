import React from "react";
import style from "./index.module.css";

const PageNotFound = () => {
  return (
    <div className={style["not-found-container"]}>
    <div className={style["error-code"]}>404</div>
    <div className={style["error-message"]}>Oops! Page Not Found</div>
    <div className={style["error-description"]}>
      It looks like the page you're looking for doesn't exist. This might be because:
      <ul>
        <li>The page has been moved or deleted.</li>
        <li>The URL was entered incorrectly.</li>
        <li>There's a broken link somewhere.</li>
      </ul>
    </div>
    <div className={style["button-container"]}>
      <button onClick={() => window.location.href = '/'} className={style["button-red"]}>Back to the home page</button>
      <button onClick={() => window.location.href = '/contact'} className={style["button-black"]}>Contact us</button>
    </div>
  </div>
  )
};

export default PageNotFound;