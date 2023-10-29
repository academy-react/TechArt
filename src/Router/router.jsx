import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { authRouter } from "./authRouter";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import { CourseDetailsRouter } from "./CourseDetailsRouter";

import { BlogDetailsRouter } from "./BlogDetailsRouter";

const router = createBrowserRouter([...CourseDetailsRouter]);

export { router };
