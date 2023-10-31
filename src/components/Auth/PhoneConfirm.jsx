import React from "react";

import { AuthLink } from "./AuthCustomElement";
import { phoneConfirmSchema } from "../../core/validations/schemas/auth";

import { IoShieldCheckmark } from "react-icons/io5";
import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";
import { AuthHeading } from "./AuthHeading";
import {
  CustomButton,
  CustomForm,
  CustomInput,
  CustomLink,
} from "../common/customElements";

import PhoneConfirmSVG from "../../assets/image/PhoneConfirm.svg";

const PhoneConfirm = ({ handleStep, phoneNumber }) => {
  const onSubmit = () => {
    handleStep("PhoneConfirmed");
    console.log("submitted");
  };
  return (
    <>
      <SVGSection
        SVGSrc={PhoneConfirmSVG}
        alt={"Phone Confirm SVG"}
      ></SVGSection>
      <FormSection>
        <AuthHeading message={"کد تایید دریافتی را وارد کنید"} />
        <div className="font-medium text-gray-600 mb-5">
          <span>شماره وارد شده</span>
          <span className="text-indigo-700">{" " + phoneNumber + " "}</span>
          <span>است</span>
          <AuthLink message={"برای تغییر شماره کلیک کنید"} />
        </div>
        <CustomForm
          initialValues={{ confirmCode: "" }}
          validationSchema={phoneConfirmSchema}
          onSubmit={onSubmit}
        >
          <CustomInput name={"confirmCode"} label={"کد تایید"} type={"text"}>
            <IoShieldCheckmark />
          </CustomInput>

          <CustomLink to={"/Auth"} message={"عضو سایت هستی؟"} />

          <CustomButton message={"تایید"} />
        </CustomForm>
      </FormSection>
    </>
  );
};

export { PhoneConfirm };
