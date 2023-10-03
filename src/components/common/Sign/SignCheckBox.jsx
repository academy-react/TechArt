import React from "react";

const SignCheckBox = ({ name, message }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ml-2"
          />
          <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
            {message}
          </label>
        </div>
      </div>
    </>
  );
};

export { SignCheckBox };
