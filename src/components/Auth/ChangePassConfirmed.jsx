import React from "react";

import { AuthTimer } from "./AuthCustomElement";
import ChangePassConfirmedSVG from "../../assets/image/ChangePassConfirmed.svg";
import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";
import { AuthHeading } from "./AuthHeading";
import { CustomLink } from "../common/customElements";
import { useNavigate } from "react-router-dom";

const ChangePassConfirmed = () => {
  const navigate = useNavigate();
  return (
    <>
      <SVGSection
        SVGSrc={ChangePassConfirmedSVG}
        alt={"Change Password Confirmed SVG"}
      ></SVGSection>
      <FormSection>
        <AuthHeading message={"رمز عبور شما با موفقیت تغییر کرد"} />
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

export { ChangePassConfirmed };
