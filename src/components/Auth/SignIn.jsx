import React from "react";

import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";
import { AuthLink } from "./AuthCustomElement";
import SignInSVG from "../../assets/image/SignIn.svg";
import { signInSchema } from "../../core/validations/schemas/auth";
import {
  CustomButton,
  CustomCheckBox,
  CustomForm,
  CustomInput,
  CustomLink,
} from "../common/customElements";
import { AuthHeading } from "./AuthHeading";

import { IoMail, IoLockClosed } from "react-icons/io5";

function SignIn() {
  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <SVGSection SVGSrc={SignInSVG} alt={"Sign In SVG"}></SVGSection>
      <FormSection>
        <AuthHeading message={"به اکانت کاربری خود وارد شوید "} />
        <CustomForm
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
        >
          <CustomInput name={"email"} label={"آدرس ایمیل"} type={"text"}>
            <IoMail />
          </CustomInput>

          <CustomInput name={"password"} label={"رمز عبور"} type={"password"}>
            <IoLockClosed />
          </CustomInput>

          <CustomCheckBox name={"rememberMe"} message={"مرا به خاطر بسپار"} />
          <CustomLink
            to={"forgetPass"}
            message={"رمز عبورت رو  فراموش کردی؟"}
          />

          <CustomLink to={"register"} message={"هنوز عضو سایت نشدی؟!"} />

          <CustomButton message={"ورود"} />
        </CustomForm>
      </FormSection>
    </>
  );
}
export { SignIn };
