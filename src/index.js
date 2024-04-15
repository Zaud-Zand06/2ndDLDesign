import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";

const App = () => {
  const [mainScreen, setMainScreen] = useState("homepage");

  return (
    <>
      <Header mainScreen={mainScreen} setMainScreen={setMainScreen} />
      <HomePage mainScreen={mainScreen} />
      <Footer />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
