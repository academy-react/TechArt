import React from "react";

import { AuthLink } from "./AuthCustomElement";
import { changePassSchema } from "../../core/validations/schemas/auth";

import { IoLockClosed } from "react-icons/io5";
import ChangePassSVG from "../../assets/image/ChangePass.svg";
import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";
import { AuthHeading } from "./AuthHeading";
import {
  CustomButton,
  CustomForm,
  CustomInput,
  CustomLink,
} from "../common/customElements";

const ChangePass = ({ handleStep }) => {
  const onSubmit = () => {
    handleStep("ChangePassConfirmed");
    console.log("submitted");
  };

  return (
    <>
      <SVGSection
        SVGSrc={ChangePassSVG}
        alt={"Change Password SVG"}
      ></SVGSection>
      <FormSection>
        <AuthHeading message={"رمز عبور جدید خود را وارد کنید"} />
        <CustomForm
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={changePassSchema}
          onSubmit={onSubmit}
        >
          <CustomInput
            name={"password"}
            label={"رمز عبور جدید"}
            type={"password"}
          >
            <IoLockClosed />
          </CustomInput>

          <CustomInput
            name={"confirmPassword"}
            label={"تکرار رمز عبور جدید"}
            type={"password"}
          >
            <IoLockClosed />
          </CustomInput>

          <CustomLink message={"صفحه ورود"} to={"/auth"} />

          <CustomButton message={"تایید"} />
        </CustomForm>
      </FormSection>
    </>
  );
};

export { ChangePass };
