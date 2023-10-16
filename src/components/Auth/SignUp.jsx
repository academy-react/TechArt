import React from "react";

import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";
import { AuthLink } from "./AuthCustomElement";
import { signUpSchema } from "../../core/validations/schemas/auth";
import SignUpSVG from "../../assets/image/SignUp.svg";
import {
  CustomButton,
  CustomCheckBox,
  CustomForm,
  CustomInput,
  CustomLink,
} from "../common/customElements";
import { AuthHeading } from "./AuthHeading";

import { IoMail, IoLockClosed } from "react-icons/io5";

const SignUp = () => {
  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <SVGSection SVGSrc={SignUpSVG} alt={"Sign Up SVG"}></SVGSection>
      <FormSection>
        <AuthHeading message={"اطلاعات خود را وارد کنید"} />
        <CustomForm
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            agreeTerm: false,
          }}
          validationSchema={signUpSchema}
          onSubmit={onSubmit}
        >
          <CustomInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
            <IoMail />
          </CustomInput>

          <CustomInput name={"password"} label={"رمز عبور"} type={"password"}>
            <IoLockClosed />
          </CustomInput>

          <CustomInput
            name={"confirmPassword"}
            label={"تکرار رمز عبور"}
            type={"password"}
          >
            <IoLockClosed />
          </CustomInput>

          <CustomCheckBox name={"agreeTerm"} message={"با مقررات موافقم"} />

          <CustomLink message={"صفحه ورود"} to={"/auth"} />

          <CustomButton message={"ثبت نام"} />
        </CustomForm>
      </FormSection>
    </>
  );
};

export { SignUp };
