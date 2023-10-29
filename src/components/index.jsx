import React from "react";
import { Outlet } from "react-router-dom";
import { CourseLayout } from "./CourseLayout";

// Auth Layout Import

const Details = () => {
  return (
    <>
      <CourseLayout>
        <Outlet />
      </CourseLayout>
    </>
  );
};

export { Details };

// import React from "react";
// import { Outlet } from "react-router-dom";

// // Auth Layout Import
// import { AuthLayout } from "./AuthLayout";

// const Auth = () => {
//   return (
//     <>
//       <AuthLayout>
//         <Outlet />
//       </AuthLayout>
//     </>
//   );
// };

// export { Auth };
