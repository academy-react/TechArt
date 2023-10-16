import React, { useEffect, useState } from "react";

const CustomTimer = ({ seconds, func }) => {
  const [remaining, setRemaining] = useState(seconds);
  const [timer, setTimer] = useState();
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemaining((perv) => perv - 1);
    }, 1000);
    setTimer(timerInterval);
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (remaining <= 0) {
      clearInterval(timer);
      if (func) func();
    }
  }, [remaining]);

  return (
    <>
      <span className="font-medium text-gray-600 mb-5">{remaining + " "}</span>
    </>
  );
};

export { CustomTimer };
