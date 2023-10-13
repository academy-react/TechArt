import React, { useEffect, useState } from "react";

const CustomTimer = ({ seconds, func }) => {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((perv) => perv - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    {
      remaining <= 0 && func && func();
    }
  }, [remaining]);

  return (
    <>
      <span className="font-medium text-gray-600 mb-5">
        {" " + remaining + " "}
      </span>
    </>
  );
};

export { CustomTimer };
