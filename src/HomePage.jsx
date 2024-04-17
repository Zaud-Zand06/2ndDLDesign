import React from "react";
import MainScreen from "./MainScreen";
import MenuScreen from "./Menu";

function HomePage(props) {
  return (
    <>{props.mainScreen == "homepage" ? <MainScreen /> : <MenuScreen />}</>
  );
}

export default HomePage;
