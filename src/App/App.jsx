import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import "./App.css";
import { SignUp } from "../components/Sign/SignUp";
import Sign from "../components/Sign/Sign";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
