import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeButton = () => {
  const [isLiked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!isLiked);
  };

  return (
    <div
      className={`flex items-center cursor-pointer ${
        isLiked ? "text-red-500" : ""
      }`}
      onClick={handleLikeClick}
    >
      <FaHeart className="mr-2" />
      <span>{isLiked ? "Liked!" : ""}</span>
    </div>
  );
};

export default LikeButton;
