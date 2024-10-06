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
      <FaSearchengin size={"1.5rem"} className={style.icon} />
      <input
        type="text"
        placeholder="Search"
        className={style.input}
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
