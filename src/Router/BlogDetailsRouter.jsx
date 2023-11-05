import React from "react";
import BlogDetailContent from "../components/BlogDetailes/BlogDetailContent";
import { BlogDetailes } from "../screens/BlogDetailes";
import BlogDetailHolder from "./../components/BlogDetailes/BlogDetailHolder";

const BlogDetailsRouter = [
  {
    path: "/",
    element: <BlogDetailes />,
  },
];
export { BlogDetailsRouter };