import React from "react";

import { FormWrapper } from "./FormWrapper";
import { AuthHeader, AuthLink, AuthTimer } from "./AuthCustomElement";

const ChangePassConfirmed = ({ handlePageChange }) => {
  return (
    <>
      <FormWrapper>
        <AuthHeader message={"رمز عبور شما با موفقیت تغییر کرد"} />

        <AuthTimer
          seconds={"10"}
          func={() => {
            handlePageChange("SignIn");
          }}
          goToLabel={"ورود"}
        />

        <AuthLink
          message={"انتقال به صفحه ورود"}
          handlePageChange={handlePageChange}
          to={"SignIn"}
        />
      </FormWrapper>
    </>
  );
};

export { ChangePassConfirmed };
