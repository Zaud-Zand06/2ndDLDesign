import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const scrollImagesContext = require.context(
  "./scroll-images",
  false,
  /\.(png|jpe?g|svg)$/
);
const scrollImages = scrollImagesContext.keys().map(scrollImagesContext);

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

export default ScrollBar;
