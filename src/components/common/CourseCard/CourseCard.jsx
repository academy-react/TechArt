import React, { useState } from "react";
import { CardHeader } from "./CourseCardHeader";
import { CardBody } from "./CourseCardBody";
import { CourseListCardBody } from "./CourseListCardBody";

const Card = ({ product, cardStyle }) => {
  if (cardStyle === 1) {
    return (
      <div className="bg-white font-sans">
        <div className="mx-auto max-w-3xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 mx-5 gap-y-12   ">
            {product.map((product) => (
              <div key={product.courseId}>
                <div className="relative border  shadow-xl  rounded-xl cursor-pointer flex flex-row p-2">
                  <div className=" w-1/5 ">
                    <CardHeader
                      imageSrc={product.tumbImageAddress}
                      imageAlt={product.imageAlt}
                      cardStyle={cardStyle}
                      name={product.title}
                    />
                  </div>
                  <div className=" w-4/5">
                    <CourseListCardBody
                      name={product.title}
                      rate={product.courseRate}
                      price={product.cost}
                      cardStyle={cardStyle}
                      desc={product.describe}
                      teacher={product.teacherName}
                      situation={product.statusName}
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
        <div className=" max-w-3xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1  gap-y-5 sm:grid-cols-2 sm:gap-x-5  lg:grid-cols-3  xl:gap-x-2 xl:grid-cols-4 2xl:grid-cols-5">
            {product.map((product) => (
              <div key={product.courseId}>
                <div className="relative border  shadow-xl  rounded-2xl cursor-pointer p-2 ">
                  <div className="">
                    <CardHeader
                      imageSrc={product.tumbImageAddress}
                      cardStyle={cardStyle}
                    />
                  </div>
                  <div>
                    <CardBody
                      name={product.title}
                      rate={product.courseRate}
                      price={product.cost}
                      cardStyle={cardStyle}
                      desc={product.describe}
                      teacher={product.teacherName}
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
