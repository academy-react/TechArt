import { createBrowserRouter } from "react-router-dom";
import { BlogDetailsRouter } from "./BlogDetailsRouter";
import { authRouter } from "./authRouter";
import { CourseDetailsRouter } from "./CourseDetailsRouter";
import { Landing } from "../screens/Landing/Landing";
import { NewsRouter } from "./NewsRouter";
import { DashboardRouter } from "./DashboardRouter";
const Error = () => {
  const errors = useRouteError();

  return <h1>Error occurred: {errors.message}</h1>;
};
import { EditProfile } from "../components/StudentPanel/EditProfile";
const router = createBrowserRouter([
  ...authRouter,
  ...CourseDetailsRouter,
  ...BlogDetailsRouter,
  ...NewsRouter,
  ...DashboardRouter,
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/edit",
    element: <EditProfile />,
  },
]);

export { router };
