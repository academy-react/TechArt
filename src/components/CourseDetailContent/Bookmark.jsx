import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const BookmarkButton = () => {
  const [isBookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!isBookmarked);
  };

  return (
    <div
      className={`flex items-center cursor-pointer ${
        isBookmarked ? "text-blue-500" : ""
      }`}
      onClick={handleBookmarkClick}
    >
      <FaBookmark className="mr-2" />
      <span>{isBookmarked ? "Bookmarked!" : ""}</span>
    </div>
  );
};

export default BookmarkButton;
