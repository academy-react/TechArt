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
