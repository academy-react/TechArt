import React from "react";
import Courses from "../components/common/Courses/Courses";
import Error404 from "../components/common/Error404.jsx/Error404";
import Landing from "../components/common/Landing/Landing";
import NewsArticle from "../components/common/NewsArticle/NewsArticle";
import CourseList from "../components/common/StudentPannel/CourseList";
import StudentPannel from "../components/common/StudentPannel/Studentpannel";
import { BlogDetailes } from "../screens/BlogDetailes";
import "./App.css";

//fonts

const App = () => {
  return (
    <div className="	px-px w-auto 	">
      <div>
        <CourseList />
      </div>
    </div>
  );
};

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
