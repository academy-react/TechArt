import React from "react";

const CardHeader = ({ imageSrc, imageAlt,name }) => {
  return (
    <div className="relative h-40 overflow-hidden ">
      <div className=" h-[80%]  w-[90%] m-auto   ">
        <img
        src={imageSrc}
        alt={imageAlt}
        className=" h-[100%]  object-center  rounded-3xl object-contain mx-auto mt-3"
      />
    
      </div>
      
      
    </div>
  );
};

export { CardHeader };
