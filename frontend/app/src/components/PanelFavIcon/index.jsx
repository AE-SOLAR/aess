import React from "react";
import style from "./index.module.css";
import { useState } from "react";

export const PanelFavIcon = () => { // TODO: передать id panel в этот компонент, ???, profit
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const heartImage = isFavorite
    ? "/static/heartSVG/heartTrue.svg"
    : "/static/heartSVG/heartFalse.svg";

  return (
    <div>
      <button
        onClick={toggleFavorite}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <img className={style.imgSize} src={heartImage} alt="Favorite Icon" />
      </button>
    </div>
  );
};
