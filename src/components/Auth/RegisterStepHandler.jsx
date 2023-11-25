import React, { useEffect, useState } from "react";
import { PhoneRegister } from "./PhoneRegister";
import { PhoneConfirm } from "./PhoneConfirm";
import { PhoneConfirmed } from "./PhoneConfirmed";
import { SignUp } from "./SignUp";
import { registerAPI } from "../../core/services/api/auth";

const RegisterStepHandler = () => {
  const [registerStep, setRegisterStep] = useState("PhoneRegister");

  const handleRegisterStep = (to) => {
    setRegisterStep(to);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [registerData, setRegisterData] = useState([]);

  const handlePhoneNumber = (number) => {
    console.log(number);

    setPhoneNumber(number);
    registerPhoneNumber(number);
  };

  const registerPhoneNumber = async (e) => {
   

    const regData = await registerAPI(e);

    console.log("API Response:", e); // Check the API response

    setRegisterData(regData);
    console.log(regData)
  };

  // useEffect(() => {
  //   console.log(phoneNumber);
  // }, [phoneNumber]);

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
            regData={registerData}
          />
        );

      case "PhoneConfirmed":
        return (
          <PhoneConfirmed
            handleStep={handleRegisterStep}
            regData={registerData}
          />
        );

      case "SignUp":
        return <SignUp phoneNumber={phoneNumber}/>;
    }
  };

  return RegisterComponent(registerStep);
};

export { RegisterStepHandler };
