import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import {
  AuthButton,
  AuthHeader,
  AuthInput,
  AuthLink,
} from "./AuthCustomElement";
import { phoneConfirmSchema } from "../../core/validations/schemas/auth";

import { IoShieldCheckmark } from "react-icons/io5";

const PhoneConfirm = ({ handlePageChange, phoneNumber }) => {
  const onSubmit = () => {
    handlePageChange("PhoneConfirmed");
    console.log("submitted");
  };
  return (
    <>
      <FormWrapper>
        <AuthHeader message={"کد تایید دریافتی را وارد کنید"} />

        <div className="font-medium text-gray-600 mb-5">
          <span>شماره وارد شده</span>
          <span className="text-indigo-700">{" " + phoneNumber + " "}</span>
          <span>است</span>
          <AuthLink
            message={"برای تغییر شماره کلیک کنید"}
            handlePageChange={handlePageChange}
            to={"PhoneRegister"}
          />
        </div>

        <Formik
          initialValues={{ confirmCode: "" }}
          validationSchema={phoneConfirmSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <AuthInput name={"confirmCode"} label={"کد تایید"} type={"text"}>
              <IoShieldCheckmark />
            </AuthInput>

            <AuthButton message={"تایید"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export { PhoneConfirm };
