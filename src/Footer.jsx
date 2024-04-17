import React, { useState } from "react";

function Locations() {
  return (
    <div>
      <div className="locationCard">
        <p>East Van: </p>
        <a href="https://maps.app.goo.gl/zmrKtGsnixNZMwbg8" target="_blank">
          905 COMMERCIAL DRIVE
        </a>
      </div>
      <div className="locationCard">
        <p>UBC: </p>
        <a href="https://maps.app.goo.gl/CTSzKzUnkzgJhsKj7" target="_blank">
          6065 UNIVERSITY BOULEVARD
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
      <a href="mailto:doug@dlchickenshack.ca">DOUG@DLCHICKENSHACK.CA</a>
      <p>(604) 283-1385</p>
    </>
  );
}

function Hours() {
  return (
    <div>
      <p>Mon to Fri: </p>
      <p>11am - 9pm</p>
      <p>Sun: </p>
      <p>11am - 4:30pm</p>
    </div>
  );
}

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h2>LOCATIONS</h2>
          <Locations />
          {/* {openSection === "locations" && <Locations />} */}
        </div>
        <div>
          <h2>CONTACT US</h2>
          <Contact />
          {/* {openSection === "contact" && <Contact />} */}
        </div>
        <div>
          <h2>HOURS</h2>
          <Hours />
          {/* {openSection === "hours" && <Hours />} */}
        </div>
      </div>
    </>
  );
}

export default Footer;
