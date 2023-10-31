import React from "react";

const CardHeader = ({ imageSrc, imageAlt, name }) => {
  return (
    <div className="relative   ">
      <div className="  h-32 rounded-xl overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className=" w-full h-full object-fill "
        />
      </div>
    </div>
  );
};

export { CardHeader };
