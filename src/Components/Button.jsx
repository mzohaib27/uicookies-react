import React from "react";

const Button = ({
  text,
  bgColor,
  textColor,
  styles,
  onClickFunction,
  disabledCondition,
}) => {
  return (
    <div className="">
      <button
        disabled={disabledCondition}
        onClick={onClickFunction}
        className={`px-6 py-4 font-bold rounded ${bgColor} ${textColor} ${styles}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
