import React from "react";
import ReactPaginate from "react-paginate";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Pagination = ({ handlePageClick, pageCount, currentPage }) => {
  const renderNext = () => {
    return (
      <>
        <span className="sr-only">Previous</span>
        <IoChevronBackOutline className="h-5 w-5" aria-hidden="true" />
      </>
    );
  };
  const renderPrev = () => {
    return (
      <>
        {" "}
        <span className="sr-only">Next</span>
        <IoChevronForwardOutline className="h-5 w-5" aria-hidden="true" />
      </>
    );
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-white py-3 sm:px-8 ">
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel={renderNext()}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel={renderPrev()}
            renderOnZeroPageCount={null}
            forcePage={currentPage}
            containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
            activeLinkClassName={
              "relative z-10 inline-flex items-center !bg-indigo-600 px-4 py-2 text-sm font-semibold text-white "
            }
            pageLinkClassName="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            breakClassName="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
            previousLinkClassName="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            nextLinkClassName="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          />
        </nav>
        <div>
          <p className="text-sm text-gray-700 pt-4 sm:py-0">
            {"درحال نمایش"} <span className="font-medium">1</span> {"تا"}{" "}
            <span className="font-medium">10</span> {"از"}{" "}
            <span className="font-medium">97</span> {"نتیجه"}
          </p>
        </div>
      </div>
    </>
  );
};

export { Pagination };
