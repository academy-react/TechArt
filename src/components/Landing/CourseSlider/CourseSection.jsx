import React, { useState } from "react";
import { Card } from "../../common/CourseCard/CourseCard";
import { products } from "../../../core/data/data";
import { ProfessorCard } from "../../ProfessorCard/ProfessorCard";
import { useEffect } from "react";

const CourseSection = () => {
  const [course, setCourses] = useState(products);

  const sortByRate = () => {
    const courseCopy = [...course];
    courseCopy.sort((A, B) => {
    
        return B.rate - A.rate;
      
    });
    setCourses(courseCopy.slice(0,4));
  };
  useEffect(() => {
    sortByRate();
  });

  return (
    <div className=" overflow-hidden ">
      <h4 className=" text-2xl font-bold drop-shadow-lg shadow-black  text-gray-700">
        دوره های آموزشی
      </h4>
      <div className="  ">
        <Card product={course} numberOfCard={4} />
      </div>

      <div className="flex justify-center">
        <a
          href="#"
          className="relative flex items-center   w-32  h-8 justify-center rounded-xl border border-transparent border-stone-500 hover:bg-amber-100 py-3  p-2 text-sm font-medium hover:text-amber-600 bg-amber-600 text-white"
        >
          مشاهده دوره ها
        </a>
      </div>
      <ProfessorCard />
    </div>
  );
};

export { CourseSection };
