import React from "react";
import Logo from "../../assets/icon/header-logo.png";

const SignHeaderLogo = () => {
  return (
    <>
      <img
        className=" mb-8 mx-auto h-20 w-auto rounded-xl"
        src={Logo}
        alt="Your Company"
      />
    </>
  );
};

export { SignHeaderLogo };
