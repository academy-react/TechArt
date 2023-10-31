import React from "react";

const TableTD = ({ toShow, stacker, stackSize, children, fontSize }) => {
  return (
    <td
      className={
        "whitespace-nowrap px-3 py-2 text-sm" +
        " " +
        (fontSize ? fontSize : "text-gray-500") +
        " " +
        (stacker ? "hidden" + " " + stackSize + ":table-cell" : "")
      }
    >
      {toShow}
      {children}
    </td>
  );
};

export { TableTD };
