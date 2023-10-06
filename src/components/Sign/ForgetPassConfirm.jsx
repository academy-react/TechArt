import React from "react";

import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";
import { Timer } from "./SignCustomElement/Timer";

const ForgetPassConfirm = ({ handlePageChange, emailAddress }) => {
  return (
    <>
      <SignHeader message={"تغییر رمز"} />

      <div className="font-medium text-gray-600 mb-5">
        <span>پیام حاوی لینک تغییر پسوورد به آدرس ایمیل</span>
        <span className="text-indigo-700">{" " + emailAddress + " "}</span>
        <span>ارسال شده است</span>
      </div>

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

export { ForgetPassConfirm };
