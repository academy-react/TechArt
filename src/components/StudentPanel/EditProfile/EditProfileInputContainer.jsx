import React from "react";

const EditProfileInputContainer = ({ children }) => {
  return (
    <>
      <div className="w-full md:w-1/2 xl:w-1/3 flex-none h-min px-5 relative">
        {children}
      </div>
    </>
  );
};

export { EditProfileInputContainer };
