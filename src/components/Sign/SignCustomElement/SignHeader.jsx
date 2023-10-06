import React from "react";

const SignHeader = ({ message }) => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md pb-8">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {message}
        </h2>
      </div>
    </>
  );
};

export { SignHeader };
