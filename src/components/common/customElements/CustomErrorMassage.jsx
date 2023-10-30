import React from "react";
import { ErrorMessage } from "formik";

const CustomErrorMassage = ({ name }) => {
  return (
    <>
      <ErrorMessage
        name={name}
        component={"span"}
        className="text-red-700 absolute -bottom-5 right-10 text-[10px]"
      />
    </>
  );
};

export { CustomErrorMassage };
