import React, { useState } from "react";
import { ErrorMessage, Field, useField } from "formik";
import { motion } from "framer-motion";
import { signFormChildrenVariant } from "../../../core/utils/signFormChildrenVariant";

const SignInput = ({ children, label, ...props }) => {
  const { name, type } = props;

  const [isFocus, setIsFocus] = useState(false);

  const [field, meta] = useField(props);

  const handleLabelDeFocus = (event) => {
    field.onBlur(event);
    if (field.value === "") setIsFocus(false);
  };

  return (
    <>
      <motion.div className="relative" variants={signFormChildrenVariant()}>
        <span className=" absolute right-2 text-2xl top-1/2 -translate-y-1/2 text-gray-700">
          {children}
        </span>
        <label
          htmlFor={name}
          className={
            " absolute block text-sm font-medium text-gray-700 w-max px-2 bg-white transition-all duration-500 rounded-xl" +
            (!isFocus
              ? " top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              : " top-0 -translate-y-3/4 left-2/3 -translate-x-1/2")
          }
        >
          {label}
        </label>

        <div className={meta.touched && meta.error ? "mb-10" : "mb-4"}>
          <Field
            id={name}
            name={name}
            type={type}
            autoComplete={name}
            className={
              "block w-full appearance-none rounded-md border pl-3 pr-10 py-2 sm:text-sm shadow-sm z-1" +
              (meta.touched && meta.error
                ? "border-red-500 focus:border-red-500 focus:outline-none focus:ring-red-500 text-red-500"
                : "border-gray-300  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  text-gray-800")
            }
            dir="ltr"
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={handleLabelDeFocus}
          />

          {meta.touched && meta.error && (
            <ErrorMessage
              name={name}
              component={"span"}
              className="text-red-700 absolute -bottom-6 right-0 text-xs"
            />
          )}
        </div>
      </motion.div>
    </>
  );
};

export { SignInput };
