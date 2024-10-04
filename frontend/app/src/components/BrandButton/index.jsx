import React from "react";
import { useNavigate } from "react-router-dom";

import baseStyle from "./style.module.css";

const BrandButton = ({
  text,
  to,
  onClick,
  width = "100%",
  children,
  disabled = false,
  className = "",
  style = {},
}) => {
  const navigate = useNavigate();
  if (to) {
    onClick = () => {
      navigate(to);
    };
  }

  return (
    <div
      onClick={onClick}
      className={`${baseStyle.brandButton} ${
        disabled ? baseStyle.disabled : ""
      } ${className}`}
      style={{ ...style, width }}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          display: "inline-flex",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 14,
            fontFamily: "Criteria CF",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          {text || children}
        </span>
      </div>
    </div>
  );
};

export default BrandButton;
