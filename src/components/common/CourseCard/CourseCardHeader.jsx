import React from "react";

const CardHeader = ({ imageSrc, imageAlt,name }) => {
  return (
    <div className="relative border    h-48 ">
      <div className="  m-auto p-5  ">
        <img
        src={imageSrc}
        alt={imageAlt}
        className="   object-center  rounded-3xl object-contain mx-auto mt-3"
      />
    
      </div>
      
      
    </div>
  );
};

export { CardHeader };
