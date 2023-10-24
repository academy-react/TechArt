import React from "react";

const TableInnerDL = ({ label, toShow, stackSize }) => {
  return (
    <>
      <dt className="sr-only hidden">{label}</dt>
      <dd
        className={"mt-1 truncate text-gray-500" + " " + stackSize + ":hidden"}
      >
        <span className=" text-gray-700">{label}:</span> {toShow}
      </dd>
    </>
  );
};

export { TableInnerDL };
