import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, to, sub = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = sub.length > 0;

  return (
    <div
      className="relative inline-block z-40"
      onClick={hasSubItems ? () => setIsOpen((prev) => !prev) : () => {}}
      onMouseEnter={hasSubItems ? () => setIsOpen(true) : () => {}}
      onMouseLeave={hasSubItems ? () => setIsOpen(false) : () => {}}
    >
      <button
        className="inline-flex gap-1 justify-center items-center w-full px-4 py-2 text-sm font-medium "
        aria-expanded={isOpen}
      >
        {title || to || "Menu Item"}
        {hasSubItems && (
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29382 3.5C6.73927 3.5 6.96236 4.03857 6.64737 4.35355L4.85448 6.14645C4.65922 6.34171 4.34264 6.34171 4.14737 6.14645L2.35448 4.35355C2.0395 4.03857 2.26258 3.5 2.70803 3.5H6.29382Z"
              fill="white"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="flex flex-col absolute right-[50%] translate-x-[50%] w-100 min-w-[250px] gap-1 dark:bg-black p-2 m-0 rounded-2xl">
          {sub.map((item) => {
            return (
              item.title && (
                <Link
                  key={item.title}
                  to={item.to}
                  className="block text-sm text-center py-1 px-4 text-nowrap"
                >
                  {item.title}
                </Link>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
