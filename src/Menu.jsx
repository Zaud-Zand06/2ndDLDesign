import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const itemDescriptions = [
  {
    key: 0,
    title: "The OG!",
    description:
      "The original Down Low Chicken Sando! Choose your heat level and piece of bird!",
  },
  {
    key: 1,
    title: "The Rookie!",
    description:
      "The original Down Low Chicken Sando! Choose your heat level and piece of bird!",
  },
  {
    key: 2,
    title: "The Jerk!",
    description:
      "The original Down Low Chicken Sando! Choose your heat level and piece of bird!",
  },
  {
    key: 3,
    title: "The Hurricane!",
    description:
      "The original Down Low Chicken Sando! Choose your heat level and piece of bird!",
  },
];

function MenuScreen({ images }) {
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
          <Carousel
            showIndicators={false}
            autoPlay={true}
            showArrows={false}
            emulateTouch={true}
            width={carouselWidth}
            showStatus={false}
          >
            {images.map((image, index) =>
              itemDescriptions[index] ? (
                <div key={itemDescriptions[index].key} className="menuItem">
                  <img src={image} />
                  <h2>{itemDescriptions[index].title}</h2>
                  <p>{itemDescriptions[index].description}</p>
                </div>
              ) : (
                <div className="menuItem">
                  <img src={image} />
                  <h2>An upcoming sando??</h2>
                  <p>Nothing here yet! Check back soon</p>
                </div>
              )
            )}
          </Carousel>
        </div>
        <div className="menuCategory">
          <h1>Tenders and nuggets</h1>
          <Carousel
            showIndicators={false}
            autoPlay={true}
            showArrows={false}
            emulateTouch={true}
            width={carouselWidth}
            showStatus={false}
          >
            {images.map((image, index) => (
              <div key={index} className="menuItem">
                <img src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="menuCategory">
          <h1>Drinks</h1>
          <Carousel
            showIndicators={false}
            autoPlay={true}
            showArrows={false}
            emulateTouch={true}
            width={carouselWidth}
            showStatus={false}
          >
            {images.map((image, index) => (
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

export default MenuScreen;
