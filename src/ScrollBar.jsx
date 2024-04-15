import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ScrollBar({ images }) {
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
      <Carousel
        autoPlay={true}
        width={carouselWidth}
        infiniteLoop={true}
        showStatus={false}
        emulateTouch={true}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </Carousel>
    </>
  );
}

export default ScrollBar;

{
  /* <>
  <div className="imgContainer inlineSnaps">
    {images.map((image) => (
      <div className="scrollImages">
        <img src={image} alt="" />
      </div>
    ))}
  </div>
</> */
}
