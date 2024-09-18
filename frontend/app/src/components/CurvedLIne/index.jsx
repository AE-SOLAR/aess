import React, { useEffect, useState, useRef } from "react";
import "./CurvedLine.css";

const CurvedLine = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef(null);

  // Функция для отслеживания прокрутки страницы
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Рассчитываем процент прокрутки страницы
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    // Подписываемся на событие прокрутки
    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      // Получаем общую длину пути
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      // Устанавливаем начальные значения для анимации линии
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;
    }
  }, []);

  // Вычисляем текущее положение точки на линии
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
        {/* Определение фильтров и градиентов */}
        <defs>
          {/* Фильтр для свечения */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Радиальный градиент для искры с ярко-красным центром */}
          <radialGradient id="sparkGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 0, 0, 1)" />
            <stop offset="50%" stopColor="rgba(255, 0, 0, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 0, 0, 0)" />
          </radialGradient>
        </defs>

        {/* Линия */}
        <path
          ref={pathRef}
          id="curved-line-path"
          d="M50 0 C 70 50, 30 150, 50 200 C 70 250, 30 350, 50 400 C 70 450, 30 550, 50 600 C 70 650, 30 750, 50 800 C 70 850, 30 950, 50 1000"
          stroke="rgba(255, 0, 0, 0.5)" // Полупрозрачный красный цвет
          strokeWidth="2"
          fill="none"
          style={{
            strokeDashoffset: pathLength - lengthAtScroll,
            transition: "stroke-dashoffset 0.1s ease-out",
          }}
        />
        {/* Искра */}
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
