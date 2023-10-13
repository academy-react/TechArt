import React from "react";
import { useField } from "formik";

import { CustomErrorMassage } from "./CustomErrorMassage";

const CustomCheckBox = ({ message, ...props }) => {
  const { name } = props;

  const [field, meta] = useField(props);

  return (
    <>
      <div className="flex relative items-center justify-between">
        <div className="flex items-center">
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

        {meta.touched && meta.error && <CustomErrorMassage name={name} />}
      </div>
    </>
  );
};

export { CustomCheckBox };
