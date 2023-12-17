import React, { useState, useEffect } from "react";

import { baseUrl } from "../../config";

import axios from "axios";
import { FaHeart } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

const LikeButton = () => {
  const courseId = "7b41aed7-2576-ee11-b6c7-ca6d3e095898";
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OTJkMjQ5My0yMjA3LTRkZGYtYTc4OS03MzE1YTBkMTFhZTIiLCJqdGkiOiI3OWRmYzcxYi1jYzQyLTRlYjQtOTA2OS03ODg0NzA5N2I0MjYiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IkVFZHY3RS9UeHZKMDJTK2h2SGdocWI4VmQzWjIxZG1FTGtraG9nRGpkeWM9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJBZG1pbmlzdHJhdG9yIiwiUmVmZXJlZSIsIlRvdXJuYW1lbnRNZW50b3IiLCJUZWFjaGVyIiwiRW1wbG95ZWUuQWRtaW4iLCJTdHVkZW50Il0sImV4cCI6MTcwMjkwNTc0OCwiaXNzIjoiU2VwZWhyQWNhZGVteSIsImF1ZCI6IlNlcGVockFjYWRlbXkifQ.P3Z8PI1Ys0z92e1i-9F1U_inFT6t7HLOrudKKZeyhn0";
  const [isLiked, setLiked] = useState(false);

  const handleLikeClick = async () => {
    try {
      if (isLiked) {
        // Unlike
        await axios.delete(`${baseUrl}/Course/DeleteCourseLike`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          data: { courseId: courseId }, // Send courseId in the request body
        });
      } else {
        // Like
        await axios.post(
          `${baseUrl}/Course/AddCourseLike?CourseId=${courseId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
      }

      // Update the like state or perform any other necessary actions
      setLiked(!isLiked);
      const message = isLiked ? "Disliked!" : "Liked!";
      toast.info(message);
    } catch (error) {
      console.error("Error making API request:", error);
      // Handle error as needed
      toast.error("Failed to perform action. Please try again.");
    }
  };

  return (
    <div
      className={`flex items-center cursor-pointer ${
        isLiked ? "text-red-500" : ""
      }`}
      onClick={handleLikeClick}
    >
      <FaHeart className="mr-2" />
      <span>{isLiked ? "Liked!" : "Like"}</span>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default LikeButton;
