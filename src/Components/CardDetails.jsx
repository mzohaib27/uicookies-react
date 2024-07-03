import React, { useState } from "react";
import { cardsData } from "../constants/data";

import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const CardDetails = () => {
  const dispatch = useDispatch();

  const [selectCheckBox, setSelectCheckBox] = useState("free");

  const handleCheckBox = (e) => {
    setSelectCheckBox(e.target.value);
  };

  const { id } = useParams();
  const item = cardsData?.find((d) => d.id === parseInt(id));

  const downloadBtnFunction = () => {
    dispatch(addToCart());
  };
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flexCenter min-h-[80vh] bg-gray-800 text-white">
          <h1 className="text-7xl font-extralight px-4 md:px-8 lg:px-32 text-center">
            {item.title}
          </h1>
        </div>
        <div className="lg:flex lg:gap-4 w-full p-4 md:p-12">
          <div className="flex flex-col w-full lg:w-3/4 border border-gray-300">
            <div>
              <img src={item.image} className="" alt="image" />
            </div>
            <p className="p-4">{item.description}</p>
          </div>
          <div className="w-full lg:w-1/4 p-6 h-[30rem] rounded m-2 border border-gray-300">
            <p className="text-4xl ">{item.price.priceRange}</p>
            <div className="flex flex-col gap-2 py-4">
              <label>
                <input
                  type="radio"
                  value="single"
                  checked={selectCheckBox === "sinlge"}
                  onChange={handleCheckBox}
                  className="form-radio text-blue-600 mx-2"
                />
                <span>
                  Remove footer credits for single template –{" "}
                  {item.price.price2}
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="all"
                  checked={selectCheckBox === "all"}
                  onChange={handleCheckBox}
                  className="form-radio text-blue-600  mx-2"
                />
                <span>
                  Remove footer credits from all templates – {item.price.price3}
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="free"
                  checked={selectCheckBox === "free"}
                  onChange={handleCheckBox}
                  className="form-radio text-blue-600  mx-2"
                />
                <span>
                  Free - Must leave footer credits in place –{" "}
                  {item.price.price1}
                </span>
              </label>
            </div>
            <div className="pb-2 border-b border-gray-50 flex flex-col gap-4 ">
              <Link to={`/cart/${id}`}>
                <Button
                  styles={
                    "bg-blue-500 text-white font-bold rounded px-6 py-4 w-full"
                  }
                  text={"Download"}
                  onClickFunction={downloadBtnFunction}
                />
              </Link>
              <Link to={"/"}>
                <Button
                  styles={
                    "bg-gray-400 text-white font-bold rounded px-6 py-4 w-full"
                  }
                  text={"Demo"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
