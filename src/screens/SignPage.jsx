import React, { useState } from "react";
import { SignUp } from "../components/Sign/SignUp";
import { ForgetPass } from "../components/Sign/ForgetPass";
import SignIn from "../components/Sign/SignIn";

const SignPage = () => {
  const [signPage, setSignPage] = useState("SignUp");

  const sign = (signPage) => {
    switch (signPage) {
      case "SignUp":
        return <SignUp />;
      case "ForgetPass":
        return <ForgetPass />;
      case "SignIn":
        return <SignIn />;
    }
  };

  return <>{sign(signPage)}</>;
};

export { SignPage };
