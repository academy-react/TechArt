import { useState } from "react";
import { CustomForm } from "./CustomForm";

import Rate from "./Rate";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-start justify-center  ">
          <ul className="flex space-x-2">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-purple-600 text-blue" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                توضیحات دوره
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "bg-purple-600 text-blue" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                ثبت نظر
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block" : "hidden"}>
              {" "}
              <p className="mt-6  text-md leading-8 text-gray-600 text-justify">
                این دوره که به صورت جامع کتابخانه React را آموزش داده است سعی
                شده است که هم مفاهیم تئوری و هم مفاهیم عملی و کدنویسی به صورت
                کامل گفته شود. بعد از گذراندن و درک مفاهیم گفته شده این دوره
                آموزشی شما می توانید خود را یک front-end developer بدانید که چند
                پروژه انجام داده است و آماده است که به عنوان React developer
                وارد بازار کار شود.
              </p>
              <Rate />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <CustomForm>xxx</CustomForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
