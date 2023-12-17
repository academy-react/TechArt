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
import { loginAPI } from "../../core/services/api/auth";
import { useEffect } from "react";
import { useState } from "react";
// import { setItem } from "../../core/services/common/storage.services";

function SignIn() {
  const [userObj, setUserObj] = useState();

  const [signInData, setSignInData] = useState([]); // Change to null for initial state
  const [signFormData, setSignFormData] = useState(null); // Change to null for initial state

  const onSubmit = (formData) => {
    // Ensure formData is properly received
    console.log("Form Data:", formData);

    setSignFormData(formData);

    const { email, password, rememberMe } = formData;

    const shouldRemember = !!rememberMe;

    setUserObj({
      phoneOrGmail: email,
      password: password,
      rememberMe: shouldRemember,
    });
    if (shouldRemember) {
      // Store the password in local storage if Remember Me is checked
      //  setItem("rememberedPassword", password);
    }

    console.log("User Object:", userObj); // Check userObj after updating
    SignInUser();
  };

  const SignInUser = async () => {
    console.log("User Object in SignInUser:", userObj); // Check userObj here
    const user = await loginAPI(userObj);

    console.log("API Response:", user); // Check the API response

    setSignInData(user);
  };

  useEffect(() => {}, []);

  return (
    <>
      <SVGSection SVGSrc={SignInSVG} alt={"Sign In SVG"}></SVGSection>
      <FormSection>
        <AuthHeading message={signInData.message} />
        <CustomForm
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
        >
          <CustomInput
            id="email"
            name={"email"}
            label={"آدرس ایمیل"}
            type={"text"}
          >
            <IoMail />
          </CustomInput>

          <CustomInput
            id="password"
            name={"password"}
            label={"رمز عبور"}
            type={"password"}
          >
            <IoLockClosed />
          </CustomInput>

          <CustomCheckBox
            id="rememberMe"
            name={"rememberMe"}
            message={"مرا به خاطر بسپار"}
          />
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
