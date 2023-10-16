import React from "react";

import { AuthLink } from "./AuthCustomElement";
import { forgetPassSchema } from "../../core/validations/schemas/auth";

import { IoMail } from "react-icons/io5";
import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";
import { AuthHeading } from "./AuthHeading";
import {
  CustomButton,
  CustomForm,
  CustomInput,
  CustomLink,
} from "../common/customElements";
import ForgetPassSVG from "../../assets/image/ForgetPass.svg";

const ForgetPass = ({ handleStep, handleEmailAddress }) => {
  const onSubmit = (val) => {
    handleEmailAddress(val.email);
    handleStep("ForgetPassConfirm");
    console.log("forgetPass submitted", val);
  };

  return (
    <>
      <SVGSection
        SVGSrc={ForgetPassSVG}
        alt={"Forget Password SVG"}
      ></SVGSection>
      <FormSection>
        <AuthHeading message={"بازیابی رمز عبور"} />
        <CustomForm
          initialValues={{ email: "" }}
          validationSchema={forgetPassSchema}
          onSubmit={onSubmit}
        >
          <CustomInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
            <IoMail />
          </CustomInput>

          <CustomLink to={"/auth"} message={"عضو سایت هستی؟"} />

          <CustomButton message={"ارسال کد"} />
        </CustomForm>
      </FormSection>
    </>
  );
};

export { ForgetPass };
