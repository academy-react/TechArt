import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
const CourseCardCapacity = () => {
  return (
    <>
      <div className="border-2  rounded-full m-1 flex flex-col   shadow-lg    ">
        <div className=" border-b-2 text-xl  text-left p-1 h-1/3">
          <BsFillPersonFill className=" w-full" />
        </div>
        <div className="border-b-2 w-full     h-1/3 text-sky-600  bg-slate-300 p-1">
          1
        </div>
        <div className=" text-red-700 p-1 h-1/3">1</div>
      </div>
    </>
  );
};

export { CourseCardCapacity };
