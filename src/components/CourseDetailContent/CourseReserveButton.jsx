import React, { useState } from "react";
import { baseUrl } from "../../config";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ReserveButton = ({ courseId, token }) => {
  const handleReserve = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/CourseReserve/ReserveAdd/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
