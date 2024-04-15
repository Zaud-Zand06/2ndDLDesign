import React, { useState, useEffect } from "react";
import menuImage from "./DLMenu.jpg";
import MonthlySpecial from "./MonthlySpecial";
import AboutUs from "./AboutUs";
import Scrollbar from "./ScrollBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const scrollImagesContext = require.context(
  "./scroll-images",
  false,
  /\.(png|jpe?g|svg)$/
);
const scrollImages = scrollImagesContext.keys().map(scrollImagesContext);

function MainScreen() {
  return (
    <>
      <MonthlySpecial />
      <AboutUs />
      <Scrollbar images={scrollImages} />
    </>
  );
}

function MenuScreen() {
  const [carouselWidth, setCarouselWidth] = useState(window.innerWidth * 0.75);

  useEffect(() => {
    const handleResize = () => {
      setCarouselWidth(window.innerWidth * 0.75);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="menu">
        <div className="menuCategory">
          <h1>Sandos</h1>
          <Carousel showThumbs={false} width={carouselWidth} showStatus={false}>
            {scrollImages.map((image, index) => (
              <div key={index} className="menuItem">
                <img src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="menuCategory">
          <h1>Tenders and nuggets</h1>
          <Carousel showThumbs={false} width={carouselWidth} showStatus={false}>
            {scrollImages.map((image, index) => (
              <div key={index} className="menuItem">
                <img src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="menuCategory">
          <h1>Drinks</h1>
          <Carousel showThumbs={false} width={carouselWidth} showStatus={false}>
            {scrollImages.map((image, index) => (
              <div key={index} className="menuItem">
                <img src={image} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

function HomePage(props) {
  const menu = (
    <>
      <img src={menuImage} alt="DL MENU" />
    </>
  );
  return (
    <>{props.mainScreen == "HomePage" ? <MainScreen /> : <MenuScreen />}</>
  );
}

export default HomePage;
