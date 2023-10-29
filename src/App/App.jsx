import React from "react";
import { BlogDetailes } from "../screens/BlogDetailes";
import "./App.css";

//fonts

// const App = () => {
//   return (
//     <div className="	px-px w-auto 	">
//       <div>
//         <BlogDetailes />
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
