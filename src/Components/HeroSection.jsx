import React from "react";
import { styles } from "../utils/Styles";
import { Link } from "react-router-dom";

const HeroSection = ({ heading, text, button, path }) => {
  return (
    <>
      <div
        className={`${styles.paddingX} mx-6 md:mx-12 lg:mx-32 text-center py-6 md:py-12 text-white`}
      >
        <h1 className={`text-2xl md:text-5xl lg:text-6xl pb-4`}>{heading}</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 py-4">
          {text}
        </p>
        <div className="flex justify-center items-center">
          <Link to={path}>{button}</Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
