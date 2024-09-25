import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div onClick={darkModeHandler}>
      {dark ? (
        <FontAwesomeIcon icon="fa-solid fa-sun" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-moon" />
      )}
    </div>
  );
};
