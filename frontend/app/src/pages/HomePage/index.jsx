import React from "react";
import { Fade } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";
import style from "./index.module.css";

const slideImages = [
  {
    url: "/static/images/homepage/slider/horizon.svg",
    route: "/solar-panels?type=Horizon",
    buttonText: "solar=panels=Horizon",
  },
  {
    url: "/static/images/homepage/slider/terra.svg",
    route: "/solar-panels?type=Terra",
    buttonText: "solar=panels=Terra",
  },
  {
    url: "/static/images/homepage/slider/meteor.svg",
    route: "/solar-panels?type=Meteor",
    buttonText: "solar=panels=Meteor",
  },
  {
    url: "/static/images/homepage/slider/aurora.svg",
    route: "/solar-panels?type=Aurora",
    buttonText: "solar=panels=Aurora",
  },
  {
    url: "/static/images/homepage/slider/Comet.svg",
    route: "/solar-panels?type=Comet",
    buttonText: "solar=panels=Comet",
  },
  {
    url: "/static/images/homepage/slider/Neptune.svg",
    route: "/solar-panels?type=Neptune",
    buttonText: "solar=panels=Neptune",
  },
  {
    url: "/static/images/homepage/slider/shadestar.svg",
    route: "/solar-panels?type=ShadeStar",
    buttonText: "solar=panels=ShadeStar",
  },
];

// Блок под слайдером
const InstallationLocation = [
  {
    url: "/static/images/homepage_img/fields.png",
    text: "Fields",
    route: "/Fields_panels",
  },
  {
    url: "/static/images/homepage_img/house_roofs.png",
    text: "House Roofs",
    route: "/House_Roofs_panels",
  },
  {
    url: "/static/images/homepage_img/car_ports.png",
    text: "Car Ports",
    route: "/Car_Ports_panels",
  },
  {
    url: "/static/images/homepage_img/building_rooftops.png",
    text: "Building Rooftops",
    route: "/Building_Rooftops_panels",
  },
  {
    url: "/static/images/homepage_img/fence.png",
    text: "Fence",
    route: "/fence_panels",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="slide-container">
        <Fade
          duration={5000}
          canSwipe={true}
          autoplay={true}
          arrows={false}
          indicators={true}
          pauseOnHover={false}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className={style.slider}
                style={{ backgroundImage: `url(${slideImage.url})` }}
              >
                <div className={style.sliderContent}>
                  <button
                    className={style.sliderButton}
                    onClick={() => handleClick(slideImage.route)}
                  >
                    {slideImage.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>

      <div className={style.cartBlock}>
        <div className={style.cartBlockText}>
          <h2 className={style.SolarPaneltext}>Solar Panels Use</h2>
          <h2 className={style.ExploreText}>
            Choose Your Installation Location
          </h2>
        </div>

        {/* InstallationLocation /Choose Your Installation Location - img */}
        <div className={style.cartImgButton}>
          {InstallationLocation.map((image, index) => (
            <div
              key={index}
              className={style.imgCard}
              onClick={() => handleClick(image.route)}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <span className={style.imgText}>{image.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={style.solarPanelsblock}>
        <div className={style.solarPanelsText}>
          <h2 style={{ fontSize: "80px" }}>Our Best Sellers</h2>
          <h2 style={{ color: "red", fontSize: "30px" }}>
            Explore Popular Products
          </h2>
        </div>
        <div
          className={style.solarPanels}
          style={{
            backgroundImage: `url("/static/images/homepage_img/Circle.svg")`,
          }}
        ></div>
      </div>
    </>
  );
}
