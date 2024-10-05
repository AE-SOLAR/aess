import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

export const ThemeSwitcher = () => {
  const [dark, setDark] = useState(true);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div
      onClick={darkModeHandler}
      style={{
        cursor: "pointer",
      }}
    >
      {dark ? <FaSun size={"1.2rem"} /> : <FaMoon size={"1.2rem"} />}
    </div>
  );
};
