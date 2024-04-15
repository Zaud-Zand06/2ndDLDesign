import React from "react";
import flamesGif from "./flames.gif";

function Header(props) {
  const logo =
    "https://static.wixstatic.com/media/4ca1eb_e2f97a86e959455e8ba0cb01a3bd0e5f~mv2.jpg/v1/fill/w_327,h_293,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/4ca1eb_e2f97a86e959455e8ba0cb01a3bd0e5f~mv2.jpg";
  const giftCardLink = "https://squareup.com/gift/MLWWKAFPWGTFJ/order";
  const eastVanLink = "https://dl-chicken-east-vancouver.square.site/";
  const UBCLink = "https://dl-chicken-ubc.square.site/";

  const handleMenuClick = () => {
    console.log(props.mainScreen);
    if (props.mainScreen == "menu") {
      props.setMainScreen("homepage");
    } else {
      props.setMainScreen("menu");
    }
  };

  return (
    <>
      <div className="backgroundImage"></div>
      <div className="header">
        <h1>
          <img className="flameImages" src={flamesGif} />
          <a id="secretMenu">DOWN LOW CHICKEN</a>
          <img className="flameImages" src={flamesGif} />
        </h1>
        {/* {<img
          src={logo}
          alt="DL Chicken Logo - Smirking Chicken with fuck me eyes"
        ></img>} */}
        <div className="links">
          <a href={giftCardLink} target="_blank">
            GIFT CARDS
          </a>
          <a href={eastVanLink} target="_blank">
            EAST VAN ORDERING
          </a>
          <a href={UBCLink} target="_blank">
            UBC ORDERING
          </a>
          <a id="menuButton" onClick={handleMenuClick}>
            {props.mainScreen == "homepage" ? "MENU" : "TAKE ME BACK!"}
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
