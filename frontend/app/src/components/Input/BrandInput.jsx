import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const BrandInput = ({
  id,
  width = "466px",
  height = "50px",
  children = "",
  value,
  setValue,
  autocomplete = "new-password",
  className = "",
  style = {},
  type = "text",
}) => {
  const isPassword = type.toLowerCase() === "password";
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        position: "relative",
      }}
    >
      {type.toLowerCase() === "file" && (
        <label
          style={{
            width: width,
            height: height,
            position: "absolute",
            left: "50px",
            top: "25%",

            zIndex: "100",
          }}
        >
          {children}
        </label>
      )}
      <input
        id={
          id ||
          Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
        }
        type={isPassword ? (isPasswordVisible ? "text" : "password") : type}
        autoComplete={autocomplete}
        multiple={type.toLowerCase() === "file"}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.zip"
        style={{
          width: width,
          height: height,
          left: 0,
          top: 0,
          position: "absolute",
          paddingLeft: "30px",
          paddingRight: "30px",
          borderRadius: "30px",
          color: type.toLowerCase() === "file" ? "transparent" : "white",
          fontSize: "1rem",
          outline: "none",
          placeContent: "center",
          backgroundColor: "rgba(30, 30, 30, 1)",
          transition: "all .5s",
          ...style,
        }}
        className={`placeholder-gray placeholder:text-sm ${className}`}
        placeholder={children}
        value={value}
        onChange={handleChange}
      />
      {isPassword && (
        <div
          style={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
            width: "1rem",
            height: "1rem",
            cursor: "pointer",
          }}
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </div>
      )}
    </div>
  );
};

export default BrandInput;
