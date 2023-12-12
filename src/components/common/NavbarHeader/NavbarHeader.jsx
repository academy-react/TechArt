import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import image from "../../../assets/image/logo/avatar-1.png";
import { CustomSearchBox } from "../customElements/CustomSearchBox";
import { CustomButton } from "../customElements/CustomButton";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "../customElements/ProfileDropDownMenu";
const navigation = [
  { name: "صفحه اصلی", href: "/", current: true },
  { name: "دوره ها", href: "#", current: false },
  { name: "اخبار", href: "/New", current: false },
  { name: "خدمات", href: "#", current: false },
  { name: "تماس با ما", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavbarHeader() {
  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className=" ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8  	">
            <div className="relative flex h-16 items-center   flex-row 	 ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden   ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  <span className="sr-only ">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start  sm:items-stretch sm:justify-start  ">
                <div className="flex flex-shrink-0 items-center ">
                  <img
                    className="hidden h-8 w-auto lg:block sm:px-5"
                    src={image}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden  sm:block 		">
                  <div className="flex space-x-4 lg:pr-80">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-emerald-200	 text-black sm:text-xs	"
                            : "sm:text-xs	 text-black	 hover:border-b	hover:border-cyan-400		 hover:text-emerald-500	",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CustomSearchBox />

                {/* <div className="px-3">
                  <CustomButton
                    onClick={() => {
                      navigate("/auth/register");
                    }}
                    message={"ثبت نام"}
                  />
                </div> */}
                {/*View notifications button*/}
                <ProfileDropdown />
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-black"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export { NavbarHeader };
