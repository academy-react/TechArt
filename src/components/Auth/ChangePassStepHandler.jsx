import React, { useState } from "react";
import { ChangePass } from "./ChangePass";
import { ChangePassConfirmed } from "./ChangePassConfirmed";

const ChangePassStepHandler = () => {
  const [changePassStep, setChangePassStep] = useState("ChangePass");

  const handleChangePassStep = (to) => {
    setChangePassStep(to);
  };
  const ChangePassComponent = (changePassStep) => {
    switch (changePassStep) {
      case "ChangePass":
        return <ChangePass handleStep={handleChangePassStep} />;

      case "ChangePassConfirmed":
        return <ChangePassConfirmed />;
    }
  };
  return <>{ChangePassComponent(changePassStep)}</>;
};

export { ChangePassStepHandler };
