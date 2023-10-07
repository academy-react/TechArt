import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import { SignButton } from "./SignCustomElement/SignButton";
import { SignInput } from "./SignCustomElement/SignInput";
import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";

import { IoShieldCheckmark } from "react-icons/io5";

import { phoneConfirmSchema } from "../../core/validations/schemas/phoneConfirmSchema";

const PhoneConfirm = ({ handlePageChange, phoneNumber }) => {
  const onSubmit = () => {
    handlePageChange("PhoneConfirmed");
    console.log("submitted");
  };
  return (
    <>
      <FormWrapper>
        <SignHeader message={"کد تایید دریافتی را وارد کنید"} />

        <div className="font-medium text-gray-600 mb-5">
          <span>شماره وارد شده</span>
          <span className="text-indigo-700">{" " + phoneNumber + " "}</span>
          <span>است</span>
          <SignLink
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
            <SignInput name={"confirmCode"} label={"کد تایید"} type={"text"}>
              <IoShieldCheckmark />
            </SignInput>

            <SignButton message={"تایید"} />
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export { PhoneConfirm };
