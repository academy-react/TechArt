import React from "react";
import Logo from "../../../assets/icon/header-logo.png";

const SignHeader = ({ message }) => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-auto rounded-xl"
          src={Logo}
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {message}
        </h2>
      </div>
    </>
  );
};

export { SignHeader };
