import React from "react";
import { CardHeader } from "./CourseCardHeader";
import { CardBody } from "./CourseCardBody";
import { CustomLink } from "../common/customElements/CustomLink";

const Card = ({ product }) => {
  return (
    <div className="bg-white font-sans">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className=" text-2xl font-bold drop-shadow-lg shadow-black  text-gray-700">
          دوره های آموزشی
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
          {product.map((product) => (
            <div key={product.id}>
              <div className="relative border shadow-[-5px_-8px_15px_5px_rgba(0,0,0,0.1),_5px_8px_15px_5px_rgba(45,78,255,0.15)]  rounded-xl">
                <CardHeader
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                />
                <CardBody
                  name={product.name}
                  href={product.href}
                  color={product.color}
                />
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="relative flex items-center mt-8  w-32 mx-auto justify-center rounded-xl border border-transparent border-stone-600 hover:bg-amber-100 py-3  p-2 text-sm font-medium hover:text-amber-600 bg-amber-600 text-white"
        >
          ثبت نام دوره
        </a>
      </div>
    </div>
  );
};

export { Card };
