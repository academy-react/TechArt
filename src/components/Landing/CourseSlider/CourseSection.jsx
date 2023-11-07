import React from "react";
import { Card } from "../../common/CourseCard/CourseCard";
import { products } from "../../../core/data/data";
import { ProfessorCard } from "../../ProfessorCard/ProfessorCard";

const CourseSection = () => {
  return (
    <div className=" overflow-hidden">
      <h4 className=" text-2xl font-bold drop-shadow-lg shadow-black  text-gray-700">
        دوره های آموزشی
      </h4>
      <Card product={products} />
      <div className="flex justify-center">
        <a
          href="#"
          className="relative flex items-center   w-32  h-8 justify-center rounded-xl border border-transparent border-stone-500 hover:bg-amber-100 py-3  p-2 text-sm font-medium hover:text-amber-600 bg-amber-600 text-white"
        >
          مشاهده دوره ها
        </a>
      </div>
      <ProfessorCard/>
    </div>
  );
};

export { CourseSection };
