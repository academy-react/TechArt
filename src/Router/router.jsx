import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { authRouter } from "./authRouter";

const router = createBrowserRouter([...CourseDetailsRouter]);

export { router };
