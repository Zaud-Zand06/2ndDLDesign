import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import monthlySpecialImg from "./monthlySpecial.jpg";

const scrollImagesContext = require.context(
  "./scroll-images",
  false,
  /\.(png|jpe?g|svg)$/
);
const scrollImages = scrollImagesContext.keys().map(scrollImagesContext);

function MonthlySpecial() {
  return (
    <>
      <div className="monthlySpecial">
        <h1>WHAT'S GOING ON THIS MONTH?</h1>
        <div className="specialCard">
          <h2 className="gradientText">The Hurricane!</h2>
          <p>Jalepenos, Cheese and our Cool Ranch dusting!</p>
          <img src={monthlySpecialImg} alt="Chicken Sando" />
        </div>
      </div>
    </>
  );
}

function AboutUs() {
  return (
    <>
      <div className="aboutUs">
        <h1>WHAT WE ARE</h1>
        <div className="aboutUsCard">
          <p>
            Nashville-style fried chicken is characterized by it's oil dip, and
            spiced dust that it gets as soon as it comes out the fryer. This
            gives it its charcteristic red colour, and helps to coat your mouth
            with our delicious spice blends! Since our inception in 2012, Doug
            Stephen has been singmindedly focused on the perfection of this
            storied chicken, with the goal of sharing his mouth-watering
            creations to all of Vancouver!
          </p>
        </div>
      </div>
    </>
  );
}

function ScrollBar() {
  const [carouselWidth, setCarouselWidth] = useState(
    window.innerWidth <= 700
      ? window.innerWidth * 0.98
      : window.innerWidth * 0.5
  );

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 700
        ? setCarouselWidth(window.innerWidth * 0.98)
        : setCarouselWidth(window.innerWidth * 0.5);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        width={carouselWidth}
        infiniteLoop={true}
        showStatus={false}
        emulateTouch={true}
        className="mainCarousel"
      >
        {scrollImages.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </Carousel>
    </>
  );
}

function MainScreen() {
  return (
    <>
      <MonthlySpecial />
      <AboutUs />
      <ScrollBar />
    </>
  );
}

export default MainScreen;
