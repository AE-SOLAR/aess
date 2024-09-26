import React from "react";
import { useNavigate } from "react-router-dom";

export const BrandButton = ({
  text,
  to,
  onClick,
  width = "100%",
  children,
  disabled = false,
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
      style={{
        width: { width },
        height: "100%",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        background: disabled ? "rgba(246, 1, 9, 0.40)" : "#F60109",
        boxShadow: "0px 0px 14px rgba(246, 1, 9, 0.40) inset",
        borderRadius: 30,
        overflow: "hidden",
        border: "3px #F60109 solid",
        borderColor: disabled ? "rgba(246, 1, 9, 0.40)" : "#F60109",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
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
