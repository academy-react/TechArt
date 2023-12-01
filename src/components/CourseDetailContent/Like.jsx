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

    if (localStorage.getItem("userId") === "2") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLikeClick = async () => {
    if (!isAuthenticated) {
      // Simulate a login if not authenticated
      login();
      // In a real-world scenario, you might redirect to a login page or show a login modal
    }

    const courseId = "a1ba0835-2676-ee11-b6c7-ca6d3e095898";
    const userId = "1"; // Replace with the actual user ID

    try {
      const response = await axios.post(`${baseUrl}/Course/AddCourseLike`, {
        CourseId: courseId,
        UserId: userId,
      });

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
