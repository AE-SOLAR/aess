import React from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import style from "./index.module.css"; 

const slideImages = [
  {
    url: "/static/images/homepage/slider/horizon.svg",
    route: "/product/panels?type=Horizon",
    buttonText: "solar=panels=Horizon",
  },
  {
    url: "/static/images/homepage/slider/terra.svg",
    route: "/product/panels?type=Terra",
    buttonText: "solar=panels=Terra",
  },
  {
    url: "/static/images/homepage/slider/meteor.svg",
    route: "/product/panels?type=Meteor",
    buttonText: "solar=panels=Meteor",
  },
  {
    url: "/static/images/homepage/slider/aurora.svg",
    route: "/product/panels?type=Aurora",
    buttonText: "solar=panels=Aurora",
  },
  {
    url: "/static/images/homepage/slider/Comet.svg",
    route: "/product/panels?type=Comet",
    buttonText: "solar=panels=Comet",
  },
  {
    url: "/static/images/homepage/slider/Neptune.svg",
    route: "/product/panels?type=Neptune",
    buttonText: "solar=panels=Neptune",
  },
  {
    url: "/static/images/homepage/slider/shadestar.svg",
    route: "/product/panels?type=ShadeStar",
    buttonText: "solar=panels=ShadeStar",
  },
];

// Example InstallationLocation array (ensure to define it properly)
const InstallationLocation = [
  {
    url: "/static/images/homepage/homepage_img/fields.png",
    route: "/Fields_panels",
    text: "Fields",
  },
  // ... add other locations as needed
];

const HomePage = () => {
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

        <div className={style.cartImgButton}>
          {InstallationLocation.map((location, index) => (
            <div
              key={index}
              className={style.imgCard}
              onClick={() => handleClick(location.route)}
            >
              <img src={location.url} alt={location.text} className={style.img} />
              <span className={style.imgText}>{location.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
