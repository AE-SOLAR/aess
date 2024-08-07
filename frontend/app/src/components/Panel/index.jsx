import React from "react";
import style from "./index.module.css";
import { PanelFavIcon } from "../PanelFavIcon";
import { Link } from 'react-router-dom';


export const Panel = ({ panel }) => {
  return (
    <div className={style.panelContainer}>
      <img
        className={style.panelImg}
        src={panel.image || "/static/panelImg.png"}
      />
      <div className={style.panelTextContainer}>
        <div className={style.panelInfoId}>
          <p> {panel.model} </p>
          <div className={style.favoriteIcon}>
            <PanelFavIcon />
          </div>
        </div>
        <div className={style.panelInfoManufactur}>
          <p> Manufacturer: AESOLAR </p>
          <p> Color: {panel.module_color.name} </p>
        </div>
        <div className={style.panelInfoTechnology}>
          <div className="panelInfoTechnologyParams">
            <p> Power: </p>
            <p> Technology: </p>
            <p> Dimensions: </p>
          </div>
          <div className={style.panelInfoTechnologyValue}>
            <p> {panel.powerRange} </p>
            <p> {panel.cell_type.name} </p>
            <p>
              {panel.length} x {panel.width} x {panel.height} mm
            </p>
          </div>
        </div>
      </div>
      <button className={style.redButton}> Sign up for prices </button>
      <Link to={`/product/${panel.uuid}`} className={style.seeDetails}> See details </Link>
    </div>
  );
};
