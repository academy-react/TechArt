// TextComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../config";

const TextComponent = () => {
  const [courseDetail, setCourseDetail] = useState({});

  const getcourseDetail = async () => {
    console.log("fetching...");
    const result = await axios.get(
      `${baseUrl}/Home/GetCourseDetails?${courseId}`
    );
    console.log(result.data);
    setCourseDetail(result.data);
  };

  useEffect(() => {
    getcourseDetail();
  }, []);

  console.log(courseDetail);

  return (
    <div>
      <p>{courseDetail?.describe}</p>
    </div>
  );
};

export default TextComponent;
