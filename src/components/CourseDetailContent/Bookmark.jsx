import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import axios from "axios";
import { baseUrl } from "../../config";

const BookmarkButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBookmarked, setBookmarked] = useState(false);

  // Simulate a simple login function
  const login = () => {
    //  replace this with actual authentication logic
    setIsAuthenticated(true);
  };

  const handleBookmarkClick = async () => {
    if (!isAuthenticated) {
      // Simulate a login if not authenticated
      login();
      // redirect to a login page or show a login modal
    }

    const courseId = "6c0a12ea-6a73-ee11-b6c7-ca6d3e095898";

    try {
      const response = await axios.post(`${baseUrl}/Course/AddCourseFavorite`, {
        UserId: 1,
        CourseId: courseId,
      });

      if (response.status === 200) {
        setBookmarked(!isBookmarked);
        console.log(
          isBookmarked ? "Removed from favorites" : "Added to favorites"
        );
      } else {
        console.error("Failed to update favorites. Response:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
