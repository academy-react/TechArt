import React, { useState } from "react";
import { PhoneRegister } from "./PhoneRegister";
import { PhoneConfirm } from "./PhoneConfirm";
import { PhoneConfirmed } from "./PhoneConfirmed";
import { SignUp } from "./SignUp";

const RegisterStepHandler = () => {
  const [registerStep, setRegisterStep] = useState("PhoneRegister");

  const handleRegisterStep = (to) => {
    setRegisterStep(to);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (number) => {
    setPhoneNumber(number);
  };

  const RegisterComponent = (registerStep) => {
    switch (registerStep) {
      case "PhoneRegister":
        return (
          <PhoneRegister
            handleStep={handleRegisterStep}
            handlePhoneNumber={handlePhoneNumber}
          />
        );

      case "PhoneConfirm":
        return (
          <PhoneConfirm
            handleStep={handleRegisterStep}
            phoneNumber={phoneNumber}
          />
        );

      case "PhoneConfirmed":
        return <PhoneConfirmed handleStep={handleRegisterStep} />;

      case "SignUp":
        return <SignUp />;
    }
  };

  return RegisterComponent(registerStep);
};

export { RegisterStepHandler };
