import React from "react";

import { FormWrapper } from "./FormWrapper";
import { AuthHeader, AuthLink, AuthTimer } from "./AuthCustomElement";

const PhoneConfirmed = ({ handlePageChange }) => {
  return (
    <>
      <FormWrapper>
        <AuthHeader message={"شماره تماس شما با موفقیت تایید شد"} />

        <AuthTimer
          seconds={"10"}
          func={() => {
            handlePageChange("SignUp");
          }}
          goToLabel={"ثبت نهایی اطلاعات"}
        />

        <AuthLink
          message={"انتقال به صفحه ثبت اطلاعات"}
          handlePageChange={handlePageChange}
          to={"SignUp"}
        />
      </FormWrapper>
    </>
  );
};

export { PhoneConfirmed };
