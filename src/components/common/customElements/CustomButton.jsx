import React from "react";

const CustomButton = ({ message, width, onClick = () => {} }) => {
  return (
    <>
      <div>
        <button
          onClick={onClick}
          type="submit"
          className={
            "flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" +
            " " +
            (width ? width : "w-full")
          }
         
        >
          {message}
        </button>
      </div>
    </>
  );
};

export { CustomButton };
