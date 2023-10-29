import React from "react";
import { Outlet } from "react-router-dom";
import { CourseLayout } from "../BlogLayout";

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
