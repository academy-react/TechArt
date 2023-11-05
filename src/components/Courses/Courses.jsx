import React, { useState } from "react";
import { Card } from "../common/CourseCard/CourseCard";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { products } from "../../core/data/data";
import { Filter } from "../CourseFilter/Filter";



const Courses = () => {
  const [cardStyle, setCardStyle] = useState(0);
  return (
    <div className="main-div container mx-auto">
      <div className="holder"></div>
      <div className="course-name flex flex-row border w-full justify-center">
        <h3 className="  text-2xl font-bold drop-shadow-lg shadow-black  text-gray-700">
          دوره ها ی آموزشی{" "}
        </h3>
      </div>
      <div className="course-head flex justify-start">
        <div className="list-btn flex flex-row border  lg:w-1/6  sm<:hidden  justify-end text-2xl">
          <div className="border mx-3 p-2" onClick={() => setCardStyle(0)}>
            <BsFillGrid3X3GapFill
              className={cardStyle === 0 ? " border-b-2 border-black " : ""}
            />
          </div>

          <div className="border p-2 " onClick={() => setCardStyle(1)}>
            <BsListUl
              className={cardStyle === 1 ? " border-b-2 border-black " : ""}
            />
          </div>
        </div>
      </div>

      <div className="flex  flex-row">
        <div className=" border-2 course-filter w-1/4 mt-10 p-1">
       
       <Filter />

        </div>
        <div className="course w-3/4 ">
          <Card product={products} cardStyle={cardStyle} />
        </div>
      </div>
    </div>
  );
};

export { Courses };
{
  /* <div className="  text-zinc-900 m-auto">
<div className="courses-head">
  <h3 className="  text-2xl font-bold drop-shadow-lg shadow-black  text-gray-700">
    دوره ها ی آموزشی{" "}
  </h3>
  <div className="  flex flex-row justify-start mx-5 text-2xl ">
    <div className=" flex flex-row w-full mx-2 px-20 justify-start">
      <div
        className="grid-block  ml-2 cursor-pointer  focus:border-black focus:border-2  focus:border-solid  "
        onClick={() => setCardStyle(0)}
      >
        <BsFillGrid3X3GapFill
          className={cardStyle === 0 ? " border-b-2 border-black " : ""}
        />
      </div>

      <div
        className="  grid-tile   cursor-pointer  "
        onClick={() => setCardStyle(1)}
      >
        <BsListUl    className={cardStyle === 1 ? " border-b-2 border-black " : ""}/>
      </div>
    </div>
  </div>
</div>

<div className="courses-body">
  <div className="courses-section">
    <Card product={products} cardStyle={cardStyle} />
  </div>
  <div className="pagination"></div>
</div>
</div> */
}
