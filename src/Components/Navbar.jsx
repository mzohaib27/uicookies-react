import React from "react";
import { styles } from "../utils/Styles";
import logo from "../assets/applogo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className={`${styles.paddingX} flexBetween py-4 md:py-6 lg:py-8 hero-bg text-white`}
    >
      <div>
        <Link to={"/"}>
          <img src={logo} alt="app-logo" className="" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-2 items-center">
          <Link to={"/"}>
            <li className="btn-hover hover:text-green-500 px-4 font-bold">
              FREE TEMPLATES
            </li>
          </Link>

          <Link to={"/license"}>
            <li className="btn-hover hover:text-green-500 px-4 font-bold">
              BUY LICESNSE
            </li>
          </Link>

          <Link to={"/blog"}>
            <li className="btn-hover hover:text-green-500 px-4 font-bold">
              BLOG
            </li>
          </Link>

          <Link to={"/contact"}>
            <li className="btn-hover hover:text-green-500 px-4 font-bold">
              CONTACT
            </li>
          </Link>

          <li className="flex gap-1 items-center btn-hover">
            <FaSearch className="w-5 h-5" />
            <IoIosArrowDown className="w-5 h-5" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
