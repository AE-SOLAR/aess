import React, { useEffect, useState } from "react";
import { ReactComponent as ScrollLineSVG } from "./scrollbar.svg";

const ScrollLine = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(scrolled);
  };

  const updateDocHeight = () => {
    setDocHeight(document.documentElement.scrollHeight);
  };

  useEffect(() => {
    updateDocHeight();
    window.addEventListener("resize", updateDocHeight);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateDocHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const path = document.querySelector("#scroll-line");
    if (path) {
      const totalLength = path.getTotalLength();
      const hiddenLength = 600;
      const visibleLength = totalLength + hiddenLength;

      path.style.strokeDasharray = visibleLength;
      path.style.strokeDashoffset =
        visibleLength * (1 - scrollPercent / 100) - hiddenLength;
    }
  }, [scrollPercent]);

  return (
    <div
      style={{
        position: "absolute",
        top: "-200px",
        left: 0,
        height: `${docHeight}px`,
        width: "100%",
        zIndex: -10,
      }}
    >
      <ScrollLineSVG
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default ScrollLine;
