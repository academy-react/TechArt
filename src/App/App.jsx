import React from "react";
import { useState } from "react";

import "./App.css";
import NewsArticle from "../components/common/NewsArticle/NewsArticle";

//fonts

const App = () => {
  return (
    <div className="	px-px w-auto 	">
      <div>
        <NewsArticle />
      </div>
    </div>
  );
};
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Auth />,
//   },
// ]);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;
