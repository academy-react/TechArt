import React from "react";

import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import { CustomInput } from "../common/CustomInput";

const ForgetPass = ({ handlePageChange }) => {
  return (
    <>
      <div className=" relative w-full h-full z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex place-items-center">
        <div className=" w-full p-8">
          <h2 className=" text-black text-2xl text-center mb-4">
            Recover your password
          </h2>
          <form action="#">
            <CustomInput name="email" type="email">
              <AiOutlineMail />
            </CustomInput>

            <button
              className=" w-full h-11 bg-red-300 border-none outline-none rounded-md  cursor-pointer font-medium"
              type="submit"
            >
              ارسال کد
            </button>
            <div className="text-xs font-medium text-center mt-4">
              <p>
                قبلا ثبت نام کردی؟
                <a
                  onClick={() => handlePageChange("SignIn")}
                  className=" no-underline hover:underline hover:underline-offset-2 mr-1"
                  href="#"
                >
                  ورود به حساب کاربری
                </a>
              </p>
            </div>
            <div className="text-xs font-medium text-center mt-4">
              <p>
                هنوز ثبت نام نکردی؟
                <a
                  onClick={() => handlePageChange("SignUp")}
                  className=" no-underline hover:underline hover:underline-offset-2 mr-1"
                  href="#"
                >
                  ثبت نام
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { ForgetPass };
