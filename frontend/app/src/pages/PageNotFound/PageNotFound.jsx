import React from "react";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
    <div className="not-found-container">
    <div className="error-code">404</div>
    <div className="error-message">Oops! Page Not Found</div>
    <div className="error-description">
      It looks like the page you're looking for doesn't exist. This might be because:
      <ul>
        <li>The page has been moved or deleted.</li>
        <li>The URL was entered incorrectly.</li>
        <li>There's a broken link somewhere.</li>
      </ul>
    </div>
    <div className="button-container">
      <button onClick={() => window.location.href = '/'} className="button-red">Back to the home page</button>
      <button onClick={() => window.location.href = '/contact'} className="button-black">Contact us</button>
    </div>
  </div>
  )
};
