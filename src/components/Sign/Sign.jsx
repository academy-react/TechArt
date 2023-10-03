import React, { useState } from "react";

import { SignUp } from "./SignUp";
import { ForgetPass } from "./ForgetPass";
import { SignIn } from "./SignIn";

import style from "./style/Sign.module.css";

import SignUpSVG from "../../assets/image/register.svg";
import SignInSVG from "../../assets/image/login.svg";
import ForgetPassSVG from "../../assets/image/forgot-password.svg";

const Sign = () => {
  const [signPage, setSignPage] = useState("SignUp");

  const handlePageChange = (to) => {
    setSignPage(to);
  };

  const signForm = (signPage) => {
    switch (signPage) {
      case "SignUp":
        return <SignUp handlePageChange={handlePageChange} />;
      case "ForgetPass":
        return <ForgetPass handlePageChange={handlePageChange} />;
      case "SignIn":
        return <SignIn handlePageChange={handlePageChange} />;
    }
  };
  const signSVG = (signPage) => {
    switch (signPage) {
      case "SignUp":
        return <img src={SignUpSVG} className={style.SVG} alt="SignUpSVG" />;
      case "ForgetPass":
        return (
          <img src={ForgetPassSVG} className={style.SVG} alt="ForgetPassSVG" />
        );
      case "SignIn":
        return <img src={SignInSVG} className={style.SVG} alt="SignInSVG" />;
    }
  };

  return (
    <>
      <div className={style.sign}>
        <div className={style.SVGContainer}>{signSVG(signPage)}</div>
        <div className=" w-2/5 h-full flex place-items-center bg-red-500">
          {signForm(signPage)}
        </div>
      </div>
    </>
  );
};

export default Sign;
