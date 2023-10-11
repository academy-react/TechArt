import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import {
  AuthButton,
  AuthHeader,
  AuthInput,
  AuthLink,
} from "./AuthCustomElement";
import { phoneNumberSchema } from "../../core/validations/schemas/auth";

import { IoCall } from "react-icons/io5";

const PhoneRegister = ({ handlePageChange, handlePhoneNumber }) => {
  const onSubmit = (val) => {
    handlePageChange("PhoneConfirm");
    handlePhoneNumber(val.phoneNumber);
  };
  return (
    <>
      <FormWrapper>
        <AuthHeader message={"شماره تماس خود را وارد کنید"} />

        <Formik
          initialValues={{ phoneNumber: "" }}
          validationSchema={phoneNumberSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <AuthInput name={"phoneNumber"} label={"شماره تماس"} type={"text"}>
              <IoCall />
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

export { PhoneRegister };
