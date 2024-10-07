import React, { useEffect } from "react";
import { useState } from "react";
import { PanelsFilter } from "../../components/PanelsFilter";
import { PanelItem, PanelItemSkeleton } from "../../components/PanelItem";
import { fetchPanels } from "../../handlers/api";

const SolarPanelsPage = () => {
  const [panels, setPanels] = useState([]);

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
      const data = await fetchPanels();
      setPanels(data);
      const _techNames = data.map((e) => e.cell_type);
      const _serNames = data.map((e) => e.series);
      const _colorNames = data.map((e) => e.module_color);
      const _designNames = data.map((e) => e.design);
      const _frameColorNames = data.map((e) => e.frame_color);
      setTechnologyNames([...new Set(_techNames)]);
      setSeriesNames([...new Set(_serNames)]);
      setPanelColors([...new Set(_colorNames)]);
      setPanelDesigns([...new Set(_designNames)]);
      setFrameColor([...new Set(_frameColorNames)]);
    };
    request();
  }, []);

  return (
    <div className="w-full h-max flex flex-col justify-center align-top relative">
      <div
        className="w-[1440px] h-[518px] relative top-[-176px] left-[-55px] z-[-1] flex flex-col justify-center align-center text-white text-4xl font-bold pt-[100px]"
        style={{
          backgroundImage: "url('/static/images/panels/panel-flower.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span>Time To Choose</span>
        <span className="text-red-600">Your Solar Module</span>
      </div>
      <div className="relative top-[-176px] flex justify-center items-start">
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
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] px-[10px] text-center gap-[5px] w-full">
          {panels.length > 0 ? (
            panels
              .filter(
                (e) =>
                  technologyFilter.includes(e.cell_type) ||
                  technologyFilter.length === 0
              )
              .filter(
                (e) =>
                  colorsFilter.includes(e.module_color) ||
                  colorsFilter.length === 0
              )
              .filter(
                (e) =>
                  designsFilter.includes(e.design) || designsFilter.length === 0
              )
              .filter(
                (e) => !seriesFilter.length || seriesFilter.includes(e.series)
              )
              .filter(
                (e) =>
                  frameColorFilter.includes(e.frame_color) ||
                  frameColorFilter.length === 0
              )
              .filter((e) =>
                lowerPowerFilter
                  ? parseInt(e.powerRange.split("-")[0], 10) >= lowerPowerFilter
                  : true
              )
              .filter((e) =>
                highestPowerFilter
                  ? parseInt(e.powerRange.split("-")[1], 10) <=
                    highestPowerFilter
                  : true
              )
              // .map((panel) => <Panel panel={panel} key={panel.uuid} />)
              .map((panel) => <PanelItem product={panel} key={panel.id} />)
          ) : (
            <>
              <PanelItemSkeleton />
              <PanelItemSkeleton />
              <PanelItemSkeleton />
              <PanelItemSkeleton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarPanelsPage;
