import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function CustomSearchBox() {
  return (
    <>
      <div className="mx-auto max-w-md	">
        <form action="" className="relative mx-auto w-max ml-5 ">
          <input
            type="search"
            className="peer cursor-pointer z-10 p-4 w-9 h-9  rounded-full border bg-transparent  outline-none focus:w-full focus:cursor-text focus:border-Teal-300  transition-all "
          />
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 " />
        </form>
      </div>
    </>
  );
}
export { CustomSearchBox };
