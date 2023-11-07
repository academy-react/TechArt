import React from "react";
import { CustomTimer } from "../../common/customElements";

const AuthTimer = ({ seconds, func, goToLabel }) => {
  return (
    <>
      <div className="font-medium text-gray-600 mb-5">
        <CustomTimer seconds={seconds} func={func} />
        {"ثانیه دیگر به صفحه" + " " + goToLabel + " " + "منتقل می شوید"}
      </div>
    </>
  );
};

export { AuthTimer };
