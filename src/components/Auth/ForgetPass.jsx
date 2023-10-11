import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import {
  AuthButton,
  AuthHeader,
  AuthInput,
  AuthLink,
} from "./AuthCustomElement";
import { forgetPassSchema } from "../../core/validations/schemas/auth";

import { IoMail } from "react-icons/io5";

const ForgetPass = ({ handlePageChange, handleEmailAddress }) => {
  const onSubmit = (val) => {
    handlePageChange("ForgetPassConfirm");
    handleEmailAddress(val.email);
  };

  return (
    <>
      <FormWrapper>
        <AuthHeader message={"بازیابی رمز عبور"} />

        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgetPassSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <AuthInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
              <IoMail />
            </AuthInput>

            <AuthLink
              message={"عضو سایت هستی؟"}
              handlePageChange={handlePageChange}
              to={"SignIn"}
            />

            <AuthButton message={"ارسال کد"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export { ForgetPass };
