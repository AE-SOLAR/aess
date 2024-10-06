import React, { useEffect, useState, useCallback } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

const THEME_KEY = "themeMode";

export const ThemeSwitcher = () => {
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.body;
    if (themeMode === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem(THEME_KEY, themeMode);
  }, [themeMode]);

  const toggleTheme = useCallback(() => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  }, []);

  return (
    <button
      onClick={toggleTheme}
      style={{
        cursor: "pointer",
        background: "none",
        border: "none",
        padding: 0,
      }}
      aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"}`}
    >
      {themeMode === "light" ? (
        <FaSun size="1.2rem" />
      ) : (
        <FaMoon size="1.2rem" />
      )}
    </button>
  );
};
