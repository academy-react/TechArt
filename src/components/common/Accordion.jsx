import React from "react";

export default function Accordion() {
  return (
    <div className="container flex flex-col justify-center px-4  mx-auto ">
      <div className="space-y-6">
        <details className="w-full rounded-lg ring-1 ring-purple-600">
          <summary className="px-4 py-6">دوره ری اکت چیست؟</summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            حدود 40 ساعت آموزش جامع و تخصصی ری اکت! شما در دوره آموزش ری اکت
            ReactJS ، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت
            کاملا پروژه محور و کاربردی یاد میگیرید!
          </p>
        </details>
        <details className="w-full rounded-lg ring-1 ring-purple-600">
          <summary className="px-4 py-6">طول دوره چقدر است؟</summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            شما در مدت زمان حد اکثر 4 ماه خواهید توانست به مفاهیم اصلی ری اکت
            مسلط شوید.
          </p>
        </details>
        <details className="w-full rounded-lg ring-1 ring-purple-600">
          <summary className="px-4 py-6">
            آیا میتوانم بعد از دوره وارد بازار کار شوم؟
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            شما با دوره آموزش ری اکت نه تنها به این تکنولوژی به تسلط 100 درصد می
            رسید، بلکه طوری آموزش عملی می بینید و راهنمایی می گیرید که یک راست
            وارد بازار کار بشید!
          </p>
        </details>
      </div>
    </div>
  );
}
