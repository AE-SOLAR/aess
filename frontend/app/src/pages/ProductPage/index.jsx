import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./index.module.css";
import { PanelFavIcon } from "../../components/PanelFavIcon";

export const ProductPage = () => {
  const { uuid } = useParams();

  const [panels, setPanels] = useState([]);
  const [panelInfo, setPanelInfo] = useState([]);

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    const request = async () => {
      // TODO: нужно запросить конкретную модель с бека (см. доку в телеге)
      const response = await fetch(
        `https://devshop.ae-solar.com/api/v1/panels`
      );
      const data = await response.json();
      setPanels(data);
    };
    request();
  }, []);

  useEffect(() => {
    setPanelInfo(panels.find((panel) => panel.uuid === uuid));
  }, [panels, uuid]);

  console.log(panelInfo);
  // console.log(panelInfo.powerRange, typeof(panelInfo.powerRange));

  return (
    <div className={style.productPageContainer}>
      <div className={style.imgAndMainInfoContainer}>
        <img
          className={style.panelImage}
          src={"/static/panelImg.png"}
          alt="Panel"
        />
        <div className={style.mainInfoContainer}>
          <div className={style.mainInfoTitleAndFavIcon}>
            <h2> Solar panel AZ3y48273847432 </h2>
            <PanelFavIcon />
          </div>
          <div className={style.mainInfoParamsList}>
            <p>Manufacturer: AESOLAR</p>
            <p>Power: {panelInfo?.powerRange} </p>
            <p>Technology: {panelInfo?.cell_type?.name}</p>
            <p>
              Dimensions: {panelInfo?.length} x {panelInfo?.width} x{" "}
              {panelInfo?.height} mm
            </p>
            <p>WEEE Reg. Nr.:</p>
            <p>Units per PU:</p>
          </div>
          <div className={style.mainInfoPriceContainer}>
            <p>Price:</p>
            <p className={style.price}>550€</p>
          </div>
          <p className={style.mainInfoPriceDesciption}>
            The price shown includes the 3 % early payment discount. Compulsory
            value-added tax (VAT) is NOT shown in the price and WILL BE ADDED.
            Excluded are intra-community deliveries (EU) and export deliveries
            (non EU). Additional shipping costs may apply.
          </p>
        </div>
      </div>
      <div className={style.detailInfoChangeButtons}>
        {/* TODO: https://mui.com/material-ui/react-tabs/ - добавить tabs + посмотреть на компоненты из material.ui */}
        <button
          className={`${style.detailInfoButton} ${
            activeButton === "product" ? style.active : ""
          }`}
          onClick={() => handleButtonClick("product")}
        >
          Product info
        </button>
        <button
          className={`${style.detailInfoButton} ${
            activeButton === "documentations" ? style.active : ""
          }`}
          onClick={() => handleButtonClick("documentations")}
        >
          Documentations
        </button>
      </div>
      <div className={style.detailInfoContainer}>
        <h3>Solar panel</h3>
        {/* <p> {panelInfo.powerRange} </p> */}
        <p className={style.detailInfoDescription}>
          JinkoSolar is a Chinese company founded in Shanghai in 2006. The solar
          module in the 405 Watt version belongs to the Tiger product line, is
          monofacial / P-type, and based on the multi-busbar technology.  In
          addition to the high efficiency rate of 20.74 % and high resistance to
          extreme weather conditions, the module is ideally suited for limited
          exposure to diffuse sunlight. The new Tiger Pro series is also highly
          resistant to salt and ammonia, making it perfect for roof
          installations in areas with extreme weather conditions.
        </p>
        <div className={style.detailInfoParamsList}>
          <p>Power: </p>
          <p>Technology: </p>
          <p>Dimensions: </p>
          <p>Frame color: </p>
          <p>Backsheet: </p>
        </div>
        <h4>Product advantages</h4>
        <ul className={style.detailInfoUl}>
          <li className={style.detailInfoLi}>60 TR cells</li>
          <li className={style.detailInfoLi}>Mono-facial N-type module</li>
          <li className={style.detailInfoLi}>
            0/+3 % positive power tolerance
          </li>
          <li className={style.detailInfoLi}>Optimal low-light performance</li>
          <li className={style.detailInfoLi}>15 years product warranty</li>
          <li className={style.detailInfoLi}>30 years linear power warranty</li>
        </ul>
        <h4>Product features</h4>
        <ul className={style.detailInfoUl}>
          <li className={style.detailInfoLi}>Power: 375 Watt</li>
          <li className={style.detailInfoLi}>1500 V IEC certified</li>
          <li className={style.detailInfoLi}>Protection category: IP68</li>
          <li className={style.detailInfoLi}>Frame color: Black</li>
          <li className={style.detailInfoLi}>White backsheet</li>
          <li className={style.detailInfoLi}>
            Dimensions:1692 x 1029 x 30 mm (H x W x D)
          </li>
          <li className={style.detailInfoLi}>Weight: 19.0 kg</li>
          <li className={style.detailInfoLi}>Cable length: 1.20 m</li>
          <li className={style.detailInfoLi}>Connector type: MC4</li>
          <li className={style.detailInfoLi}>
            5400 Pa snow load / 2400 Pa wind load
          </li>
          <li className={style.detailInfoLi}>
            Power temperature coefficient: -0.29% /°C
          </li>
        </ul>
        <h4>Module manufacturer AESOLAR</h4>
        <p className={style.detailInfoDescription}>
          JinkoSolar is a Chinese company founded in Shanghai in 2006. The solar
          module in the 405 Watt version belongs to the Tiger product line, is
          monofacial / P-type, and based on the multi-busbar technology.  In
          addition to the high efficiency rate of 20.74 % and high resistance to
          extreme weather conditions, the module is ideally suited for limited
          exposure to diffuse sunlight. The new Tiger Pro series is also highly
          resistant to salt and ammonia, making it perfect for roof
          installations in areas with extreme weather conditions.
        </p>
      </div>
    </div>
  );
};
