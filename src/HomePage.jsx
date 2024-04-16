import React, { useState, useEffect } from "react";
import menuImage from "./DLMenu.jpg";
import MonthlySpecial from "./MonthlySpecial";
import AboutUs from "./AboutUs";
import Scrollbar from "./ScrollBar";
import MenuScreen from "./Menu";

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

function HomePage(props) {
  const menu = (
    <>
      <img src={menuImage} alt="DL MENU" />
    </>
  );
  return (
    <>{props.mainScreen == "homepage" ? <MainScreen /> : <MenuScreen />}</>
  );
}

export default HomePage;
