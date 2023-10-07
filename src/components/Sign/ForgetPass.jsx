import React from "react";
import { Form, Formik } from "formik";

import { FormWrapper } from "./FormWrapper";
import { SignButton } from "./SignCustomElement/SignButton";
import { SignInput } from "./SignCustomElement/SignInput";
import { SignLink } from "./SignCustomElement/SignLink";
import { SignHeader } from "./SignCustomElement/SignHeader";

import { IoMail } from "react-icons/io5";

import { forgetPassSchema } from "../../core/validations/schemas/forgetPassSchema";

const ForgetPass = ({ handlePageChange, handleEmailAddress }) => {
  const onSubmit = (val) => {
    handlePageChange("ForgetPassConfirm");
    handleEmailAddress(val.email);
  };

  return (
    <>
      <FormWrapper>
        <SignHeader message={"بازیابی رمز عبور"} />

        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgetPassSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6" action="#" method="POST">
            <SignInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
              <IoMail />
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

export { ForgetPass };
