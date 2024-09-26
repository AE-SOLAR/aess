import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const InputField = ({
  id,
  width = "466px",
  height = "50px",
  children = "",
  value,
  setValue,
  password = false,
  autocomplete = "new-password",
  className = "",
  style = {},
}) => {
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
      <input
        id={
          id ||
          Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
        }
        type={!password || isPasswordVisible ? "text" : "password"}
        autoComplete={autocomplete}
        style={{
          width: width,
          height: height,
          left: 0,
          top: 0,
          position: "absolute",
          paddingLeft: "30px",
          paddingRight: "30px",
          borderRadius: "30px",
          color: "white",
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
      {password && (
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
