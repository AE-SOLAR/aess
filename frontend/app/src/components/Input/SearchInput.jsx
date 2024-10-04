import React, { useState } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false); // Добавляем состояние фокуса

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
      <FontAwesomeIcon icon={faSearch} className={style.icon} />
      <input
        type="text"
        placeholder="Search"
        className={style.input}
        value={searchValue}
        onChange={handlerChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {searchValue.length > 0 && (
        <button className={style.button}>Search</button>
      )}
    </div>
  );
};

export default SearchInput;
