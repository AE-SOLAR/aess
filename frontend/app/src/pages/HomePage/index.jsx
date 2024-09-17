import React from "react";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import style from "./index.module.css";

const slideImages = [
  {
    url: "/static/images/homepage/slider/HorizonStatic.png",
    caption: "Horizon",
    description:
      "Solar Carport PV Modules: A solar carport is a roof structure that shelters vehicles while generating clean electricity with solar panels. This integrated solution offers multiple benefits for both homeowners and businesses",
  },
  {
    url: "/static/images/homepage/slider/TerraStatic.png",
    caption: "Terra",
    description: "Advanced PV Module with unique cell layout ​",
  },
  {
    url: "/static/images/homepage/slider/MeteorStatic.png",
    caption: "Meteor",
    description:
      "Unleashing the potential of the sun: Tunnel Oxide Passivated Contact (TOPCon) Technology for high-performance solar modules",
  },
  {
    url: "/static/images/homepage/slider/AuroraStatic.png",
    caption: "Aurora",
    description:
      "Embracing the light of the sun: Passivated Emitter and Rear Cell (PERC) Technology for Superior Solar Modules",
  },
  {
    url: "/static/images/homepage/slider/CometStatic.png",
    caption: "Comet",
    description:
      "Harnessing the power of the sun: Heterojunction Technology (HJT) for advanced solar modules",
  },
  {
    url: "/static/images/homepage/slider/NeptuneStatic.png",
    caption: "Neptune",
    description:
      "Maximizing solar power efficiency: Harnessing Photovoltaic Thermal (PVT) Hybrid Technology for Improved Solar Modules",
  },
  {
    url: "/static/images/homepage/slider/ShadeStarStatic.png",
    caption: "ShadeStar",
    description:
      "Fighting Shadows: Smart cell technology for innovative solar modules",
  },
];

export default function HomePage() {
  return (
    <div className="slide-container">
      <Fade
        duration={1500}
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
              <div className={style.sliderDescription}>
                <caption>{slideImage.caption.toUpperCase()}</caption>
                <description>{slideImage.description}</description>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
