import React, { useEffect, useState, useRef } from "react";
import "./CurvedLine.css";

const CurvedLine = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;
    }
  }, []);

  const lengthAtScroll = (scrollPercent / 100) * pathLength;
  const pointPosition = pathRef.current
    ? pathRef.current.getPointAtLength(lengthAtScroll)
    : { x: 0, y: 0 };

  return (
    <div className="curved-line">
      <svg
        height="100%"
        width="100"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="sparkGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 0, 0, 1)" />
            <stop offset="50%" stopColor="rgba(255, 0, 0, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 0, 0, 0.1)" />
          </radialGradient>
        </defs>

        <path
          ref={pathRef}
          id="curved-line-path"
          d="M50 0 C 70 50, 30 150, 50 200 C 70 250, 30 350, 50 400 C 70 450, 30 550, 50 600 C 70 650, 30 750, 50 800 C 70 850, 30 950, 50 1000"
          stroke="rgba(255, 0, 0, 0.5)"
          strokeWidth="2"
          fill="none"
          style={{
            strokeDashoffset: pathLength - lengthAtScroll,
            transition: "stroke-dashoffset 0.1s ease-out",
          }}
        />
        {scrollPercent > 0 && (
          <circle
            cx={pointPosition.x}
            cy={pointPosition.y}
            r="10"
            fill="url(#sparkGradient)"
            filter="url(#glow)"
            className="spark"
          />
        )}
      </svg>
    </div>
  );
};

export default CurvedLine;
