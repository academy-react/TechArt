import { createBrowserRouter } from "react-router-dom";
import { NewsRouter } from "./NewsRouter";

const router = createBrowserRouter([...NewsRouter]);

export { router };
