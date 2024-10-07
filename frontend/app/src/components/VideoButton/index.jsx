import React, { useRef } from "react";

const BackgroundVideo = ({ videoSrc, children }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop={false}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default BackgroundVideo;
