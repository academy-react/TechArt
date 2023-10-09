import React from "react";

import { MotionElement } from "../common/MotionElement";

import { signFormTransition } from "../../core/utils/SignFormTransition";

const FormWrapper = ({ children }) => {
  return (
    <>
      <MotionElement variants={signFormTransition()}>
        <div className="bg-white pb-8 pt-1 px-4 shadow-xl sm:rounded-lg sm:px-10">
          {children}
        </div>
      </MotionElement>
    </>
  );
};

export { FormWrapper };
