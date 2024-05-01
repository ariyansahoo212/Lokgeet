import React from "react";
import image from "../images/sudhir.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content" id="aboutP">
            <p>
              This platform is designed to help users connect with Bagheli Gayak,
              allowing them to schedule performances for particular dates and times.
              Gayaks have the freedom to either accept or decline performance requests,
              and there is also an opportunity for individuals to register as Bagheli Gayak.
              The platform includes detailed information about scheduled Bagheli performances,
              ensuring a smooth and efficient experience for both organizers and artists.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
