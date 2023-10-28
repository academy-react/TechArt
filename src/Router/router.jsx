import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { BlogDetailsRouter } from "./BlogDetailsRouter";

const router = createBrowserRouter([...BlogDetailsRouter]);

export { router };
