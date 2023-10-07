import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import { SignButton } from "./SignCustomElement/SignButton";
import { SignInput } from "./SignCustomElement/SignInput";
import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";

import { IoCall } from "react-icons/io5";

import { phoneNumberSchema } from "../../core/validations/schemas/PhoneNumberSchema";

const PhoneRegister = ({ handlePageChange, handlePhoneNumber }) => {
  const onSubmit = (val) => {
    handlePageChange("PhoneConfirm");
    handlePhoneNumber(val.phoneNumber);
  };
  return (
    <>
      <FormWrapper>
        <SignHeader message={"شماره تماس خود را وارد کنید"} />

        <Formik
          initialValues={{ phoneNumber: "" }}
          validationSchema={phoneNumberSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <SignInput name={"phoneNumber"} label={"شماره تماس"} type={"text"}>
              <IoCall />
            </SignInput>

            <SignLink
              message={"عضو سایت هستی؟"}
              handlePageChange={handlePageChange}
              to={"SignIn"}
            />

            <SignButton message={"ارسال کد"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export { PhoneRegister };
