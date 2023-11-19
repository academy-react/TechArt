import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { CheckBox } from "./CheckBox";
import { FilterByPrice } from "./FilterByPrice";

const Filter = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Accordion open={open === 1} className="border-b mt-2   ">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b mt-2  p-1 text-md   ${
            open === 1 ? "bg-gray-100" : ""
          }`}
        >
          فیلتر بر اساس قیمت
        </AccordionHeader>
        <AccordionBody>
          <div className="flex justify-center m-2">
            <button className="border hover:bg-gray-300 focus:bg-gray-400 font-bold   p-3 ">
              همه
            </button>
            <button className="border hover:bg-gray-300 focus:bg-gray-400 font-bold   p-3">
              خریدنی
            </button>
            <button className="border hover:bg-gray-300 focus:bg-gray-400 font-bold   p-3">
              رایگان
            </button>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="border-b mt-2  ">
      <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b mt-2  p-1 text-md   ${
            open === 2 ? "bg-gray-100" : ""
          }`}
        >
          بر اساس دوره
        </AccordionHeader>
        <AccordionBody>
          <CheckBox />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="border-b mt-2  ">
      <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b mt-2  p-1 text-md   ${
            open === 3 ? "bg-gray-100" : ""
          }`}
        >
          فیلتر بر اساس قیمت 
        </AccordionHeader>
        <AccordionBody>
          <FilterByPrice/>
        </AccordionBody>
      </Accordion>
    </div>
  );
};
export { Filter };
