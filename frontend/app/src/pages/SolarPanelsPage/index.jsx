import React, { useEffect } from "react";
import { useState } from "react";
import style from "./index.module.css";
import { PanelsFilter } from "../../components/PanelsFilter";
import { Panel } from "../../components/Panel";
import CircularProgress from "@mui/joy/CircularProgress";

const SolarPanelsPage = () => {
  const [panels, setPanels] = useState([]);

  const [onStock, setOnStock] = useState(false);

  const [technologyFilter, setTechnologyFilter] = useState([]);
  const [technologyNames, setTechnologyNames] = useState([]);

  const [seriesNames, setSeriesNames] = useState([]);
  const [seriesFilter, setSeriesFilter] = useState([]);

  const [panelColors, setPanelColors] = useState([]);
  const [colorsFilter, setColorsFilter] = useState([]);

  const [panelDesigns, setPanelDesigns] = useState([]);
  const [designsFilter, setDesignsFilter] = useState([]);

  const [frameColor, setFrameColor] = useState([]);
  const [frameColorFilter, setFrameColorFilter] = useState([]);

  const [lowerPowerFilter, setLowerPowerFilter] = useState();
  const [highestPowerFilter, setHighestPowerFilter] = useState();

  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        "https://devshop.ae-solar.com/api/v1/panels"
      );
      const data = await response.json();
      setPanels(data);
      const _techNames = data.map((e) => e.cell_type.name);
      const _serNames = data.map((e) => e.series.name);
      const _colorNames = data.map((e) => e.module_color.name);
      const _designNames = data.map((e) => e.module_design.name);
      const _frameColorNames = data.map((e) => e.frame_color.name);
      setTechnologyNames([...new Set(_techNames)]);
      setSeriesNames([...new Set(_serNames)]);
      setPanelColors([...new Set(_colorNames)]);
      setPanelDesigns([...new Set(_designNames)]);
      setFrameColor([...new Set(_frameColorNames)]);
    };
    request();
  }, []);

  console.log(panels);

  return (
    <div className={style.solarPanelsContainer}>
      <PanelsFilter
        {...{
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
        }}
      />
      <div className={style.solarPanelsCardsContainer}>
        {panels.length > 0 ? (
          panels
            .filter(
              (e) =>
                technologyFilter.includes(e.cell_type.name) ||
                technologyFilter.length == 0
            )
            .filter(
              (e) =>
                colorsFilter.includes(e.module_color.name) ||
                colorsFilter.length == 0
            )
            .filter(
              (e) =>
                designsFilter.includes(e.module_design.name) ||
                designsFilter.length == 0
            )
            .filter((e) => !onStock || e.onStock > 0)
            .filter(
              (e) =>
                !seriesFilter.length || seriesFilter.includes(e.series.name)
            )
            .filter(
              (e) =>
                frameColorFilter.includes(e.frame_color.name) ||
                frameColorFilter.length == 0
            )
            .filter(
              (e) =>
                lowerPowerFilter 
                  ? (parseInt(e.powerRange.split('-')[0], 10)) >= lowerPowerFilter
                  : true
            )
            .filter(
              (e) =>
                highestPowerFilter
                 ? (parseInt(e.powerRange.split('-')[1], 10)) <= highestPowerFilter
                 : true
            )
            .map((panel) => <Panel panel={panel} key={panel.uuid} />)
        ) : (
          <>
            <div></div>
            <div className={style.loader}>
              <CircularProgress color="danger" size="lg" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SolarPanelsPage;
