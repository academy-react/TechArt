import CardHeading from "./CardHeading";
import { baseUrl } from "../../config";
import React, { useState } from "react";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactForm = () => {
  const initialFormData = {
    Title: "",
    CourseId: "7b41aed7-2576-ee11-b6c7-ca6d3e095898",
    Describe: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onFormData = () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    return data;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Set your token manually here
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OTJkMjQ5My0yMjA3LTRkZGYtYTc4OS03MzE1YTBkMTFhZTIiLCJqdGkiOiJhZDcxYzE2NS1iODE0LTQyNWQtYThmOC1jMmQ4MzMxN2Y3MzMiLCJlbWFpbCI6Im1hc2cxMzc3QGdtYWlsLmNvbSIsIlVpZCI6IkgzNTVJYUQ3Smp4SmNzY2VnR0JoTHR6NzhxMUNPZVhxbEc1V1pQL09RYjg9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJTdHVkZW50IiwiQWRtaW5pc3RyYXRvciIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiVG91cm5hbWVudE1lbnRvciJdLCJleHAiOjE3MDIxNTQxMDYsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.X1OXYOuxYijceLqsQGVyMkWOPabHMTGwRO2nVly5i9Q";

    const data = onFormData();

    try {
      await axios.post(`${baseUrl}/Course/AddCommentCourse`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // Show success message
      toast.success("Comment submitted successfully!", {
        position: "bottom-right",
      });

      // Reset form data after successful submission
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting comment:", error);

      // Show error message
      toast.error("Failed to submit comment. Please try again.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="relative mx-auto max-w-xl">
      <ToastContainer position="bottom-right" />
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            پیام شما
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="Describe"
              rows={4}
              value={formData.Describe}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-lg focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            ثبت نظر
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

// export default function ContactForm() {
//   return (
//     <div className="relative mx-auto max-w-xl">
//       <CardHeading />
//       <div className="mt-6">
//         <form
//           action="#"
//           method="POST"
//           className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
//         >
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700"
//             >
//               پیام شما
//             </label>
//             <div className="mt-1">
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-lg focus:border-indigo-500 focus:ring-indigo-500"
//                 defaultValue={""}
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <button
//               type="submit"
//               className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               ثبت نظر
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
