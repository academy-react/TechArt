import React from "react";

const SVGSection = ({ SVGSrc, alt }) => {
  return (
    <div className="svg-section md:col-span-3 lg:grid-col-2 md:mt-0 mt-28 flex justify-center">
      <div className="svg-container md:w-10/12 w-1/2 flex justify-center">
        <img src={SVGSrc} alt={alt} />
      </div>
    </div>
  );
};

export { SVGSection };
