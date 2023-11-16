import { useState } from "react";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-start justify-center ">
          <ul className="flex space-x-2">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-purple-600 text-white" : ""
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
                  openTab === 2 ? "bg-purple-600 text-white" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                React Tabs 2
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block" : "hidden"}>
              {" "}
              React js یکی از کتابخانه های جاوا اسکریپت است که open source است.
              برنامه نویسان فرانت اند برای ساخت ui و صفحات وب اپلیکیشن های تک
              صفحه ای استفاده می کنند. قبل از یادگیری react شما باید حداقل
              آشنایی لازم را با جاوا اسکریپت داشته باشید. پویایی المنت های صفحات
              وب به خاطر استفاده از جاوا اسکریپت و یا کتابخانه های آن است.
              کتابخانه های javascript کدهای آماده ای هستند که با جاوا اسکریپت
              توسعه داده شده اند. و برنامه نویسیان بیشتر از کتابخانه های زبان
              جاوا اسکریپت استفاده می کنند. به این دلیل که کد ها آماده هستند و
              برنامه نوشتن با آن سریعتر پیش می رود. کد های آماده شامل کامپوننت
              های آماده، توابع و الگوهای از پیش تعیین شده هستند
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
