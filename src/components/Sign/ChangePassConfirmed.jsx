import React from "react";

import { FormWrapper } from "./FormWrapper";
import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";
import { Timer } from "./SignCustomElement/Timer";

const ChangePassConfirmed = ({ handlePageChange }) => {
  return (
    <>
      <FormWrapper>
        <SignHeader message={"رمز عبور شما با موفقیت تغییر کرد"} />

        <Timer
          seconds={"10"}
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
      </FormWrapper>
    </>
  );
};

export { ChangePassConfirmed };
