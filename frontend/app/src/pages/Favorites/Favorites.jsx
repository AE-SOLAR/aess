import React, { useEffect, useState } from "react";
import "./Favorites.css";

import { fertchUserFavarites } from "../../handlers/api";
import { PanelItem } from "../../components/PanelItem";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const favData = await fertchUserFavarites(null);
      setFavorites(favData);
    };

    fetchData();
  }, []);

  return (
    <div className="Favorites">
      <h1>Favorites</h1>
      {favorites.length === 0 && <p>No favorites yet</p>}

      <div classStyle="grip grip-template-colums">
        {favorites?.map((favorite, index) => (
          <PanelItem key={index} favorite={favorite} />
        ))}
      </div>
    </div>
  );
}
