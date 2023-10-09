import React from "react";
import Logo from "../../assets/icon/header-logo.png";

const SignHeaderLogo = () => {
  return (
    <div className="mb-8 mx-auto">
      <img
        className="2xl:h-28 xl:h-20 lg:h-20 md:h-16 h-16 md w-auto rounded-xl"
        src={Logo}
        alt="Your Company"
      />
    </div>
  );
};

export { SignHeaderLogo };
