import { RedLine } from "./ui/red-line";

const HeaderHero = ({
  imageURL,
  children,
  onHeader = false,
  redLine = true,
  blurMenu = false,
}) => {
  return (
    <div className={redLine && "pb-4"}>
      {blurMenu && (
        <div className="absolute left-0 top-0 w-[1440px] h-[75px] backdrop-blur-[5px] z-20" />
      )}
      <div
        className={`relative z-10 overflow-y-visible ${
          onHeader === true
            ? "overflow-x-visible w-[calc(1440px - 1rem)]"
            : "overflow-x-hidden w-[100%]"
        } h-[443px] flex flex-col justify-center align-center text-white text-4xl font-bold `}
      >
        <img
          src={imageURL}
          alt="header_image"
          className={`z-10 absolute object-cover w-auto min-w-full !h-[518px] left-0 bottom-0 `}
        />
        <div className="relative z-20">{children}</div>
      </div>
      {redLine && <RedLine />}
    </div>
  );
};

export default HeaderHero;
