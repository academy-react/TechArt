import React from "react";

import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";
import { Timer } from "./SignCustomElement/Timer";

const ChangePassConfirmed = ({ handlePageChange }) => {
  return (
    <>
      <SignHeader message={"رمز عبور شما با موفقیت تغییر کرد"} />

      <Timer
        seconds={"5"}
        func={() => {
          handlePageChange("SignIn");
        }}
        goToLabel={"ورود"}
      />

      <SignLink
        message={"انتقال به صفحه ورود"}
        handlePageChange={handlePageChange}
        to={"SignIn"}
      />
    </>
  );
};

export { ChangePassConfirmed };
