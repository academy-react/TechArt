import React, { useState } from "react";
import { CardHeader } from "./CourseCardHeader";
import { CardBody } from "./CourseCardBody";
import { CourseListCardBody } from "./CourseListCardBody";

const Card = ({ product, cardStyle }) => {
  if (cardStyle === 1) {
    return (
      <div className="bg-white font-sans">
        <div className="mx-auto max-w-3xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 mx-5 gap-y-12   ">
            {product.map((product) => (
              <div key={product.id}>
                <div className="relative border shadow-[-1px_-0px_10px_8px_rgba(0,0,0,0.1),_1px_0px_10px_8px_rgba(45,78,255,0.15)]  rounded-xl cursor-pointer flex flex-row">
                  <div className=" w-1/5">
                    <CardHeader
                      imageSrc={product.imageSrc}
                      imageAlt={product.imageAlt}
                      cardStyle={cardStyle}
                      name={product.name}
                    />
                  </div>
                  <div className=" w-4/5">
                    <CourseListCardBody
                      href={product.href}
                      teacher={product.teacher}
                      rate={product.rate}
                      price={product.price}
                      cardStyle={cardStyle}
                      name={product.name}
                      desc={product.desc}
                      duration={product.duration}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-white font-sans">
        <div className="mx-auto max-w-3xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 mx-5 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4  xl:gap-x-8  ">
            {product.map((product) => (
              <div key={product.id}>
                <div className="relative border shadow-[-1px_-0px_10px_8px_rgba(0,0,0,0.1),_1px_0px_10px_8px_rgba(45,78,255,0.15)]  rounded-xl cursor-pointer ">
                  <div className="">
                    <CardHeader
                      imageSrc={product.imageSrc}
                      imageAlt={product.imageAlt}
                      cardStyle={cardStyle}
                    />
                  </div>
                  <div>
                    <CardBody
                      href={product.href}
                      teacher={product.teacher}
                      rate={product.rate}
                      price={product.price}
                      cardStyle={cardStyle}
                      name={product.name}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export { Card };
