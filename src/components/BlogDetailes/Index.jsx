import React from "react";
import { Outlet } from "react-router-dom";

// Auth Layout Import

const Details = () => {
  return (
    <>
      <BlogLayout>
        <Outlet />
      </BlogLayout>
    </>
  );
};

export { Details };
