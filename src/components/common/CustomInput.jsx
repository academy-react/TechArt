import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";

import "./style/CustomInput.css";

const CustomInput = ({ children, name, type }) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabelClassName = () => {
    return isFocus === false
      ? " top-1/2 -translate-y-1/2 text-xl"
      : " top-0 -translate-y-1/2 text-sl";
  };

  const handleLabelDeFocus = () => {
    setIsFocus(false);
  };

  return (
    <>
      <div className=" relative w-full h-12 border-2 border-solid border-black mb-4 rounded-md">
        <span className=" absolute right-2 text-2xl top-1/2 -translate-y-1/2 ">
          {children}
        </span>
        <input
          className=" w-full h-full bg-transparent border-none outline-none font-semibold text-lg pl-2 pr-9"
          type={type}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={handleLabelDeFocus}
        />
        <label
          className={
            " absolute left-2 font-medium pointer-events-none bg-red-500 px-2 transition-all duration-75" +
            renderLabelClassName()
          }
        >
          {name}
        </label>
      </div>
    </>
  );
};

export { CustomInput };
