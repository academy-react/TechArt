import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import {
  AuthButton,
  AuthCheckBox,
  AuthHeader,
  AuthInput,
  AuthLink,
} from "./AuthCustomElement";
import { signInSchema } from "../../core/validations/schemas/auth";

import { IoMail, IoLockClosed } from "react-icons/io5";

function SignIn({ handlePageChange }) {
  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <FormWrapper>
        <AuthHeader message={"به اکانت کاربری خود وارد شوید "} />

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <AuthInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
              <IoMail />
            </AuthInput>

            <AuthInput name={"password"} label={"رمز عبور"} type={"password"}>
              <IoLockClosed />
            </AuthInput>

            <AuthCheckBox name={"rememberMe"} message={"مرا به خاطر بسپار"} />
            <AuthLink
              message={"رمز عبورت رو  فراموش کردی؟"}
              handlePageChange={handlePageChange}
              to={"ForgetPass"}
            />

            <AuthLink
              message={"هنوز عضو سایت نشدی؟!"}
              handlePageChange={handlePageChange}
              to={"PhoneRegister"}
            />

            <AuthButton message={"ورود"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
}
export { SignIn };
