import React from "react";
import { cardsData } from "../constants/data.js";
import { Link } from "react-router-dom";
import { truncate } from "lodash";

const Card = ({ image, title, description, price, id, category }) => {
  return (
    <>
      <div className="flex flex-col gap-2 rounded-lg bg-gray-300 ">
        <div>
          <img
            src={image}
            className="h-[20rem] w-[25rem] rounded-t-lg"
            alt="image"
          />
        </div>
        <div className="p-4 h-[20rem] flex flex-col">
          <h1 className="text-2xl ">{title}</h1>
          <p className="py-2 ">{truncate(description, { length: 150 })}</p>
        </div>
        <div className="flexBetween p-4 border-t border-gr">
          <p className="p-2 bg-gray-200  rounded-lg">{price.priceRange}</p>
          <Link to={`/downloads/${id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
