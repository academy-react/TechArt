import React, { useEffect, useState } from "react";

const AuthTimer = ({ seconds, func, goToLabel }) => {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((perv) => perv - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remaining <= 0) func();
  }, [remaining]);

  return (
    <>
      <div className="font-medium text-gray-600 mb-5">
        {remaining +
          " " +
          "ثانیه دیگر به صفحه" +
          " " +
          goToLabel +
          " " +
          "منتقل میشوید"}
      </div>
    </>
  );
};

export { AuthTimer };
