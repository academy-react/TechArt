import { useState } from "react";
import { Pagination } from "../../common/Pagination";
import { TableBody } from "./TableBody";
import { TableHeading } from "./TableHeading";
import { Pag } from "../../common/pag";

const courses = [
  {
    img: "img",
    name: "ریاکت",
    teacher: "سید محی",
    startDate: "1402/02/23",
    price: "مفت تومان",
  },
  {
    img: "img",
    name: "جاوا",
    teacher: "محسن اسفندیاری",
    startDate: "1402/02/23",
    price: "مفت تومان",
  },
];

const CourseList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (page) => {
    console.log(page);
    setCurrentPage(page.selected);
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <TableHeading />
                <TableBody coursesData={courses} />
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        pageCount={10}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </>
  );
};

export { CourseList };
