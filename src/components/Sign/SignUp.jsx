import React from "react";
import { SignButton } from "../common/Sign/SignButton";
import { SignCheckBox } from "../common/Sign/SignCheckBox";
import { SignInput } from "../common/Sign/SignInput";
import { SignLink } from "../common/Sign/SignLink";
import { SignHeader } from "../common/Sign/SignHeader";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const SignUp = ({ handlePageChange }) => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <SignHeader message={"به اکانت کاربریی خود وارد شوید "} />

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <SignInput name={"username"} label={"نام کاربری"} type={"text"}>
                <AiOutlineUser />
              </SignInput>

              <SignInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
                <AiOutlineMail />
              </SignInput>

              <SignInput name={"password"} label={"رمز عبور"} type={"password"}>
                <AiOutlineLock />
              </SignInput>

              <SignInput
                name={"confirmPassword"}
                label={"تکرار رمز عبور"}
                type={"password"}
              >
                <AiOutlineLock />
              </SignInput>

              <SignCheckBox name={"agreeTerm"} message={"با مقررات موافقم"} />
              <SignLink
                message={"عضو سایت هستی؟"}
                handlePageChange={handlePageChange}
                to={"SignIn"}
              />

              <SignButton message={"ثبت نام"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { SignUp };
