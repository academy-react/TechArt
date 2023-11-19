import React from "react";
import { StarRating } from "../StarRating/StarRating";
import { BsFillPersonFill } from "react-icons/bs";
import { CourseCardCapacity } from "./CourseCardCapacity";
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
    <div className="relative  mt-3   flex flex-col  justify-center m-1  ">
      <div className=" w-full h-3/5">
        <div className="  text-xl flex    justify-start  text-black  mr-2 font-bold ">
          {name}
        </div>
        <div className="border mt-3 text-xl  flex overflow-x-hidden w-5/6   justify-start  text-black  mr-2 ">
          {desc}
        </div>
        <div className="w-10 absolute left-0 top-0  "> <CourseCardCapacity/></div>
      </div>


      <div className=" w-full h-1/5 flex flex-row mt-10   font-bold  ">
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
            <StarRating  rate={rate} />
          
        </div>

        <div className=" w-1/4  m-auto">
        <div className=" w-2/3  m-auto rounded-xl  text-red-600 text-l  hover:text-amber-50 hover:bg-lime-700 p-1"> {price} تومان </div>
        </div>


      </div>

      {/* <div className=" w-5/6 flex flex-col ">
      
      

        <div className=" w-full  h-1/3 flex flex-row justify-right px-2  "> <StarRating className="w-full" rate={rate}/></div>
        <div className="border w-2/3   rounded-xl border-green-700 text-green-700 text-l mb-3 hover:text-amber-50 hover:bg-lime-700 p-1"> {price} تومان </div>
       
      </div>
      <div className="border-2  w-1/6  rounded-full m-1 flex flex-col   shadow-lg    ">
        <div className=" border-b-2 text-xl  text-left p-1"><BsFillPersonFill className=" w-full"/></div>
        <div className="border-b-2 w-full     text-sky-600  bg-slate-300 p-1">
          1
        </div>
        <div className=" text-red-700 p-1">1</div>
      </div> */}
    </div>
  );
};

export { CourseListCardBody };
