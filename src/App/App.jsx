import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import { useState } from "react";
import { CourseDetailes } from "../screens/CourseDetailes";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
