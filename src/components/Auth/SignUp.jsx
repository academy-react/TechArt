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
import { signUpSchema } from "../../core/validations/schemas/auth";

import { IoPerson, IoMail, IoLockClosed } from "react-icons/io5";

const SignUp = ({ handlePageChange }) => {
  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <FormWrapper>
        <AuthHeader message={"به اکانت کاربری خود وارد شوید "} />

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreeTerm: false,
          }}
          validationSchema={signUpSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <AuthInput name={"username"} label={"نام کاربری"} type={"text"}>
              <IoPerson />
            </AuthInput>

            <AuthInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
              <IoMail />
            </AuthInput>

            <AuthInput name={"password"} label={"رمز عبور"} type={"password"}>
              <IoLockClosed />
            </AuthInput>

            <AuthInput
              name={"confirmPassword"}
              label={"تکرار رمز عبور"}
              type={"password"}
            >
              <IoLockClosed />
            </AuthInput>

            <AuthCheckBox name={"agreeTerm"} message={"با مقررات موافقم"} />

            <AuthLink
              message={"صفحه ورود"}
              handlePageChange={handlePageChange}
              to={"SignIn"}
            />

            <AuthButton message={"ثبت نام"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export { SignUp };
