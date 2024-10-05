import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";
import style from "./index.module.css";
import { fetchPanels } from "../../handlers/api";
import { getRandomElements } from "../../handlers/tools";
import { PanelItem } from "../../components/PanelItem";
import ButtonWithLine from "../../components/ButtonWithLine";

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

// Блок под слайдером
const InstallationLocation = [
  {
    url: "/static/images/homepage/homepage_img/fields.png",
    text: "Fields",
    route: "/Fields_panels",
  },
  {
    url: "/static/images/homepage/homepage_img/house_roofs.png",
    text: "House Roofs",
    route: "/House_Roofs_panels",
  },
  {
    url: "/static/images/homepage/homepage_img/car_ports.png",
    text: "Car Ports",
    route: "/Car_Ports_panels",
  },
  {
    url: "/static/images/homepage/homepage_img/building_rooftops.png",
    text: "Building Rooftops",
    route: "/Building_Rooftops_panels",
  },
  {
    url: "/static/images/homepage/homepage_img/fence.png",
    text: "Fence",
    route: "/fence_panels",
  },
];

const DownSlider = [
  {
    url: "/static/images/homepage/DownSlider/aurora/aurora.mp4",
    route: "/product/panels?type=Aurora",
    buttonText: "solar=panels=Aurora",
    sliderText: "AESOLAR TEXT",
    sliderIcons: "/static/images/homepage/DownSlider/aurora/30.png",
  },
  {
    url: "/static/images/homepage/DownSlider/comet.mp4",
    route: "/product/panels?type=Comet",
    buttonText: "solar=panels=Comet",
    sliderText: "AESOLAR TEXT",
    sliderIcons: "/static/images/homepage/DownSlider/aurora/30.png",
  },
  {
    url: "/static/images/homepage/DownSlider/horizon.mp4",
    route: "/product/panels?type=Horizon",
    buttonText: "solar=panels=Horizon",
    sliderText: "AESOLAR TEXT",
    sliderIcons: "/static/images/homepage/DownSlider/aurora/30.png",
  },
  {
    url: "/static/images/homepage/DownSlider/meteor.mp4",
    route: "/product/panels?type=Meteor",
    buttonText: "solar=panels=Meteor",
    sliderText: "AESOLAR TEXT",
    sliderIcons: "/static/images/homepage/DownSlider/aurora/30.png",
  },
  {
    url: "/static/images/homepage/DownSlider/neptune.mp4",
    route: "/product/panels?type=Neptune",
    buttonText: "solar=panels=Neptune",
    sliderText: "AESOLAR TEXT",
    sliderIcons: "/static/images/homepage/DownSlider/neptune.mp4",
  },
  {
    url: "/static/images/homepage/DownSlider/shadestar.mp4",
    route: "/product/panels?type=ShadeStar",
    buttonText: "solar=panels=ShadeStar",
    sliderIcons: "/static/images/homepage/DownSlider/aurora/30.png",
  },
  {
    url: "/static/images/homepage/DownSlider/terra.mp4",
    route: "/product/panels?type=Terra",
    buttonText: "solar=panels=Terra",
    sliderText: "AESOLAR TEXT",
    sliderIcons: "/static/images/homepage/DownSlider/aurora/30.png",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    //фечнуть данные даные с бека
    const fetchData = async () => {
      try {
        const data = await fetchPanels();
        setPanels(getRandomElements(data, 4));
      } catch {
        console.error("Error fetching data");
      }
    };
    fetchData();
  }, []);

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
          className={style.solarPanelsCart}
          style={{
            backgroundImage: `url("/static/images/homepage/homepage_img/Circles.png")`,
          }}
        >
          {panels.map((p) => (
            <PanelItem product={p} key={p.id} />
          ))}
        </div>
      </div>

      {/* Блок с видео */}
      <div className={style.VideoBlock}>
        <div className={style.VideoBlockText}>
          <div className={style.h2VideoBlockText}>
            <h2 style={{ fontSize: "70px" }}>Learn more about</h2>
            <h2 style={{ color: "red", fontSize: "70px" }}>
              Our Featured Product
            </h2>
          </div>
        </div>

        <div className={style.VideoContainer}>
          <div className={style.VideoItem}>
            <iframe
              src="https://www.youtube.com/embed/e0yUQXztO60"
              title="YouTube video player"
              frameBorder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className={style.VideoItem}>
            <iframe
              src="https://www.youtube.com/embed/NNKjjoxLDcI?controls=0"
              title="YouTube video player"
              frameBorder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <ButtonWithLine>See our products</ButtonWithLine>

      <div className={style.DownSlider}>
        <div className={style.h2DownSlider}>
          <h2 style={{ fontSize: "70px" }}>Our Advantages:</h2>
          <h2 style={{ color: "red", fontSize: "70px" }}>Essential Insights</h2>
        </div>

        <div className={style.DownSliderContent}>
          <div className={style.TextDown}>
            <h2>Our Advantages</h2>
            <h2>Essential Insights</h2>
          </div>

          <div className={style.SliderContent}>
            <div className={style.SliderContent}>
              <Fade
                duration={5000}
                canSwipe={true}
                autoplay={true}
                arrows={false}
                indicators={true}
                pauseOnHover={false}
              >
                {DownSlider.map((slide, index) => (
                  <div key={index}>
                    <div className={style.slider}>
                      <video className={style.sliderVideo} autoPlay loop muted>
                        <source src={slide.url} type="video/mp4" />
                      </video>
                      <div className={style.sliderContent}>
                        {/* Иконка для слайда */}
                        {slide.sliderIcons && (
                          <img
                            src={slide.sliderIcons}
                            alt="Slider Icon"
                            className={style.sliderIcon}
                          />
                        )}

                        {/* Текст для слайда */}
                        {slide.sliderText && (
                          <div className={style.sliderText}>
                            <p>{slide.sliderText}</p>
                          </div>
                        )}

                        {/* Кнопка для слайда */}
                        <button
                          className={style.sliderButton}
                          onClick={() => handleClick(slide.route)}
                        >
                          {slide.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
