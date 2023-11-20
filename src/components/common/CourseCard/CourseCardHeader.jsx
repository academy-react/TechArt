import React from "react";


const CardHeader = ({ imgSrc, imageAlt }) => {
  return (
    <div className="relative   ">
      <div className="  h-32 rounded-xl overflow-hidden">
        <img
          src={imgSrc}
          alt="تصویر موجود نیست"
          className=" w-full h-full object-fill "
        />
      </div>
    </div>
  );
};

export { CardHeader };
