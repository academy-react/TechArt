import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import {
  AuthButton,
  AuthHeader,
  AuthInput,
  AuthLink,
} from "./AuthCustomElement";
import { changePassSchema } from "../../core/validations/schemas/auth";

import { IoLockClosed } from "react-icons/io5";

const ChangePass = ({ handlePageChange }) => {
  const onSubmit = () => {
    handlePageChange("ChangePassConfirmed");
    console.log("submitted");
  };

  return (
    <>
      <FormWrapper>
        <AuthHeader message={"رمز عبور جدید خود را وارد کنید"} />

        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={changePassSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <AuthInput
              name={"password"}
              label={"رمز عبور جدید"}
              type={"password"}
            >
              <IoLockClosed />
            </AuthInput>

            <AuthInput
              name={"confirmPassword"}
              label={"تکرار رمز عبور جدید"}
              type={"password"}
            >
              <IoLockClosed />
            </AuthInput>

            <AuthLink
              message={"صفحه ورود"}
              handlePageChange={handlePageChange}
              to={"SignIn"}
            />

            <AuthButton message={"تایید"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export { ChangePass };
