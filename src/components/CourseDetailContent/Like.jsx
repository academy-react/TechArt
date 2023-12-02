import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { baseUrl } from "../../config";

const LikeButton = () => {
  const [isLiked, setLiked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate a simple login function
  const login = () => {
    // Replace this with your actual authentication logic
    setIsAuthenticated(true);
  };

  useEffect(() => {
    // Check authentication status on component mount
    // You may want to replace this with your actual authentication check logic
    // For simplicity, let's assume the user is authenticated if user ID is set to 2
    if (localStorage.getItem("userId") === "2") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLikeClick = async () => {
    if (!isAuthenticated) {
      // Simulate a login if not authenticated
      login();
      //might redirect to a login page or show a login modal
    }

    const courseId = "a1ba0835-2676-ee11-b6c7-ca6d3e095898";
    const userId = "2"; // Replace with the actual user ID

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OTJkMjQ5My0yMjA3LTRkZGYtYTc4OS03MzE1YTBkMTFhZTIiLCJqdGkiOiIyYmYzN2E3My1iMTY0LTRmMDMtOWYxZC1lYzA0MGQ3ZjU5MDAiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IndRTFZMUEp3MlQrZjgyS0t5N3ZjT0R5ODQ0VUhKN3lXYnBqbC9TMmtCQ0E9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJTdHVkZW50IiwiQWRtaW5pc3RyYXRvciIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiVG91cm5hbWVudE1lbnRvciJdLCJleHAiOjE3MDE0NjExNzMsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.7lYZv1E5FnuUgQzeRLyeLxHyQx-1qYXJbe9dtDKlxcs"; // Replace with your actual token

    try {
      const response = await axios.post(
        `${baseUrl}/Course/AddCourseLike`,
        {
          CourseId: courseId,
          UserId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setLiked(!isLiked);
        console.log(isLiked ? "Unliked!" : "Liked!");
      } else {
        console.error("Failed to update likes. Response:", response);
      }
    } catch (error) {
      console.error("Error:", error);
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
    </div>
  );
};

export default LikeButton;
