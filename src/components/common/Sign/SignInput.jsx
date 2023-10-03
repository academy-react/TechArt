import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";

const SignInput = ({ children, name, label, type }) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabelClassName = () => {
    return !isFocus
      ? " top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      : " -translate-y-3/4 left-2/3 -translate-x-1/2";
  };

  const handleLabelDeFocus = () => {
    setIsFocus(false);
  };

  return (
    <>
      <div className="relative">
        <span className=" absolute right-2 text-2xl top-1/2 -translate-y-1/2 text-gray-700">
          {children}
        </span>
        <label
          htmlFor={name}
          className={
            " absolute block text-sm font-medium text-gray-700 w-max px-2 bg-white" +
            renderLabelClassName()
          }
        >
          {label}
        </label>
        <div className="mt-1">
          <input
            id={name}
            name={name}
            type={type}
            autoComplete={name}
            required
            className="block w-full appearance-none rounded-md border border-gray-300 pl-3 pr-10 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black"
            dir="ltr"
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={handleLabelDeFocus}
          />
        </div>
      </div>
    </>
  );
};

export { SignInput };
