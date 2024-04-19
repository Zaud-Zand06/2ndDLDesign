import React, { useState } from "react";

function Locations({ locationSelected, setLocationSelected }) {
  const commercialLocationClick = () => {
    setLocationSelected("commercial");
  };
  const ubcLocationClick = () => {
    setLocationSelected("ubc");
  };
  return (
    <>
      <div className="locationCard">
        <h3>East Van </h3>
        <a onClick={commercialLocationClick}>905 COMMERCIAL DRIVE</a>
        <p>Mon to Fri: 11am - 9pm</p>
        <p>Sun: 11am - 4:30pm</p>
      </div>
      <div className="locationCard">
        <h3>UBC </h3>
        <a onClick={ubcLocationClick}>6065 UNIVERSITY BOULEVARD</a>
        <p>Mon to Fri: 11am - 9pm</p>
        <p>Sun: 11am - 4:30pm</p>
      </div>
    </>
  );
}

function Map({ locationSelected }) {
  if (locationSelected == "commercial") {
    return (
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.0035225636325!2d-123.07231218791486!3d49.276330471084556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867157a438ebc3%3A0x75969767dbca6887!2sDownlow%20Chicken%20Shack!5e0!3m2!1sen!2sca!4v1713504501600!5m2!1sen!2sca"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  } else {
    return (
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5374942576004!2d-123.25015078791537!3d49.266211671801045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867323f766026b%3A0xe24f0c30803538b5!2sDownLow%20Chicken%20Shack!5e0!3m2!1sen!2sca!4v1713506077672!5m2!1sen!2sca"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

function Contact() {
  return (
    <div>
      <h3>CONTACT US</h3>
      <a href="mailto:doug@dlchickenshack.ca">DOUG@DLCHICKENSHACK.CA</a>
      <p>(604) 283-1385</p>
    </div>
  );
}

function Footer() {
  const [locationSelected, setLocationSelected] = useState("commercial");
  return (
    <>
      <div className="footer">
        <div className="footerInfo">
          <Locations
            locationSelected={locationSelected}
            setLocationSelected={setLocationSelected}
          />
          <Contact />
        </div>
        <Map locationSelected={locationSelected} />
      </div>
    </>
  );
}

export default Footer;
