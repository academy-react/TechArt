import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import { SignButton } from "./SignCustomElement/SignButton";
import { SignCheckBox } from "./SignCustomElement/SignCheckBox";
import { SignInput } from "./SignCustomElement/SignInput";
import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";

import { IoPerson, IoMail, IoLockClosed } from "react-icons/io5";

import { signUpSchema } from "../../core/validations/schemas/signUpSchema";

const SignUp = ({ handlePageChange }) => {
  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <FormWrapper>
        <SignHeader message={"به اکانت کاربری خود وارد شوید "} />

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
            <SignInput name={"username"} label={"نام کاربری"} type={"text"}>
              <IoPerson />
            </SignInput>

            <SignInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
              <IoMail />
            </SignInput>

            <SignInput name={"password"} label={"رمز عبور"} type={"password"}>
              <IoLockClosed />
            </SignInput>

            <SignInput
              name={"confirmPassword"}
              label={"تکرار رمز عبور"}
              type={"password"}
            >
              <IoLockClosed />
            </SignInput>

            <SignCheckBox name={"agreeTerm"} message={"با مقررات موافقم"} />

            <SignLink
              message={"صفحه ورود"}
              handlePageChange={handlePageChange}
              to={"SignIn"}
            />

            <SignButton message={"ثبت نام"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export { SignUp };
