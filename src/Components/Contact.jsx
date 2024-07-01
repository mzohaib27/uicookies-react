import React from "react";
import HeroSection from "./HeroSection";

const Contact = () => {
  return (
    <div>
      <div className={` hero-bg py-6 md:py-12`}>
        <HeroSection
          heading={"Say Hello! and keep in touch"}
          text={
            "Want to make an inquiry? Drop us a massage. We love to answer quickly."
          }
        />
      </div>
    </div>
  );
};

export default Contact;
