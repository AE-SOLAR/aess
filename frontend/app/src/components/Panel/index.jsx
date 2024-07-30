import React from 'react'
import style from "./index.module.css";

export const Panel = ({panel}) => {
  return <div className={style.panelContainer}>
        {/* <p> {panel.model} </p>
        <p> {panel.uuid} </p>
        <p> {panel.length} </p>
        <p> {panel.createdAt} </p>
        <p> {panel.cell_type.name} </p> */}
        <img className={style.panelImg} src={ panel.image || "/static/panelImg.png"} />
        <div className={style.panelTextContainer}>
            <div className={style.panelInfoId}>
                <p> {panel.model} </p>
            </div>
            <div className={style.panelInfoManufactur}>
                <p> Manufacturer: AESOLAR </p>
                <p> Type: </p>
            </div>
            <div className={style.panelInfoTechnology}>
                <div className="panelInfoTechnologyParams">
                    <p> Power:  </p>
                    <p> Technology:  </p>
                    <p> Dimensions: </p>
                </div>
                <div className={style.panelInfoTechnologyValue}>
                    <p> {panel.powerRange}  </p>
                    <p> {panel.cell_type.name} </p>
                    <p> {panel.length} x {panel.width} x {panel.height} mm </p>
                </div>
            </div>
        </div>
        <button className={style.redButton}> Sign up for prices </button>
        <button className={style.seeDetails} > See details </button>

        
    </div>
}