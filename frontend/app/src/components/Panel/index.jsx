import React from "react";
import style from "./index.module.css";
import { PanelFavIcon } from "../PanelFavIcon";
import { Link } from "react-router-dom";

export const Panel = ({ panel }) => {
  return (
    <div className={style.panelContainer}>
      <img
        className={style.panelImg}
        src={panel.image || "/static/panelImg.png"}
        alt="Panel"
      />
      <div className={style.panelTextContainer}>
        <div className={style.panelInfoId}>
          <span> {panel.model} </span>
          <div className={style.favoriteIcon}>
            <PanelFavIcon />
          </div>
        </div>
        <div className={style.panelInfoManufactur}>
          <span> Manufacturer: AESOLAR </span>
          <span> Color: {panel.module_color.name} </span>
        </div>
        <div className={style.panelInfoTechnology}>
          <div className="panelInfoTechnologyParams">
            <span> Power: </span>
            <span> Technology: </span>
            <span> Dimensions: </span>
          </div>
          <div className={style.panelInfoTechnologyValue}>
            <span> {panel.powerRange} </span>
            <span> {panel.cell_type.name} </span>
            <span>
              {panel.length} x {panel.width} x {panel.height} mm
            </span>
          </div>
        </div>
      </div>
      <button className={style.redButton}> Sign up for prices </button>
      <Link to={`/product/${panel.uuid}`} className={style.seeDetails}>
        See details
      </Link>
    </div>
  );
};
