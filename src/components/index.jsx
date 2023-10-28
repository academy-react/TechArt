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
