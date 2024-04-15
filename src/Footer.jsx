import React, { useState } from "react";

function Locations() {
  return (
    <div>
      <p>East Van: 905 COMMERCIAL DRIVE</p>
      <p>UBC: 6065 UNIVERSITY BOULEVARD</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <a href="mailto:doug@dlchickenshack.ca">DOUG@DLCHICKENSHACK.CA</a>
      <p>(604) 283-1385</p>
    </div>
  );
}

function Hours() {
  return (
    <div>
      <p>Mon to Fri: 11am - 9pm</p>
      <p>Sun: 11am - 4:30pm</p>
    </div>
  );
}

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="footer">
        <div>
          <a onClick={() => handleClick("locations")}>LOCATIONS</a>
          {openSection === "locations" && <Locations />}
        </div>
        <div>
          <a onClick={() => handleClick("contact")}>CONTACT US</a>
          {openSection === "contact" && <Contact />}
        </div>
        <div>
          <a onClick={() => handleClick("hours")}>HOURS</a>
          {openSection === "hours" && <Hours />}
        </div>
      </div>
    </>
  );
}

export default Footer;
