import React from "react";
import { Outlet } from "react-router-dom";

// Auth Layout Import
import { AuthLayout } from "./AuthLayout";

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
