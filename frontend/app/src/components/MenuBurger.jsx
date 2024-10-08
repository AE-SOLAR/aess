import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const MenuBurger = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (!children) {
    return null;
  }

  return (
    <section className="relative cursor-pointer flex md:hidden">
      <div
        className="z-20 space-y-2"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {!isNavOpen ? (
          <AiOutlineMenu size="1.5rem" />
        ) : (
          <AiOutlineClose size="1.5rem" />
        )}
      </div>

      <div
        className={`absolute rounded-2xl left-0 z-10 bg-black ${
          isNavOpen ? "flex" : "hidden"
        } p-8`}
      >
        <ul className="relative gap-4 flex flex-col items-center">
          {children?.map((child) => child)}
        </ul>
      </div>
    </section>
  );
};
