import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import "./App.css";
import { Auth } from "../components/Auth";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
