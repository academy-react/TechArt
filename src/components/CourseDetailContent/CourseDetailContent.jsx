/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import image from "../../assets/image/CourseDetails/01.png";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CogIcon,
  HomeIcon,
  PhotoIcon,
  PlusIcon as PlusIconOutline,
  RectangleStackIcon,
  Squares2X2Icon as Squares2X2IconOutline,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { CourseTeacher } from "./CourseDetailSidebar/CourseTeachr";
import PricingCards from "./CourseDetailSidebar/CoursePrice";
import TabsComponent from "../common/customElements/customTab";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "All Files", href: "#", icon: Squares2X2IconOutline, current: false },
  { name: "Photos", href: "#", icon: PhotoIcon, current: true },
  { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
  { name: "Albums", href: "#", icon: RectangleStackIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const files = [
  {
    name: "react js",

    imageUrl: "../../assets/image/CourseDetails/01.png",
    current: true,
  },
  // More files...
];
const currentFile = {
  name: "react js",

  imageUrl: "../../assets/image/CourseDetails/01.png",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CourseDetailContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex h-full">
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-0 -mr-14 p-1">
                      <button
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                    <nav className="flex h-full flex-col">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-indigo-800 text-white"
                                : "text-indigo-100 hover:bg-indigo-800 hover:text-white",
                              "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-white"
                                  : "text-indigo-300 group-hover:text-white",
                                "mr-3 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main content */}
          <div className=" lg:flex flex-1 items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                <div className="flex-col ">
                  <div className="rounded-xl overflow-hidden">
                    <img className="" src={image} alt="" />
                  </div>
                  <TabsComponent />
                </div>

                {/* Gallery */}
                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  <h2 id="gallery-heading" className="sr-only">
                    Recently viewed
                  </h2>
                </section>
              </div>
            </main>

            {/* Details sidebar */}
            <aside className=" md:grid-cols-1 lg:w-96 overflow-y-auto border-l  bg-white p-8 ">
              <div className="space-y-6 pb-16">
                <div>
                  <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg"></div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {currentFile.size}
                      </p>
                    </div>
                  </div>
                </div>

                <CourseTeacher className="w-full" />

                <div>
                  <PricingCards />
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Download
                  </button>
                  <button
                    type="button"
                    className="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
