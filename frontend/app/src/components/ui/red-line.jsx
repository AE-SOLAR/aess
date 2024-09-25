import React from "react";

export const RedLine = ({ width = "100%" }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "2px",
        background:
          "linear-gradient(90deg, rgba(246, 1, 9, .1) 0%, rgba(246, 1, 9, .4) 25%, rgba(246, 1, 9, 1) 40%, rgba(246, 1, 9, 1) 60%, rgba(246, 1, 9, .4) 75%, rgba(246, 1, 9, .1) 100%)",
        boxShadow:
          "0 10px 20px rgba(246, 1, 9, 0.7), 0 0 40px rgba(246, 1, 9, 0.7), 0 0 60px rgba(246, 1, 9, 0.7)",
        borderRadius: "5px",
        margin: "0 auto",
        padding: "0",
      }}
    ></div>
  );
};
