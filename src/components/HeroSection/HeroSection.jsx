import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import image from "../../assets/image/hero/10.png";

function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 border-2	border-red-600">
        <div className="relative lg:col-span-5 	 lg:-mr-8 xl:inset-0 xl:left-1/2 xl:mr-0">
          <img className="w-auto	 h-auto lg:mt-11	" src={image} alt="" />
        </div>
        <div className=" pt-5 pb-24 sm:pb-32 flex-1 lg:col-span-7 lg:px-0 lg:pt-20 lg:pb-56 xl:col-span-6  border-2	border-blue-600">
          <div className="mx-auto text-right	 max-w-2xl lg:mx-0">
            <h1 className="mt-12 text-base	 font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl border-2	border-red-600	">
              پژوهشگاه سپهر
            </h1>
            <p className="mt-6  text-md leading-8 text-gray-600">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحزارهای ان گرافیک است، چاپگرها و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابکاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { HeroSection };
