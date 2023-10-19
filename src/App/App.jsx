import { useState } from "react";
import "./App.css";
import { CourseSection } from "../components/Landing/CourseSlider/CourseSection";
import { ProfessorCard } from "../components/ProfessorCard/ProfessorCard";


function App() {
  return (
    <>
      <CourseSection/>
      <ProfessorCard/>
    </>
  );
}

export default App;
