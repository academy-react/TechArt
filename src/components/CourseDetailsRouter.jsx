import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { router } from "../Router/router";
import { CourseDetailes } from "../screens/CourseDetailes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CourseDetailes />,
    path: "*",
    element: <h1>Error...</h1>,
  },
]);
