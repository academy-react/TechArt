import { useState } from "react";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <ul className="flex space-x-2">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-purple-600 text-blue" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                React Tabs 1
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
                React Tabs 2
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block" : "hidden"}>
              {" "}
              این دوره که به صورت جامع کتابخانه React را آموزش داده است سعی شده
              است که هم مفاهیم تئوری و هم مفاهیم عملی و کدنویسی به صورت کامل
              گفته شود. بعد از گذراندن و درک مفاهیم گفته شده این دوره آموزشی شما
              می توانید خود را یک front-end developer بدانید که چند پروژه انجام
              داده است و آماده است که به عنوان React developer وارد بازار کار
              شود.
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              React JS with Tailwind CSS Tab 2 Content show
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
