// 518 - 75 = 443

const HeaderHero = ({ imageURL, children, onHeader = false }) => {
  return (
    <div
      className={`relative z-10 ${
        onHeader === true
          ? "overflow-x-visible w-[calc(1440px - 1rem)]"
          : "overflow-x-hidden w-[100%]"
      } h-[443px] flex flex-col justify-center align-center text-white text-4xl font-bold `}
    >
      <img
        src={imageURL}
        alt="header_image"
        className={`z-10 absolute object-cover inset-0 h-full w-auto min-w-full min-h-full ${
          onHeader === true ? `h-[518px] top-[-75px] left-0` : `h-[443px]`
        }`}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default HeaderHero;
