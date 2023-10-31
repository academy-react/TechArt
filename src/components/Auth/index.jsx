import React from "react";
import { Outlet } from "react-router-dom";

// Auth Layout Import
import { AuthLayout } from "./AuthLayout";

const Auth = () => {
  return (
    <>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </>
  );
};

export { Auth };
