import React, { useState } from "react";
import { Card } from "../common/CourseCard/CourseCard";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { products } from "../../core/data/data";

const Courses = () => {
  const [cardStyle, setCardStyle] = useState(0);
  return (
    <div className="  text-zinc-900 m-auto">
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
    </div>
  );
};

export { Courses };
