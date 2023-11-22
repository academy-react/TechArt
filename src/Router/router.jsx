import { createBrowserRouter } from "react-router-dom";
import { authRouter } from "./authRouter";

const router = createBrowserRouter([...authRouter]);

export { router };
