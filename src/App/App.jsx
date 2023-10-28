import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import { useState } from "react";
import { CourseDetailes } from "../screens/CourseDetailes";
import "./App.css";

//fonts

// const App = () => {
//   return (
//     <div className="	px-px w-auto 	">
//       <div>
//         <CourseDetailes />
//       </div>
//     </div>
//   );
// };

// export default App;
/////

const router = createBrowserRouter([
  {
    path: "/",
    element: <CourseDetailes />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
