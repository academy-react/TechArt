import React from "react";

const AuthLink = ({ message, handleStep, to }) => {
  return (
    <>
      <div className="text-sm">
        <a
          onClick={() => {
            handleStep(to);
          }}
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {message}
        </a>
      </div>
    </>
  );
};

export { AuthLink };
