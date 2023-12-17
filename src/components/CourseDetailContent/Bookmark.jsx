import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import axios from "axios";
import { baseUrl } from "../../config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookmarkButton = () => {
  const courseId = "7b41aed7-2576-ee11-b6c7-ca6d3e095898"; //
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OTJkMjQ5My0yMjA3LTRkZGYtYTc4OS03MzE1YTBkMTFhZTIiLCJqdGkiOiI3OWRmYzcxYi1jYzQyLTRlYjQtOTA2OS03ODg0NzA5N2I0MjYiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IkVFZHY3RS9UeHZKMDJTK2h2SGdocWI4VmQzWjIxZG1FTGtraG9nRGpkeWM9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJBZG1pbmlzdHJhdG9yIiwiUmVmZXJlZSIsIlRvdXJuYW1lbnRNZW50b3IiLCJUZWFjaGVyIiwiRW1wbG95ZWUuQWRtaW4iLCJTdHVkZW50Il0sImV4cCI6MTcwMjkwNTc0OCwiaXNzIjoiU2VwZWhyQWNhZGVteSIsImF1ZCI6IlNlcGVockFjYWRlbXkifQ.P3Z8PI1Ys0z92e1i-9F1U_inFT6t7HLOrudKKZeyhn0";
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = async () => {
    try {
      // Make API call to add/remove bookmark using Axios
      const response = await axios.post(
        `${baseUrl}/Course/AddCourseFavorite`,
        { courseId: courseId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Include the authorization token in the header
            // Include any additional headers if required
          },
        }
      );

      if (response.status === 200) {
        // API call successful
        setIsBookmarked((prev) => !prev); // Toggle the bookmark state
        toast.success("Course bookmarked!"); // Show success toast
      } else {
        // API call failed
        toast.error("Failed to bookmark course. Please try again."); // Show error toast
      }
    } catch (error) {
      console.error("Error making API call:", error);
      toast.error("An error occurred. Please try again."); // Show error toast
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
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default BookmarkButton;
