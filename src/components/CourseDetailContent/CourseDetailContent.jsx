import image from "../../assets/image/default/default-image.jpg";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { Dialog, Transition } from "@headlessui/react";
import {
  PlusIcon as PlusIconOutline,
  Squares2X2Icon as Squares2X2IconOutline,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { CourseTeacher } from "./CourseDetailSidebar/CourseTeachr";
import PricingCards from "./CourseDetailSidebar/CoursePrice";
import Tabs from "../common/Tab/Tab";
import { baseUrl } from "../../config";
import LikeButton from "./Like";
import BookmarkButton from "./Bookmark";
import { useParams } from "react-router-dom";

const CourseDetailContent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [courseDetail, setCourseDetail] = useState({});
  const { courseId } = useParams();

  const getcourseDetail = async () => {
    console.log("fetching...");
    const result = await axios.get(
      `${baseUrl}/Home/GetCourseDetails?CourseId=${courseId}`
    );
    console.log("image", result.data);
    setCourseDetail(result.data);
  };

  useEffect(() => {
    getcourseDetail();
  }, []);

  console.log(courseDetail);
  return (
    <>
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
                </Dialog.Panel>
              </Transition.Child>
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
                    {courseDetail.imageAddress ? (
                      <>
                        <div className=" border-2 border-black">
                          <img
                            src={courseDetail.imageAddress}
                            alt="courseImage"
                          />
                        </div>
                      </>
                    ) : (
                      <img
                        className="w-full h-80"
                        src={image}
                        alt="Placeholder Image"
                      />
                    )}
                  </div>
                  <div className="flex  px-2 py-3">
                    <LikeButton />
                    <BookmarkButton />
                  </div>
                  <Tabs />
                </div>
              </div>
            </main>

            {/* Details sidebar */}
            <aside className=" md:grid-cols-1 lg:w-96 overflow-y-auto border-l  bg-white p-8 ">
              <div className="space-y-6 pb-16">
                <CourseTeacher className="w-full" />

                <div>
                  <PricingCards />
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    رزرو دوره
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseDetailContent;
