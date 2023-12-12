import React from "react";

import { phoneNumberSchema } from "../../core/validations/schemas/auth";
import PhoneRegisterSVG from "../../assets/image/PhoneRegister.svg";

import { IoCall } from "react-icons/io5";
import { AuthHeading } from "./AuthHeading";
import {
  CustomButton,
  CustomForm,
  CustomInput,
  CustomLink,
} from "../common/customElements";
import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";

const PhoneRegister = ({ handleStep, handlePhoneNumber }) => {
  const onSubmit = (val) => {
    handlePhoneNumber(val.phoneNumber);
    handleStep("PhoneConfirm");
    console.log("phoneRegister submitted", val.phoneNumber);
  };

  return (
    <>
      <SVGSection
        SVGSrc={PhoneRegisterSVG}
        alt={"Phone Register SVG"}
      ></SVGSection>
      <FormSection>
        <AuthHeading message={"شماره تماس خود را وارد کنید"} />
        <CustomForm
          initialValues={{ phoneNumber:"09111111111"}}
          validationSchema={phoneNumberSchema}
          onSubmit={onSubmit}
        >
          <CustomInput name={"phoneNumber"} label={"شماره تماس"} type={"text"}>
            <IoCall />
          </CustomInput>

          <CustomLink to={"/auth"} message={"عضو سایت هستی؟"} />

          <CustomButton message={"ارسال کد"} />
        </CustomForm>
      </FormSection>
    </>
  );
};

export { PhoneRegister };
