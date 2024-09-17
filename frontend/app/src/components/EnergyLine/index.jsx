import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.css";

const EnergyLine = () => {
  const [lineHeight, setLineHeight] = useState(100); // высота линии в процентах
  const [dotPosition, setDotPosition] = useState(0); // позиция точки
  const lineRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight - 45;

    const totalScroll = docHeight - windowHeight;
    const scrollPercentage = (scrollTop / totalScroll) * 100;

    // Вычисляем новую высоту линии в зависимости от прокрутки
    const newHeight = 100 - scrollPercentage;
    setLineHeight(newHeight);

    // Перемещаем точку вниз по линии в зависимости от прокрутки
    setDotPosition(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={lineRef}
      className={style.energyLine}
      style={{
        height: `${100 - lineHeight}vh`,
      }}
    >
      <div
        className={style.energyDot}
        style={{ top: `${dotPosition}vh` }}
      ></div>
    </div>
  );
};

export default EnergyLine;
