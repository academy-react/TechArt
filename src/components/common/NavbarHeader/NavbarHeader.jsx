import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import image from "../../../assets/image/logo/logo-bg.png";
import { CustomSearchBox } from "../customElements/CustomSearchBox";
import { CustomButton } from "../customElements/CustomButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavbarHeader() {
  return (
    <Disclosure as="nav" className="bg-yellow-400 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8  	">
            <div className="relative flex h-12 items-center   flex-row 	 ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden   ">
                {/* Mobile menu button*/}
              </div>
              <div className="flex flex-1 items-center justify-start  sm:items-stretch sm:justify-start  ">
                <div className="flex flex-shrink-0 items-center ">
                  <img
                    className="hidden h-10 w-auto lg:block sm:px-5"
                    src={image}
                    alt="Your Company"
                  />
                  <h4>مدرسه هوشمند تک آرت</h4>
                </div>
                <div className="hidden  sm:block 		"></div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="px-3">
                  <CustomButton message={"ثبت نام"} />
                </div>
                <div className="px-3">
                  <CustomButton message={"ورود"} />
                </div>
                {/*View notifications button*/}

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export { NavbarHeader };
