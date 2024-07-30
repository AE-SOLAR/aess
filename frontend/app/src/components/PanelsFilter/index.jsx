import React from 'react'
import style from "./index.module.css";

export const PanelsFilter = (props) => {
    return (
        <div className={style.filterContainer}>
            <h2>Filter</h2>
            <hr className={style.hr} />

            <div className={style.filterSection}>
                <h3>Technology</h3>
                <ul>
                    <li><input type="checkbox" id={style.perc} /><label htmlFor="perc">PERC Technology</label></li>
                    <li><input type="checkbox" id={style.hjt} /><label htmlFor="hjt">HJT Technology</label></li>
                    <li><input type="checkbox" id={style.topcon} /><label htmlFor="topcon">TOPCon Technology</label></li>
                    <li><input type="checkbox" id={style.windSnow} /><label htmlFor="windSnow">Wind/Snow Resistant Technology</label></li>
                    <li><input type="checkbox" id={style.pvThermal} /><label htmlFor="pvThermal">PV-Thermal Technology</label></li>
                    <li><input type="checkbox" id={style.shedeResident} /><label htmlFor="shedeResident">Shede Resident Technology</label></li>
                </ul>
            </div>

            <hr className={style.hr} />

            <div className={style.filterSection}>
                <h3>Technical Name</h3>
                <ul>
                    <li><input type="checkbox" id={style.aurora} /><label htmlFor="aurora">Aurora</label></li>
                    <li><input type="checkbox" id={style.meteor} /><label htmlFor="meteor">Meteor</label></li>
                    <li><input type="checkbox" id={style.comet} /><label htmlFor="comet">Comet</label></li>
                    <li><input type="checkbox" id={style.terra} /><label htmlFor="terra">Terra</label></li>
                    <li><input type="checkbox" id={style.shadesta} /><label htmlFor="shadestar">Shadestar</label></li>
                    <li><input type="checkbox" id={style.neptune} /><label htmlFor="neptune">Neptune</label></li>
                </ul>
            </div>

            <hr className={style.hr} />

            <div className={style.filterSection}>
                <h3>Customize</h3>
                <div className={style.customizeOptions}>
                    <div>
                        <h4>Module Design</h4>
                        <ul>
                            <li><input type="checkbox" id={style.monoFacial} /><label htmlFor="monoFacial">Mono-Facial</label></li>
                            <li><input type="checkbox" id={style.bifacial} /><label htmlFor="bifacial">Bifacial</label></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Module Color</h4>
                        <ul>
                            <li><input type="radio" name="moduleColor" id={style.transparent} /><label htmlFor="transparent">Transparent</label></li>
                            <li><input type="radio" name="moduleColor" id={style.black} /><label htmlFor="black">Black</label></li>
                            <li><input type="radio" name="moduleColor" id={style.white} /><label htmlFor="white">White</label></li>
                        </ul>
                    </div>

                    <div>
                        Frame Color
                        <ul>
                            <li><input type="radio" name="frameColor" id={style.blackFrame} /><label htmlFor="blackFrame">Black</label></li>
                            <li><input type="radio" name="frameColor" id={style.silverFrame} /><label htmlFor="silverFrame">Silver</label></li>
                        </ul>
                    </div>
                </div>

                <div className={style.powerRange}>
                    <h4>Power Range</h4>
                    <input type="range" min="0" max="60000" />
                </div>
            </div>

            <button className={style.filterButton}>Filter Modules</button>
            <button className={style.resetButton}>Reset</button>
        </div>
    )
}
