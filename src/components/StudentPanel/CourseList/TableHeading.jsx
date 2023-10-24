import React from "react";
import { TableTH } from "./TableTH";

const TableHeading = () => {
  return (
    <thead className="bg-gray-50 text-right">
      <tr>
        <TableTH scope="col">{"تصویر"}</TableTH>

        <TableTH scope="col">{"نام دوره"}</TableTH>

        <TableTH scope="col" stacker={true} stackSize={"lg"}>
          {"مدرس"}
        </TableTH>

        <TableTH scope="col" stacker={true} stackSize={"md"}>
          {"تاریخ  شروع دوره"}
        </TableTH>

        <TableTH scope="col">{"قیمت"}</TableTH>
      </tr>
    </thead>
  );
};

export { TableHeading };
