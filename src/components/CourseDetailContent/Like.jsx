import React, { useState, useEffect } from "react";

import { baseUrl } from "../../config";

import axios from "axios";
import { FaHeart } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

const LikeButton = () => {
  const courseId = "7b41aed7-2576-ee11-b6c7-ca6d3e095898";
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OTJkMjQ5My0yMjA3LTRkZGYtYTc4OS03MzE1YTBkMTFhZTIiLCJqdGkiOiJlY2QwNDI0MC1hZTBlLTQ0NTItYmI4Yi0xMzBiNGQ3NjcyNjMiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IkM3Ui8vMTJMTEpORHMwVHJIcEZvWDg2RTJQbTdjUmJlam5wZlZmU0tnbkk9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJTdHVkZW50IiwiQWRtaW5pc3RyYXRvciIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiVG91cm5hbWVudE1lbnRvciJdLCJleHAiOjE3MDE5ODEwNTgsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.xjJoVhQUVKMF4yVHVmToY3UuxfdU_hRD4o1cEgnApwg"; // Replace with your actual auth token

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
