import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'
 
const StarRating = ({rate}) => {
    const [rating , setRating] =useState(rate)
    const [hover , setHover] = useState(null)
  return (
    <>
    {[...Array(5)].map((star,index)=>{
        const currentRating = index+1;
      return(
        <label key={index}>
            <input type="radio"
            name="rating"
            value={rating}
            onClick={()=>setRating(currentRating)}
            className=" hidden"
             />
             <FaStar   size={15}
             color={currentRating <= ( rating ) ? "#ffc107" : "#e4e5e9"}
            // onMouseEnter={()=>setHover(currentRating)}
            // onMouseLeave={()=>setHover(null)}
            /> 
            <div></div>
        </label>
    //   
    ); 
    })

    }
     
    </>
  );
};

export { StarRating };
