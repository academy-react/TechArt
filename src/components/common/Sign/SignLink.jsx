import React from "react";

const SignLink = ({ message, handlePageChange, to }) => {
  return (
    <>
      <div className="text-sm">
        <a
          onClick={() => handlePageChange(to)}
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {message}
        </a>
      </div>
    </>
  );
};

export { SignLink };
