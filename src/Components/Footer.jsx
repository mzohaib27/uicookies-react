import React from "react";
import { styles } from "../utils/Styles";
import Button from "./Button";

const Footer = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} hero-bg`}>
      <h1 className="text-4xl text-center py-8">
        Be First To Get Free HTML Templates Directly In your Inbox
      </h1>
      <div className="flex px-6 md:px-24 lg:px-32 relative">
        <input
          type="email"
          placeholder="Your Email Address"
          className="p-6 flex-grow bg-gray-900 text-gray-400 text-2xl "
        />
        <div className="absolute top-3 right-36">
          <Button text={"Sign up"} bgColor={"bg-blue-500"} />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-2 py-6 md:pt-24">
        <h1 className="text-sm text-gray-500">
          &copy; 2016 - 2024, uiCookies All rights reserved | Responsive
          Bootstrap and HTML Website Templates
        </h1>
      </div>
    </div>
  );
};

export default Footer;
