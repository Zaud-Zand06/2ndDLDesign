import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const menuImagesContext = require.context(
  "./scroll-images",
  false,
  /\.(png|jpe?g|svg)$/
);
const menuImages = menuImagesContext.keys().map(menuImagesContext);
const tenderMenuImages = [menuImages[0], menuImages[1]];

const sandoItemInformation = [
  {
    key: 0,
    title: "The OG",
    description:
      "DL Sauce, Sweet and Sour Slaw, Pickled Onions and Bread and Butter Pickles! Choose your heat level on a leg or a breast!",
    price: "18",
  },
  {
    key: 1,
    title: "The Rookie",
    description:
      "Shredduce, Tomato and Chimichurri! Classic chicken on a leg or a breast!",
    price: "18",
  },
  {
    key: 2,
    title: "The Jerk",
    description:
      "Jerk Mayo, Slaw, Pickled Onions and a Tomato! Jerk dusted on a leg or a breast!",
    price: "18",
  },
  {
    key: 3,
    title: "The Chip and Dip",
    description:
      "Shredduce and a Tomato! Cool Ranch dust on a leg or a breast!",
    price: "18",
  },
  {
    key: 4,
    title: "The Boujee",
    description:
      "Truffle Mayo, Slaw, Pickled Onions and Pickles! Spiced Truffle dust on a leg or a breast!",
    price: "18",
  },
];

const tendersItemInformation = [
  {
    key: 0,
    title: "Chicken Tenders",
    description:
      "The most tender cut of the breast! Choose your heat level and choice of sauce!",
    price: "4 tenders - 15, 7 tenders - 21",
  },
  {
    key: 1,
    title: "Nuggets",
    description:
      "Popcorn chicken cut fresh from our kitchen! Choose your heat level and choice of sauce!",
    price: "10-12 nuggets - 11",
  },
];

const drinksItemInformation = [];

function MenuScreen() {
  const [carouselWidth, setCarouselWidth] = useState(
    window.innerWidth <= 700 ? window.innerWidth * 0.6 : window.innerWidth * 0.5
  );

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 700
        ? setCarouselWidth(window.innerWidth * 0.6)
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
      <div className="menu">
        <div className="menuCategory">
          <h1>Sandos</h1>
          <Carousel
            interval={4500}
            infiniteLoop={true}
            showIndicators={false}
            autoPlay={true}
            showArrows={false}
            emulateTouch={true}
            width={carouselWidth}
            showStatus={false}
          >
            {menuImages.map((image, index) =>
              sandoItemInformation[index] ? (
                <div key={sandoItemInformation[index].key} className="menuItem">
                  <img src={image} />
                  <h2 className="gradientText">
                    {sandoItemInformation[index].title}
                  </h2>
                  <p>{sandoItemInformation[index].price}</p>
                  <p>{sandoItemInformation[index].description}</p>
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
            interval={4500}
            infiniteLoop={true}
            showIndicators={false}
            autoPlay={true}
            showArrows={false}
            emulateTouch={true}
            width={carouselWidth}
            showStatus={false}
          >
            {tenderMenuImages.map((image, index) =>
              tendersItemInformation[index] ? (
                <div
                  key={tendersItemInformation[index].key}
                  className="menuItem"
                >
                  <img src={image} />
                  <h2 className="gradientText">
                    {tendersItemInformation[index].title}
                  </h2>
                  <p>{tendersItemInformation[index].price}</p>
                  <p>{tendersItemInformation[index].description}</p>
                </div>
              ) : (
                <></>
              )
            )}
          </Carousel>
        </div>
        <div className="menuCategory">
          <h1>Drinks</h1>
          <Carousel
            interval={4500}
            infiniteLoop={true}
            showIndicators={false}
            autoPlay={true}
            showArrows={false}
            emulateTouch={true}
            width={carouselWidth}
            showStatus={false}
          >
            {menuImages.map((image, index) => (
              <div key={index} className="menuItem">
                <img src={image} />
                <h2 className="gradientText">Drink Information</h2>
                <p>Drink Pricing</p>
                <p>Drink Description</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MenuScreen;
