import React, { useEffect } from "react";
import { useState } from "react";
import style from "./index.module.css";
import { PanelsFilter } from "../../components/PanelsFilter";
import { Panel } from "../../components/Panel";
import CircularProgress from '@mui/joy/CircularProgress';

const SolarPanelsPage = () => {
    const [panels, setPanels] = useState([]);

    const [onStock, setOnStock] = useState(false);

    const [seriesFilter, setSeriesFilter] = useState([]);

    useEffect(() => {
        const request = async () => {
            const response = await fetch("https://devshop.ae-solar.com/api/v1/panels");
            setPanels(await response.json());
        }
        request();
    }, []);

    console.log(panels);

    return (
        <div className={style.solarPanelsContainer}>
            <PanelsFilter />
            <div className={style.solarPanelsCardsContainer}>                
                {panels.length > 0 ? panels
                    .filter(e => !onStock || e.onStock > 0)
                    .filter(e => (!seriesFilter.length || seriesFilter.includes(e.series.name)))
                    .map(panel => <Panel panel={panel} key={panel.uuid} />) : <> <div></div> <div className={style.loader}> <CircularProgress color="danger" size="lg" /> </div> </>}
            </div>
        </div>
    )
}

export default SolarPanelsPage;