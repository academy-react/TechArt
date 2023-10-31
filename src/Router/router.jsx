import { createBrowserRouter } from "react-router-dom";
import { BlogDetailsRouter } from "./BlogDetailsRouter";
import { authRouter } from "./authRouter";
import { CourseDetailsRouter } from "./CourseDetailsRouter";

const router = createBrowserRouter([
  ...authRouter,
  ...CourseDetailsRouter,
  ...BlogDetailsRouter,
]);

export { router };
