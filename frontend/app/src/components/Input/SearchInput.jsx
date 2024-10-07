import React, { useState } from "react";
import style from "./style.module.css";
import { FaSearchengin } from "react-icons/fa6";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handlerChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (searchValue.length === 0) {
      setIsFocused(false);
    }
  };

  return (
    <div
      className={`${style.searchContainer} ${isFocused ? style.active : ""}`}
    >
      <FaSearchengin
        size={"1.5rem"}
        className="absolute left-2 text-[1.5rem] transition-[left,opacity] duration-400 ease-in-out text-brand-dark-gray dark:text-[--color-brand-white-text] text-[--color-brand-dark-gray]"
      />
      <input
        type="text"
        placeholder="Search"
        className={`${style.input} w-0 h-full pl-[2.5rem] bg-transparent outline-none border border-brand-light-gray rounded-[20px] transition-[width,opacity,padding] duration-400 ease-in-out opacity-0 text-[--color-brand-dark-gray] dark:text-[--color-brand-white-text]`}
        value={searchValue}
        onChange={handlerChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {/* {searchValue.length > 0 && (
        <button className={style.button}>Search</button>
      )} */}
    </div>
  );
};

export default SearchInput;
