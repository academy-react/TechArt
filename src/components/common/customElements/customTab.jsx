import { useState } from "react";
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
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <Rate />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              React JS formik
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
