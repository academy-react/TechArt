import React, { useState } from "react";
import { ForgetPass } from "./ForgetPass";
import { ForgetPassConfirm } from "./ForgetPassConfirm";

const ForgetPassStepHandler = () => {
  const [forgetPassStep, setForgetPassStep] = useState("ForgetPass");

  const handleForgetPassStep = (to) => {
    setForgetPassStep(to);
  };

  const [emailAddress, setEmailAddress] = useState("");

  const handleEmailAddress = (mail) => {
    setEmailAddress(mail);
  };

  const ForgetPassComponent = (forgetPassStep) => {
    switch (forgetPassStep) {
      case "ForgetPass":
        return (
          <ForgetPass
            handleStep={handleForgetPassStep}
            handleEmailAddress={handleEmailAddress}
          />
        );

      case "ForgetPassConfirm":
        return <ForgetPassConfirm emailAddress={emailAddress} />;
    }
  };
  return <>{ForgetPassComponent(forgetPassStep)}</>;
};

export { ForgetPassStepHandler };
