import React, { useState } from "react";

import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import { CustomInput } from "../common/CustomInput";

const SignUp = ({ handlePageChange }) => {
  return (
    <>
      <div className=" relative w-full h-full rounded-sm z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex place-items-center">
        <div className=" w-full p-8">
          <h2 className=" text-black text-2xl text-center mb-4">
            Sign Up your account
          </h2>
          <form action="#">
            <CustomInput name="username" type="text">
              <AiOutlineUser />
            </CustomInput>
            <CustomInput name="email" type="email">
              <AiOutlineMail />
            </CustomInput>
            <CustomInput name="password" type="password">
              <AiOutlineLock />
            </CustomInput>
            <CustomInput name="password" type="password">
              <AiOutlineLock />
            </CustomInput>
            <div className=" text-xs font-medium mb-4">
              <label className="flex justify-center">
                مقررات سایت را میپذیرم
                <input type="checkbox" className="accent-black ml-2" />
              </label>
            </div>
            <button
              className=" w-full h-11 bg-red-300 border-none outline-none rounded-md  cursor-pointer font-medium"
              type="submit"
            >
              ثبت
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
          </form>
        </div>
      </div>
    </>
  );
};

export { SignUp };
