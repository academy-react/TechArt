import React from "react";
import { ErrorMessage, useField } from "formik";
import { motion } from "framer-motion";

import { signFormChildrenVariant } from "../../../core/utils/signFormChildrenVariant";

const SignCheckBox = ({ message, ...props }) => {
  const { name } = props;

  const [field, meta] = useField(props);

  return (
    <>
      <motion.div
        className="flex relative items-center justify-between"
        variants={signFormChildrenVariant()}
      >
        <div className="flex items-center mb-4">
          <input
            {...field}
            id={name}
            name={name}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ml-2"
          />
          <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
            {message}
          </label>
        </div>

        {meta.touched && meta.error && (
          <ErrorMessage
            name={name}
            component={"span"}
            className="text-red-700 absolute -bottom-1 right-0 text-xs"
          />
        )}
      </motion.div>
    </>
  );
};

export { SignCheckBox };
