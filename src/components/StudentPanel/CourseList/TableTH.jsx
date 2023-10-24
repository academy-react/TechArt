import React from "react";

const TableTH = ({ children, stacker, stackSize }) => {
  return (
    <th
      scope="col"
      className={
        "title px-3 py-3.5 text-sm font-semibold text-gray-900" +
        " " +
        (stacker ? "hidden " + stackSize + ":table-cell" : "")
      }
    >
      {children}
    </th>
  );
};

export { TableTH };
