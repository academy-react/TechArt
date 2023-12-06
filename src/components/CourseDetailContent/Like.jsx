import React, { useState, useEffect } from "react";

import { baseUrl } from "../../config";

import axios from "axios";
import { FaHeart } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  // Replace these values with the actual courseId and authToken
  const courseId = "7b41aed7-2576-ee11-b6c7-ca6d3e095898"; // Replace with the actual course ID
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OTJkMjQ5My0yMjA3LTRkZGYtYTc4OS03MzE1YTBkMTFhZTIiLCJqdGkiOiJlY2QwNDI0MC1hZTBlLTQ0NTItYmI4Yi0xMzBiNGQ3NjcyNjMiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IkM3Ui8vMTJMTEpORHMwVHJIcEZvWDg2RTJQbTdjUmJlam5wZlZmU0tnbkk9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJTdHVkZW50IiwiQWRtaW5pc3RyYXRvciIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiVG91cm5hbWVudE1lbnRvciJdLCJleHAiOjE3MDE5ODEwNTgsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.xjJoVhQUVKMF4yVHVmToY3UuxfdU_hRD4o1cEgnApwg";
  const handleLikeClick = async () => {
    try {
      // Make API call to like/unlike course using Axios
      const response = await axios.post(
        `${baseUrl}/Course/AddCourseLike?CourseId=${courseId}`,
        {},
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
        setIsLiked((prev) => !prev); // Toggle the like state
        toast.success("Course liked!"); // Show success toast
      } else {
        // API call failed
        toast.error("Failed to like course. Please try again."); // Show error toast
      }
    } catch (error) {
      console.error("Error making API call:", error);
      toast.error("An error occurred. Please try again."); // Show error toast
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
      <span>{isLiked ? "Liked!" : ""}</span>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default LikeButton;
