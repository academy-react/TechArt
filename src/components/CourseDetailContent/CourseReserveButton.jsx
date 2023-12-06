import React, { useState } from "react";
import { baseUrl } from "../../config";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// const ReserveButton = ({ courseId, token }) => {
const ReserveButton = () => {
  const courseId = "7b41aed7-2576-ee11-b6c7-ca6d3e095898"; //
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OTJkMjQ5My0yMjA3LTRkZGYtYTc4OS03MzE1YTBkMTFhZTIiLCJqdGkiOiJlY2QwNDI0MC1hZTBlLTQ0NTItYmI4Yi0xMzBiNGQ3NjcyNjMiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IkM3Ui8vMTJMTEpORHMwVHJIcEZvWDg2RTJQbTdjUmJlam5wZlZmU0tnbkk9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJTdHVkZW50IiwiQWRtaW5pc3RyYXRvciIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiVG91cm5hbWVudE1lbnRvciJdLCJleHAiOjE3MDE5ODEwNTgsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.xjJoVhQUVKMF4yVHVmToY3UuxfdU_hRD4o1cEgnApwg";

  const handleReserve = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/CourseReserve/ReserveAdd`,
        { courseId: courseId },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        // Successful reservation
        toast.success("دوره با موفقیت رزرو شد");
      } else if (response.status === 409) {
        // Course is already reserved
        toast.warning("این دوره قبلاً رزرو شده است");
      } else {
        // Handle other response statuses if needed
        toast.error("متاسفانه رزرو دوره ناموفق بود");
      }
    } catch (error) {
      // Handle API request errors
      toast.error("متاسفانه مشکلی در ارتباط با سرور پیش آمده است");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleReserve}
        className="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        رزرو دوره
      </button>
      <ToastContainer />
    </>
  );
};

export default ReserveButton;
