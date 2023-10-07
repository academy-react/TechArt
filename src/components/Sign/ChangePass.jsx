import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import { SignButton } from "./SignCustomElement/SignButton";
import { SignInput } from "./SignCustomElement/SignInput";
import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";

import { IoLockClosed } from "react-icons/io5";

import { changePassSchema } from "../../core/validations/schemas/changePassSchema";

const ChangePass = ({ handlePageChange }) => {
  const onSubmit = () => {
    handlePageChange("ChangePassConfirmed");
    console.log("submitted");
  };

  return (
    <>
      <FormWrapper>
        <SignHeader message={"رمز عبور جدید خود را وارد کنید"} />

        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={changePassSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <SignInput
              name={"password"}
              label={"رمز عبور جدید"}
              type={"password"}
            >
              <IoLockClosed />
            </SignInput>

            <SignInput
              name={"confirmPassword"}
              label={"تکرار رمز عبور جدید"}
              type={"password"}
            >
              <IoLockClosed />
            </SignInput>

            <SignLink
              message={"صفحه ورود"}
              handlePageChange={handlePageChange}
              to={"SignIn"}
            />

            <SignButton message={"تایید"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export { ChangePass };
