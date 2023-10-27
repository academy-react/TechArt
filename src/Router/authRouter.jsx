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
        path: "",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      { path: "forgetPass", element: <ForgetPassPage /> },
      { path: "changePass", element: <ChangePassPage /> },
    ],
  },
];

export { authRouter };
