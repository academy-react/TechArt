import React from "react";
import { SignButton } from "../common/Sign/SignButton";
import { SignInput } from "../common/Sign/SignInput";
import { SignLink } from "../common/Sign/SignLink";
import { SignHeader } from "../common/Sign/SignHeader";
import { AiOutlineMail } from "react-icons/ai";

const ForgetPass = ({ handlePageChange }) => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <SignHeader message={"بازیابی رمز عبور"} />

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <SignInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
                <AiOutlineMail />
              </SignInput>

              <SignLink
                message={"عضو سایت هستی؟"}
                handlePageChange={handlePageChange}
                to={"SignIn"}
              />

              <SignButton message={"ارسال کد"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { ForgetPass };
