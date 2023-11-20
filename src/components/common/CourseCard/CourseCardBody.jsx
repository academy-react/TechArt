import React from "react";

import { StarRating } from "../StarRating/StarRating";
import { CourseCardCapacity } from "./CourseCardCapacity";
const CardBody = ({ name, teacher, href, rate, price, desc }) => {
  return (
    <div className="relative mt-3   flex  justify-center m-1 ">
      <div className=" w-5/6 flex flex-col ">
        <div className="  text-md text-right flex    justify-start  font-bold text-black  mr-2 h-20 ">
          {name}
        </div>

        <h1 className="mt-3  w-full  h-1/3 text-sm font-bold text-gray-800 font-sans text-right  pr-1   ">
          مدرس: {teacher}
        </h1>
        <div className=" w-full  h-1/3 flex flex-row justify-center px-1  mt-1 ">
          <StarRating className="w-full" rate={rate} />
        </div>
        <div className="    rounded-xl text-red-700 font-bold  mb-3 p-1 ">
          {price} تومان
        </div>
        <div>
          <a
            href={href}
            className=" relative  mx-auto py-1 px-2  justify-center border rounded-xl  border-green-600 bg-white  text-sm font-medium text-green-600 hover:text-white hover:bg-green-500 "
          >
            ثبت نام دوره
            <span className="sr-only">, {name}</span>
          </a>
        </div>
      </div>

      <CourseCardCapacity />
    </div>
  );
};

export { CardBody };
