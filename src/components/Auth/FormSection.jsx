import React from "react";
import { AuthHeader } from "./AuthHeader";

const FormSection = ({ children }) => {
  return (
    <>
      <div className="form-section md:col-span-3 lg:col-span-2" dir="rtl">
        <div className=" min-h-full flex flex-col pt-0 pb-12 md:py-12 sm:px-6 lg:px-8 overflow-hidden">
          <AuthHeader />
          <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md flex-grow">
            <div
              className="form-wrapper bg-white pb-8 pt-1 px-4 shadow-xl sm:rounded-lg sm:px-10 
                          md:[--x-from:300px] md:[--scale-from:1]
                          md:[--x-to:0px] md:[--scale-to:1]
                          md:[--x-exit:-300px]"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { FormSection };
