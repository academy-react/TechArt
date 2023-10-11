import { useState } from "react";
import { motion } from "framer-motion";

import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ForgetPass } from "./ForgetPass";
import { AuthHeaderLogo } from "./AuthHeaderLogo";
import { PhoneRegister } from "./PhoneRegister";
import { PhoneConfirm } from "./PhoneConfirm";
import { PhoneConfirmed } from "./PhoneConfirmed";
import { ForgetPassConfirm } from "./ForgetPassConfirm";
import { ChangePass } from "./ChangePass";
import { ChangePassConfirmed } from "./ChangePassConfirmed";

import SignInSVG from "../../assets/image/SignIn.svg";
import PhoneRegisterSVG from "../../assets/image/PhoneRegister.svg";
import PhoneConfirmSVG from "../../assets/image/PhoneConfirm.svg";
import PhoneConfirmedSVG from "../../assets/image/PhoneConfirmed.svg";
import SignUpSVG from "../../assets/image/SignUp.svg";
import ForgetPassSVG from "../../assets/image/ForgetPass.svg";
import ForgetPassConfirmSVG from "../../assets/image/ForgetPassConfirm.svg";
import ChangePassSVG from "../../assets/image/ChangePass.svg";
import ChangePassConfirmedSVG from "../../assets/image/ChangePassConfirmed.svg";

function AuthLayout() {
  const [signPage, setSignPage] = useState("SignUp");

  const handlePageChange = (to) => {
    setSignPage(to);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumber = (number) => {
    setPhoneNumber(number);
  };

  const [emailAddress, setEmailAddress] = useState("");
  const handleEmailAddress = (mail) => {
    setEmailAddress(mail);
  };

  const signForm = (signPage) => {
    switch (signPage) {
      /*sign in components*/
      case "SignIn":
        return <SignIn handlePageChange={handlePageChange} />;
      /*sign in components*/

      /*sign up components*/
      case "PhoneRegister":
        return (
          <PhoneRegister
            handlePageChange={handlePageChange}
            handlePhoneNumber={handlePhoneNumber}
          />
        );

      case "PhoneConfirm":
        return (
          <PhoneConfirm
            handlePageChange={handlePageChange}
            phoneNumber={phoneNumber}
          />
        );

      case "PhoneConfirmed":
        return <PhoneConfirmed handlePageChange={handlePageChange} />;

      case "SignUp":
        return <SignUp handlePageChange={handlePageChange} />;
      /*sign up components*/

      /*forget password components*/
      case "ForgetPass":
        return (
          <ForgetPass
            handlePageChange={handlePageChange}
            handleEmailAddress={handleEmailAddress}
          />
        );

      case "ForgetPassConfirm":
        return (
          <ForgetPassConfirm
            handlePageChange={handlePageChange}
            emailAddress={emailAddress}
          />
        );

      case "ChangePass":
        return <ChangePass handlePageChange={handlePageChange} />;

      case "ChangePassConfirmed":
        return <ChangePassConfirmed handlePageChange={handlePageChange} />;
      /*forget password components*/
    }
  };
  const signSVG = (signPage) => {
    switch (signPage) {
      /*sign in components*/
      case "SignIn":
        return <img src={SignInSVG} alt="SignInSVG" />;

      /*sign in components*/

      /*sign up components*/
      case "PhoneRegister":
        return <img src={PhoneRegisterSVG} alt="PhoneRegisterSVG" />;

      case "PhoneConfirm":
        return <img src={PhoneConfirmSVG} alt="PhoneConfirmSVG" />;

      case "PhoneConfirmed":
        return <img src={PhoneConfirmedSVG} alt="PhoneConfirmSVG" />;

      case "SignUp":
        return <img src={SignUpSVG} alt="SignUpSVG" />;

      /*sign up components*/

      /*forget password components*/
      case "ForgetPass":
        return <img src={ForgetPassSVG} alt="ForgetPassSVG" />;

      case "ForgetPassConfirm":
        return <img src={ForgetPassConfirmSVG} alt="ForgetPassConfirmSVG" />;

      case "ChangePass":
        return <img src={ChangePassSVG} alt="ChangePassSVG" />;

      case "ChangePassConfirmed":
        return (
          <img src={ChangePassConfirmedSVG} alt="ChangePassConfirmedSVG" />
        );

      /*forget password components*/
    }
  };

  return (
    <>
      <motion.div
        className="md:grid lg:grid-cols-5 md:grid-cols-6 md:gap-6"
        dir="ltr"
        variants={{}}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="md:col-span-3 lg:grid-col-2 md:mt-0 mt-28  flex justify-center">
          <div className="md:w-10/12 w-1/2 flex justify-center">
            {signSVG(signPage)}
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-2" dir="rtl">
          <div className=" min-h-full flex flex-col pt-0 pb-12 md:py-12 sm:px-6 lg:px-8 overflow-hidden">
            <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md flex-grow">
              {signForm(signPage)}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export { AuthLayout };
