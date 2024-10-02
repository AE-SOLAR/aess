import React from "react";

export const LoadingBlocker = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: "100",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="scaling"
        style={{
          width: "200px",
        }}
        src="/static/images/logos/aesolar.svg"
        alt="logo"
      />
      <span
        style={{
          fontSize: "1.5rem",
        }}
      >
        Loading...
      </span>
    </div>
  );
};
