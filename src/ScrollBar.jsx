import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ScrollBar({ images }) {
  return (
    <>
      <Carousel
        autoPlay={true}
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
