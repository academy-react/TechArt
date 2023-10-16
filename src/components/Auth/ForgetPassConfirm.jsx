import React from "react";

import { AuthLink, AuthTimer } from "./AuthCustomElement";
import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";
import { AuthHeading } from "./AuthHeading";
import ForgetPassConfirmSVG from "../../assets/image/ForgetPassConfirm.svg";
import { CustomLink } from "../common/customElements";
import { useNavigate } from "react-router-dom";

const ForgetPassConfirm = ({ emailAddress }) => {
  const navigate = useNavigate();
  return (
    <>
      <SVGSection
        SVGSrc={ForgetPassConfirmSVG}
        alt={"Forget Password Confirmed SVG"}
      ></SVGSection>
      <FormSection>
        <AuthHeading message={"تغییر رمز عبور"} />

        <div className="font-medium text-gray-600 mb-5">
          <span>پیام حاوی لینک تغییر رمز عبور به آدرس ایمیل</span>
          <span className="text-indigo-700">{" " + emailAddress + " "}</span>
          <span>ارسال شده است</span>
        </div>

        <AuthTimer
          seconds={"10"}
          func={() => {
            navigate("/auth");
          }}
          goToLabel={"ورود"}
        />

        <CustomLink to={"/auth"} message={"انتقال به صفحه ورود"} />
      </FormSection>
    </>
  );
};

export { ForgetPassConfirm };
