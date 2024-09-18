import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.css";

const EnergyLine = () => {
  const [lineHeight, setLineHeight] = useState(100); // высота линии в процентах
  const [dotPosition, setDotPosition] = useState(0); // позиция точки
  const lineRef = useRef(null);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    console.log("docHeight", docHeight, windowHeight, scrollTop + windowHeight);

    // const totalScroll = docHeight - windowHeight;
    // const scrollPercentage = (scrollTop / totalScroll) * 100;

    setScrollPercentage((scrollTop / docHeight) * 100);
    console.log("scrollPercentage", scrollPercentage);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPercentage]);

  return (
    <div
      ref={lineRef}
      className={style.energyLine}
      style={{
        height: `${100 - lineHeight}vh`,
        opacity: `${scrollPercentage > 1 ? 1 : 0}`,
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
