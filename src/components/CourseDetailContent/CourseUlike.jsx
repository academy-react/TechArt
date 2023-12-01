import axios from "axios";
import React, { useEffect, useState } from "react";
// import image from "../../assets/image/CourseDetails/01.png";
import { baseUrl } from "./../../config/index";

const CourseUlike = () => {
  const [coursetop, setCourseTop] = useState([]);

  const getCourseTop = async () => {
    console.log("fetching...");
    const result = await axios.get(`${baseUrl}/Home/GetCoursesTop?Count=3`);
    console.log(result.data);
    setCourseTop(result.data);
  };

  useEffect(() => {
    getCourseTop();
  }, []);

  console.log(coursetop);

  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-lg font-bold leading-6 text-gray-900">
          دوره های برتر
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          دوره هایی که بیشترین رضایت را داشته اند
        </p>
      </div>
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {coursetop.map((card, index) => (
            <div
              key={index}
              className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
            >
              <img
                className="rounded-2xl		 mx-auto mt-[-3rem] bg-white"
                src={card.tumbImageAddress}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-8">
                {card.title}
              </h2>
              <p className="text-center text-xl font-bold">{card.statusName}</p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8"> {card.teacherName}</p>
              </div>
              <button
                className={`bg-teal-500 hover:text-white	 hover:bg-blue-500 duration-150  rounded-md font-medium my-6 mx-auto px-6 py-3`}
              >
                شروع دوره
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseUlike;
