import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config";

const ReserveButton = ({ courseId }) => {
  const [isReserved, setIsReserved] = useState(false);

  const handleReserve = () => {
    // Replace the following URL with your actual reservation API endpoint
    const reservationApiUrl = `${baseUrl}/CourseReserve/ReserveAdd${courseId}`;

    // You can customize the config object with headers, authorization tokens, etc.
    const config = {
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    };

    // Make the API call to reserve the course using Axios
    axios
      .post(reservationApiUrl, null, config)
      .then((response) => {
        if (response.status === 200) {
          setIsReserved(true);
          console.log("Course reserved successfully!");
        } else {
          console.error("Failed to reserve course");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <button onClick={handleReserve} disabled={isReserved}>
      {isReserved ? "Reserved" : "Reserve Now"}
    </button>
  );
};

export default ReserveButton;
