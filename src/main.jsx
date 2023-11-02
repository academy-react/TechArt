import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  { path:"/News", element: <App/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
