import React from "react";
import style from "./index.module.css";

export const PanelsFilter = ({
  technologyNames,
  technologyFilter,
  setTechnologyFilter,
  seriesNames,
  seriesFilter,
  setSeriesFilter,
  panelColors,
  colorsFilter,
  setColorsFilter,
  panelDesigns,
  designsFilter,
  setDesignsFilter,
  frameColor,
  frameColorFilter,
  setFrameColorFilter,
  lowerPowerFilter,
  setLowerPowerFilter,
  highestPowerFilter,
  setHighestPowerFilter,
}) => {
  const handleTechnologyChange = ({ target }) => {
    setTechnologyFilter(
      target.checked
        ? [...new Set([...technologyFilter, target.value])]
        : technologyFilter.filter((e) => e !== target.value)
    );
  };

  const handleSeriesChange = ({ target }) => {
    setSeriesFilter(
      target.checked
        ? [...new Set([...seriesFilter, target.value])]
        : seriesFilter.filter((e) => e !== target.value)
    );
  };

  const handleColorsChange = ({ target }) => {
    setColorsFilter(
      target.checked
        ? [...new Set([...colorsFilter, target.value])]
        : colorsFilter.filter((e) => e !== target.value)
    );
  };

  const handleDesignsChange = ({ target }) => {
    setDesignsFilter(
      target.checked
        ? [...new Set([...designsFilter, target.value])]
        : designsFilter.filter((e) => e !== target.value)
    );
  };

  const handleFrameColorChange = ({ target }) => {
    setFrameColorFilter(
      target.checked
        ? [...new Set([...frameColorFilter, target.value])]
        : frameColorFilter.filter((e) => e !== target.value)
    );
  };

  const handleLowerPowerChange = ({ target }) => {
    setLowerPowerFilter(target.value);
  };

  const handleHighestPowerChange = ({ target }) => {
    setHighestPowerFilter(target.value);
  };

  const handleResetButtonClick = () => {
    setTechnologyFilter([]);
    setSeriesFilter([]);
    setColorsFilter([]);
    setDesignsFilter([]);
    setFrameColorFilter([]);
    setLowerPowerFilter("");
    setHighestPowerFilter("");
  };

  return (
    <div className={style.filterContainer}>
      <h2>Filter</h2>
      <hr className={style.hr} />

      <div className={style.filterSection}>
        <h3>Technology</h3>
        <ul>
          {technologyNames.map((e) => (
            <li key={e}>
              <input
                type="checkbox"
                checked={technologyFilter.includes(e)}
                onChange={handleTechnologyChange}
                id={e}
                value={e}
              />
              <label>{e}</label>
            </li>
          ))}
        </ul>
      </div>

      <hr className={style.hr} />

      <div className={style.filterSection}>
        <h3>Series Name</h3>
        <ul>
          {seriesNames.map((e) => (
            <li key={e}>
              <input
                type="checkbox"
                checked={seriesFilter.includes(e)}
                onChange={handleSeriesChange}
                value={e}
                id={e}
              />
              <label>{e}</label>
            </li>
          ))}
        </ul>
      </div>

      <hr className={style.hr} />

      <div className={style.filterSection}>
        <h3>Customize</h3>
        <div className={style.customizeOptions}>
          <div>
            <h4>Module Design</h4>
            <ul>
              {panelDesigns.map((e) => (
                <li key={e}>
                  <input
                    type="checkbox"
                    checked={designsFilter.includes(e)}
                    onChange={handleDesignsChange}
                    value={e}
                    id={e}
                  />
                  <label>{e}</label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Module Color</h4>
            <ul>
              {panelColors.map((e) => (
                <li key={e}>
                  <input
                    type="checkbox"
                    checked={colorsFilter.includes(e)}
                    onChange={handleColorsChange}
                    id={e}
                    value={e}
                  />
                  <label>{e}</label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Frame Color</h4>
            <ul>
              {frameColor.map((e) => (
                <li key={e}>
                  <input
                    type="checkbox"
                    checked={frameColorFilter.includes(e)}
                    onChange={handleFrameColorChange}
                    value={e}
                    id={e}
                  />
                  <label>{e}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className={style.hr} />

        <div className={style.powerRange}>
          <h4>Power Range</h4>
          <div className={style.powerRangeInputsFlex}>
            <div className={style.powerRangeInputDiv}>
              <input
                value={lowerPowerFilter}
                onChange={handleLowerPowerChange}
                className={style.powerRangeInput}
                placeholder={0}
              ></input>
              <span>from</span>
            </div>
            <div className={style.powerRangeInputDiv}>
              <input
                type="number"
                value={highestPowerFilter}
                onChange={handleHighestPowerChange}
                className={style.powerRangeInput}
                placeholder={60000}
              ></input>
              <span>up to</span>
            </div>
          </div>
        </div>
      </div>

      <button className={style.filterButton}>Filter Modules</button>
      <button onClick={handleResetButtonClick} className={style.resetButton}>
        Reset
      </button>
    </div>
  );
};
