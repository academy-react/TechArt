import { useState } from "react";

import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import { Header } from "../components/common/Header/Header";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Auth />,
//   },
// ]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Header />
    </>
  );
}

export default App;
