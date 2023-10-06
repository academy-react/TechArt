import React from "react";

import { Form, Formik } from "formik";

import { SignButton } from "./SignCustomElement/SignButton";
import { SignCheckBox } from "./SignCustomElement/SignCheckBox";
import { SignInput } from "./SignCustomElement/SignInput";
import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";

import { IoMail, IoLockClosed } from "react-icons/io5";

import { signInSchema } from "../../core/validations/schemas/signInSchema";

function SignIn({ handlePageChange }) {
  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <SignHeader message={"به اکانت کاربری خود وارد شوید "} />

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-6" action="#" method="POST">
          <SignInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
            <IoMail />
          </SignInput>

          <SignInput name={"password"} label={"رمز عبور"} type={"password"}>
            <IoLockClosed />
          </SignInput>

          <SignCheckBox name={"rememberMe"} message={"مرا به خاطر بسپار"} />
          <SignLink
            message={"رمز عبورت رو  فراموش کردی؟"}
            handlePageChange={handlePageChange}
            to={"ForgetPass"}
          />

          <SignLink
            message={"هنوز عضو سایت نشدی؟!"}
            handlePageChange={handlePageChange}
            to={"SignUp"}
          />

          <SignButton message={"ورود"} />
        </Form>
      </Formik>
    </>
  );
}
export { SignIn };
