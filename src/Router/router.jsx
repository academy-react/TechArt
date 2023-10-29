import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { authRouter } from "./authRouter";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";


import { BlogDetailsRouter } from "./BlogDetailsRouter";

const router = createBrowserRouter([...BlogDetailsRouter]);

export { router };
