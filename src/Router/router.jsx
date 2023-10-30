import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { authRouter } from "./authRouter";
import { CourseList } from "../components/StudentPanel/CourseList";

const router = createBrowserRouter([
  { path: "/", element: <CourseList /> },
  ...authRouter,
]);

export { router };
