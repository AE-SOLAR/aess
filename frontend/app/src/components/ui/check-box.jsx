import React, { useState } from "react";

export const CheckBox = ({
  isChecked = false,
  setIsChecked = () => {},
  children,
  style = {},
  className = "",
}) => {
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      style={{
        position: "relative",
        selfStretch: "justify-start",
        itemsCenter: "gap-2",
        display: "inline-flex",
        alignItems: "center",
        transition: "all .5s",
        ...style,
      }}
      className={className}
    >
      <div className="w-5 h-5 relative cursor-pointer" onClick={toggleCheckbox}>
        <div className="w-5 h-5 left-0 top-0 absolute rounded-[5px] border border-[#f60109] flex items-center justify-center">
          {isChecked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-[#f60109]"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
          )}
        </div>
      </div>
      <div className="pl-2">{children}</div>
    </div>
  );
};
