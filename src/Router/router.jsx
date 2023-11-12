import { createBrowserRouter } from "react-router-dom";
import { EditProfile } from "../components/StudentPanel/EditProfile/EditProfile";

const router = createBrowserRouter([{ path: "/", element: <EditProfile /> }]);

export { router };
