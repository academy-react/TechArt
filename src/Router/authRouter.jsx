import React from "react";
import { Auth } from "../components/Auth";
import { LoginPage } from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import { ForgetPassPage } from "../screens/ForgetPassPage";
import { ChangePassPage } from "../screens/ChangePassPage";

const authRouter = [
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
      { path: "/auth/forgetPass", element: <ForgetPassPage /> },
      { path: "/auth/changePass", element: <ChangePassPage /> },
    ],
  },
];

export { authRouter };
