import React from "react";
import Logo from "../../assets/icon/header-logo.png";

const SignHeaderLogo = () => {
  return (
    <div className="mx-auto md:relative md:top-0 md:-left-0 md:translate-x-0 absolute top-5 left-1/2 -translate-x-1/2">
      <img
        className="2xl:h-28 xl:h-20 lg:h-20 md:h-16 h-14 my-4 w-auto rounded-xl "
        src={Logo}
        alt="Your Company"
      />
    </div>
  );
};

export { SignHeaderLogo };
