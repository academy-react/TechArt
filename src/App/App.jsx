import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

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
