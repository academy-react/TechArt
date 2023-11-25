// TextComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../config";

const TextComponent = () => {
  const [courseDetail, setCourseDetail] = useState({});

  const getcourseDetail = async () => {
    console.log("fetching...");
    const result = await axios.get(
      `${baseUrl}/Home/GetCourseDetails?CourseId=6c0a12ea-6a73-ee11-b6c7-ca6d3e095898`
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
