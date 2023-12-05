import { createBrowserRouter } from "react-router-dom";
import { BlogDetailsRouter } from "./BlogDetailsRouter";
import { authRouter } from "./authRouter";
import { CourseDetailsRouter } from "./CourseDetailsRouter";
import { Landing } from "../screens/Landing/Landing";

const Error = () => {
  const errors = useRouteError();

  return <h1>Error occurred: {errors.message}</h1>;
};
const router = createBrowserRouter([
  ...authRouter,
  ...CourseDetailsRouter,
  ...BlogDetailsRouter,
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
]);

export { router };
