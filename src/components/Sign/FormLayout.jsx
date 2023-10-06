import { useState } from "react";

import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ForgetPass } from "./ForgetPass";

import SignUpSVG from "../../assets/image/register.svg";
import SignInSVG from "../../assets/image/login.svg";
import ForgetPassSVG from "../../assets/image/forgot-password.svg";
import { SignHeaderLogo } from "./SignHeaderLogo";

function FormLayout() {
  const [signPage, setSignPage] = useState("SignIn");

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
        return <img src={SignUpSVG} alt="SignUpSVG" />;
      case "ForgetPass":
        return <img src={ForgetPassSVG} alt="ForgetPassSVG" />;
      case "SignIn":
        return <img src={SignInSVG} alt="SignInSVG" />;
    }
  };

  return (
    <>
      <div className="md:grid md:grid-cols-5 md:gap-6">
        <div className="md:col-span-2">
          <div className=" min-h-full flex flex-col py-12 sm:px-6 lg:px-8">
            <SignHeaderLogo />
            <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md flex-grow">
              <div className="bg-white pb-8 pt-1 px-4 shadow-2xl sm:rounded-lg sm:px-10">
                {signForm(signPage)}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 md:col-span-3 md:mt-0 flex justify-center">
          <div className="w-10/12">{signSVG(signPage)}</div>
        </div>
      </div>
    </>
  );
}
export { FormLayout };
