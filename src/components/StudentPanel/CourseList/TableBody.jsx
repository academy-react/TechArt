import React from "react";
import { TableTD } from "./TableTD";
import { TableInnerDL } from "./TableInnerDL";

const TableBody = ({ coursesData }) => {
  return (
    <tbody className="bg-white text-right">
      {coursesData.map((course, courseIndex) => (
        <tr
          key={course.name}
          className={courseIndex % 2 === 0 ? undefined : "bg-gray-50"}
        >
          <TableTD>
            <div className="w-10 aspect-square rounded-full bg-red-300"></div>
          </TableTD>
          <TableTD toShow={course.name} fontSize={"text-gray-700"}>
            <dl className="text-sm ">
              <TableInnerDL
                label={"مدرس"}
                toShow={course.teacher}
                stackSize={"lg"}
              />
              <TableInnerDL
                label={"تاریخ شروع دوره"}
                toShow={course.startDate}
                stackSize={"md"}
              />
            </dl>
          </TableTD>
          <TableTD toShow={course.teacher} stacker={true} stackSize={"lg"} />
          <TableTD toShow={course.startDate} stacker={true} stackSize={"md"} />
          <TableTD toShow={course.price} />
        </tr>
      ))}
    </tbody>
  );
};

export { TableBody };
