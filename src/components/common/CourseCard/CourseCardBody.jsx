import React from "react";

import { StarRating } from "../StarRating/StarRating";
import { CourseCardCapacity } from "./CourseCardCapacity";
const CardBody = ({ name, teacher, href, rate, price, desc }) => {
  return (
    <div className="relative mt-3   flex  justify-center m-1 ">
      <div className=" w-5/6 flex flex-col ">
        <div className="  text-xl flex    justify-start  text-black  mr-2 ">
          {name}
        </div>

        <h1 className="mt-3  w-full  h-1/3 text-sm text-gray-800 font-sans text-right  pr-2  ">
          مدرس: {teacher}
        </h1>
        <div className=" w-full  h-1/3 flex flex-row justify-right px-2 mt-2 ">
          <StarRating className="w-full" rate={rate} />
        </div>
        <div className=" w-2/3   rounded-xl text-green-700 text-l mb-3 hover:text-amber-50 hover:bg-lime-700 p-1 mt-2">
          {price} تومان
        </div>
        <div>
          <a
            href={href}
            className="relative flex items-center my-1 mx-auto justify-center rounded-md border border-transparent border-stone-600 bg-white  text-sm font-medium text-amber-600 hover:text-green-700 "
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
