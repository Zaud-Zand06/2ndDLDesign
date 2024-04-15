import React from "react";
import monthlySpecialImg from "./monthlySpecial.jpg";

function MonthlySpecial() {
  return (
    <>
      <div className="monthlySpecial">
        <h1>WHAT'S GOING ON THIS MONTH?</h1>
        <div className="specialCard">
          <h2 className="gradientText">The Hurricane!</h2>
          <p>
            A specially crafted blend of flavours and spices, delivered straight
            to you every month!
          </p>
          <img src={monthlySpecialImg} alt="Chicken Sando" />
        </div>
      </div>
    </>
  );
}

export default MonthlySpecial;
