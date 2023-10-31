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
              <div key={product.id} >
                <div className="relative border  shadow-xl  rounded-xl cursor-pointer flex flex-row p-2">
                  <div className=" w-1/5 ">
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
                <div className="relative border  shadow-xl  rounded-2xl cursor-pointer p-2 ">
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
