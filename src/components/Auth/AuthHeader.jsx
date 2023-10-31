import React from "react";

// Icons Import
import { IoHome } from "react-icons/io5";

// Logo Import
import Logo from "../../assets/icon/header-logo.png";

const AuthHeader = () => {
  return (
    <div className="mx-auto flex gap-10 place-items-center justify-center">
      <div className="text-2xl text-gray-100 bg-gray-700 w-10 h-10 flex place-items-center justify-center rounded-md">
        <IoHome />
      </div>
      <img
        className="2xl:h-28 xl:h-20 lg:h-20 md:h-16 h-14 my-4 w-auto rounded-xl "
        src={Logo}
        alt="Your Company"
      />
    </div>
  );
};

export { AuthHeader };
