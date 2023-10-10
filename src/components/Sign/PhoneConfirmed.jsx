import React from "react";

import { FormWrapper } from "./FormWrapper";
import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";
import { Timer } from "./SignCustomElement/Timer";

const PhoneConfirmed = ({ handlePageChange }) => {
  return (
    <>
      <FormWrapper>
        <SignHeader message={"شماره تماس شما با موفقیت تایید شد"} />

        <Timer
          seconds={"10"}
          func={() => {
            handlePageChange("SignUp");
          }}
          goToLabel={"ثبت نهایی اطلاعات"}
        />

        <SignLink
          message={"انتقال به صفحه ثبت اطلاعات"}
          handlePageChange={handlePageChange}
          to={"SignUp"}
        />
      </FormWrapper>
    </>
  );
};

export { PhoneConfirmed };
