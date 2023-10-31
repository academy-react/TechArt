import React from "react";

import { AuthLink, AuthTimer } from "./AuthCustomElement";
import { SVGSection } from "./SVGSection";
import { FormSection } from "./FormSection";
import { AuthHeading } from "./AuthHeading";
import PhoneConfirmedSVG from "../../assets/image/PhoneConfirmed.svg";

const PhoneConfirmed = ({ handleStep }) => {
  return (
    <>
      <SVGSection
        SVGSrc={PhoneConfirmedSVG}
        alt={"Phone Confirmed SVG"}
      ></SVGSection>
      <FormSection>
        <AuthHeading message={"شماره تماس شما با موفقیت تایید شد"} />
        <AuthTimer
          seconds={"10"}
          func={() => {
            console.log("go to");
          }}
          goToLabel={"ثبت نهایی اطلاعات"}
        />

        <AuthLink
          message={"انتقال به صفحه ثبت اطلاعات"}
          handleStep={handleStep}
          to={"SignUp"}
        />
      </FormSection>
    </>
  );
};

export { PhoneConfirmed };
