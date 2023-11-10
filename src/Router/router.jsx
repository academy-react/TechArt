import { createBrowserRouter } from "react-router-dom";
import { BlogDetailsRouter } from "./BlogDetailsRouter";
import { authRouter } from "./authRouter";
import { CourseDetailsRouter } from "./CourseDetailsRouter";
import { Landing } from "../screens/Landing/Landing";
import { CoursePageRouter } from "./CoursePageRouter";
import { CoursePage } from "../screens/CoursePage";
const router = createBrowserRouter([
  ...authRouter,
  ...CourseDetailsRouter,
  ...BlogDetailsRouter,
  ...CoursePageRouter,
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/course",
    element: <CoursePage />,
  },
]);

export { router };
