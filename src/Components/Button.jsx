import React from "react";

const Button = ({ text, bgColor, textColor }) => {
  return (
    <div className="">
      <button className={`px-6 py-4 font-bold rounded ${bgColor} ${textColor}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
