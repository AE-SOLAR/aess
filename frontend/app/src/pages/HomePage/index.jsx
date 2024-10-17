import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";
import style from "./index.module.css";
import { fetchPanels } from "../../handlers/api";
import { getRandomElements } from "../../handlers/tools";
import { PanelItem } from "../../components/PanelItem";
import ButtonWithLine from "../../components/ButtonWithLine";
import VideoButton from "../../components/VideoButton";
import SolarPanelsSlider from "../../components/SolarPanelsSlider";
import { BrandInput } from "../../components/Input";
import BrandButton from "../../components/BrandButton";

const slideImages = [
  // Слайды для слайдера
];

const InstallationLocation = [
  // Локации для установки
];

const DownSlider = [
  // Слайды для нижнего слайдера
];

export default function HomePage() {
  const navigate = useNavigate();
  const [panels, setPanels] = useState([]);
  const [subscibeCompany, setSubscibeCompany] = useState("");
  const [subscibeEmail, setSubscibeEmail] = useState("");

  useEffect(() => {
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
            >
              <VideoButton videoSrc={image.video}>
                <span className={style.imgText}>{image.text}</span>
              </VideoButton>
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
                      {slide.sliderIcons && (
                        <img
                          src={slide.sliderIcons}
                          alt="Slider Icon"
                          className={style.sliderIcon}
                        />
                      )}
                      {slide.sliderText && (
                        <div className={style.sliderText}>
                          <p>{slide.sliderText}</p>
                        </div>
                      )}
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

      {/* Background Image Section */}
      <div className={style.DownSection}
        style={{
          backgroundImage: `url("/static/images/homepage/homepage_img/Circles.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '20px',
          borderRadius: '8px',
          color: 'white',
          height: '100vh',
        }}
      >
        <div className={style.SectionForm}
         style={{
            backgroundImage: `url("/static/images/homepage/homepage_img/FormBackground.png")`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            padding: '20px', 
            borderRadius: '8px',
            color: 'white',
            height: '100vh',
 }}>
         
           <div className={style.DownBlock}>
            <p>Subscribe to our newsletter</p>
            <h1>Be always</h1>
            <h1>in touch with us</h1>
            <BrandInput className={style.BrandInput} value={subscibeCompany} setValue={setSubscibeCompany}>Company</BrandInput>
            <BrandInput className={style.BrandInput} value={subscibeEmail} setValue={setSubscibeEmail}>Email</BrandInput>
            <BrandButton>test</BrandButton>
          </div>
        </div>
        <div className={style.DownForm}>

        </div>
      </div>
    </>
  );
}



{/* style={{backgroundImage: `url("/static/images/homepage/homepage_img/FormBackground.png")
// backgroundSize: 'cover',
// backgroundPosition: 'center',
// height: '30vh'
// }}

// style={{
//   backgroundImage: `url("/static/images/homepage/homepage_img/Circles.png")`, 
//   backgroundSize: 'cover', 
//   backgroundPosition: 'center', 
//   backgroundRepeat: 'no-repeat', 
//   padding: '20px', 
//   borderRadius: '8px',
//   color: 'white', 
//   height: '100vh',
// }}> */}