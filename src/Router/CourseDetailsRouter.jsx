import React from "react";
import CourseDetailContent from "../components/CourseDetailContent/CourseDetailContent";
import { CourseDetailes } from "../screens/CourseDetailes";

const CourseDetailsRouter = [
  {
    path: "/courseDetail/:courseId",
    element: <CourseDetailes />,
  },
];
export { CourseDetailsRouter };
