import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rate }) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState(null);

  const getRating = async () => {
    console.log("fetching...");
    const result = await axios.get(
      `${baseUrl}/Course/SetCourseRating?CourseId=7b41aed7-2576-ee11-b6c7-ca6d3e095898&RateNumber=2`
    );
    console.log(result.data);
    setRating(result.data);
  };
  useEffect(() => {
    getRating();
  }, []);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={rating}
              onClick={() => setRating(currentRating)}
              className=" hidden"
            />
            <FaStar
              size={15}
              color={currentRating <= rating ? "#ffc107" : "#e4e5e9"}
              // onMouseEnter={()=>setHover(currentRating)}
              // onMouseLeave={()=>setHover(null)}
            />
            <div></div>
          </label>
          //
        );
      })}
    </>
  );
};

export { StarRating };
