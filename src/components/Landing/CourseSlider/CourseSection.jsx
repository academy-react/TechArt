import React from "react";
import { Card } from "../../common/CourseCard/CourseCard";
import { products } from "../../../core/data/data";

const CourseSection = () => {
  return (
    <div>
      <h4 className=" text-2xl font-bold drop-shadow-lg shadow-black  text-gray-700">
        دوره های آموزشی
      </h4>
      <Card product={products} />
    </div>
  );
};

export { CourseSection };
