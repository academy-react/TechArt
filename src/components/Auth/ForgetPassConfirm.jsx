import React from "react";

import { FormWrapper } from "./FormWrapper";
import { AuthHeader, AuthLink, AuthTimer } from "./AuthCustomElement";

const ForgetPassConfirm = ({ handlePageChange, emailAddress }) => {
  return (
    <>
      <FormWrapper>
        <AuthHeader message={"تغییر رمز"} />

        <div className="font-medium text-gray-600 mb-5">
          <span>پیام حاوی لینک تغییر پسوورد به آدرس ایمیل</span>
          <span className="text-indigo-700">{" " + emailAddress + " "}</span>
          <span>ارسال شده است</span>
        </div>

        <AuthTimer
          seconds={"5"}
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

export { ForgetPassConfirm };
