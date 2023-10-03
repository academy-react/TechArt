import React from "react";

import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import { CustomInput } from "../common/CustomInput";

const SignIn = ({ handlePageChange }) => {
  return (
    <>
      <div className=" relative w-full h-full z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex place-items-center">
        <div className=" w-full p-8">
          <h2 className=" text-black text-2xl text-center mb-4">Login</h2>
          <form action="#">
            <CustomInput name="email" type="email">
              <AiOutlineMail />
            </CustomInput>
            <CustomInput name="password" type="password">
              <AiOutlineLock />
            </CustomInput>
            <div className=" text-xs font-medium mb-4 flex justify-between">
              <a
                onClick={() => handlePageChange("ForgetPass")}
                className=" no-underline hover:underline hover:underline-offset-2"
                href="#"
              >
                رمز عبورم را فراموش کرده ام
              </a>
              <label className="flex">
                مرا به خاطر داشته باش
                <input className=" accent-black ml-2" type="checkbox" />
              </label>
            </div>
            <button
              className=" w-full h-11 bg-red-300 border-none outline-none rounded-md  cursor-pointer font-medium"
              type="submit"
            >
              ورود
            </button>
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

export { SignIn };
