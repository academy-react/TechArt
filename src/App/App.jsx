import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import "./App.css";
import { CourseSection } from "../components/Landing/CourseSlider/CourseSection";
import { ProfessorCard } from "../components/ProfessorCard/ProfessorCard";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
