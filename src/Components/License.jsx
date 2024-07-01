import React from "react";
import { styles } from "../utils/Styles";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import PricingPlans from "./PricingPlans";
import image from "../assets/paypal.jpg";
import { PiDotFill } from "react-icons/pi";

const License = () => {
  return (
    <div>
      <div className={` hero-bg py-6 md:py-12`}>
        <HeroSection heading={"Looking for Attribution-Free Template??"} />
      </div>
      <div
        className={`${styles.paddingX} ${styles.paddingY} flexCenter bg-gray-200 rounded-lg`}
      >
        <div className="flex flex-col gap-4  rounded-lg bg-gray-50 p-6 md:py-12 md:px-24">
          <p>
            All of the website templates at uiCookes are licensed under the
            <span className="text-blue-600 cursor-pointer hover:text-black hover-effect">
              <Link> Creative Commons Attribution 3.0 </Link>
            </span>{" "}
            License and some{" "}
            <span className="text-blue-600 cursor-pointer hover:text-black hover-effect">
              <Link>additional attributions</Link>
            </span>
            . If you would like to use attribution-free templates, purchase
            Single Template License for a single theme or purchase All Template
            License for all existing and upcoming templates.
          </p>
          <PricingPlans />
          <div className="flexCenter border-b border-gray-300 py-4 md:py-12">
            <img src={image} alt="image" className="" />
          </div>
          <div>
            <h1 className="text-5xl font-light py-4 md:py-12">
              Legal Attribution for Free Templates
            </h1>
            <p>
              uiCookies provides professionally designed beautiful responsive
              Bootstrap themes and HTML templates. When you use our templates
              without paying, it will attribute the following conditions. Which
              means:
            </p>
            <div className="py-6 md:py-12">
              <ul>
                <li className="flex items-center gap-2 text-xl py-2">
                  <PiDotFill className="h-6 w-6" />
                  You{" "}
                  <span className="text-green-500 font-semibold">
                    are permitted to
                  </span>{" "}
                  use templates for personal and business usage.
                </li>
                <li className="flex items-center gap-2 text-xl py-2">
                  <PiDotFill className="h-6 w-6" />
                  You{" "}
                  <span className="text-green-500 font-semibold">
                    are permitted to
                  </span>{" "}
                  customize templates however you like
                </li>
                <li className="flex items-center gap-2 text-xl py-2">
                  <PiDotFill className="h-6 w-6" />
                  You're{" "}
                  <span className="text-green-500 font-semibold">allowed</span>
                  convert/port HTML templates into popular CMS or custom content
                  management.
                </li>
                <li className="flex items-center gap-2 text-xl py-2">
                  <PiDotFill className="h-6 w-6" />
                  You{" "}
                  <span className="text-red-500 font-semibold">
                    are not allowed to
                  </span>{" "}
                  remove the copyright credit from the footer.
                </li>
                <li className="flex items-center gap-2 text-xl py-2">
                  <PiDotFill className="h-6 w-6" />
                  You{" "}
                  <span className="text-red-500 font-semibold">
                    are not allowed to
                  </span>{" "}
                  distribute, redistribute, sell, resale, rent, and lease our
                  template.
                </li>
                <li className="flex items-center gap-2 text-xl py-2">
                  <PiDotFill className="h-6 w-6" />
                  We <span className="text-red-500 font-semibold">
                    don't
                  </span>{" "}
                  any technical support for free HTML templates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
