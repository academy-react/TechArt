import React from "react";
import { StarRating } from "../StarRating/StarRating";
import { BsFillPersonFill } from "react-icons/bs";
import { CourseCardCapacity } from "./CourseCardCapacity";
import { useNavigate } from "react-router-dom";
const CourseListCardBody = ({
  name,
  desc,
  duration,
  href,
  teacher,
  price,
  rate,
}) => {
  return (
    <div className="relative  mt-3   flex flex-col  justify-center m-1 ">
      <div className=" w-full h-3/5">
        <div className="  text-xl flex    justify-start  text-black  mr-2 ">
          {name}
        </div>
        <div className=" mt-3 text-xl  flex    justify-start  text-black  mr-2 ">
          {desc}
        </div>
        <div className="w-10 absolute left-0 top-0">
          {" "}
          <CourseCardCapacity />
        </div>
      </div>

      <div className=" w-full h-1/5 flex flex-row mt-10   ">
        <div className=" w-1/4 m-auto">
          <h1 className="mt-2  w-full  h-1/3 text-sm text-gray-800 font-sans text-right  pr-2 ">
            مدرس: {teacher}
          </h1>
        </div>

        <div className=" w-1/4 m-auto">
          <h1 className="mt-2  w-full  text-sm text-gray-800 font-sans text-right  pr-2 ">
            مدت زمان دوره: {duration}min
          </h1>
        </div>

        <div className=" w-1/4 h-full   flex flex-row justify-center px-2 align-middle m-auto ">
          <StarRating rate={rate} />
        </div>

        <div className=" w-1/4  m-auto">
          <button className="border w-2/3  m-auto rounded-xl border-green-700 text-green-700 text-l  hover:text-amber-50 hover:bg-lime-700 p-1">
            {price} تومان{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export { CourseListCardBody };
