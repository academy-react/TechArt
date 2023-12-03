import React from "react";
import { useNavigate } from "react-router-dom";

// import { StarRating } from "../StarRating/StarRating";
import { CourseCardCapacity } from "./CourseCardCapacity";
const CardBody = ({ name, teacher, href, rate, price, desc }) => {
  const navigate = useNavigate();
  const gotoDetails = () => {
    console.log("hi");
    navigate("/courseDetail/6c0a12ea-6a73-ee11-b6c7-ca6d3e095898");
  };
  return (
    <div className="relative mt-3   flex  justify-center m-1 ">
      <div className=" w-5/6 flex flex-col ">
        <div className="  text-xl flex    justify-start  text-black  mr-2 ">
          {name}
        </div>

        <h1 className="mt-3  w-full  h-1/3 text-sm text-gray-800 font-sans text-right  pr-2  ">
          مدرس: {teacher}
        </h1>
        {/* <div className=" w-full  h-1/3 flex flex-row justify-right px-2 mt-2 "> <StarRating className="w-full" rate={rate}/></div> */}
        <button
          onClick={gotoDetails}
          className="border w-2/3   rounded-xl border-green-700 text-green-700 text-l mb-3 hover:text-amber-50 hover:bg-lime-700 p-1 mt-2"
        >
          {" "}
          {price} تومان{" "}
        </button>
      </div>

      <CourseCardCapacity />

      {/* <a
      href={href}
      className="relative flex items-center w-[40%] my-4 mx-auto justify-center rounded-md border border-transparent border-stone-600 bg-white py-2  p-3 text-sm font-medium text-amber-600 hover:bg-amber-600 hover:text-white"
    >
      ثبت نام دوره
      <span className="sr-only">, {name}</span>
    </a> */}
    </div>
  );
};

export { CardBody };
