

    import React from 'react'
    import { BiPlus,BiSolidMessageAltEdit,BiXCircle,BiWallet,BiShuffle,BiChat,BiFoodMenu} from "react-icons/bi";
    import { Disclosure } from '@headlessui/react'

    const navigation = [
    { name: 'داشبورد', href: '#', current: true },
    {
        name: 'دوره ها ',
        current: false,
        icon:BiPlus,
        children: [
        { name: 'دوره های خریداری شده', href: '#' },
        { name: 'دوره های گذرانده شده ', href: '#' },
        { name: 'دوره های ناتمام ', href: '#' },
        { name: 'دوره های مورد علاقه', href: '#' },
        ],
    },
    {
        name: 'تیکت ',
        current: false,
        icon:BiPlus ,
        children: [
        { name: 'ثبت تیکت جدید', href: '#' },
        { name: 'پیگیری تیکت ', href: '#' },
        ],
    },
    {
        name: 'کامنت',
        current: false,
        icon:BiChat ,
        children: [],
    },
    {
        name: 'اخبار پیشنهادی ',
        current: false,
        icon:BiFoodMenu ,
        children: [
        ],
    },
    {
        name: 'تراکنش ها ',
        current: false,
        icon:BiShuffle ,
        children: [

        ],
    },
    {
        name: 'کیف پول',
        current: false,
        icon:BiWallet ,
        children: [

        ],
    },
    {
        name: 'ویرایش پروفایل',
        current: false,
        icon:BiSolidMessageAltEdit ,
        children: [

        ],
    },
    {
        name: ' خروج',
        current: false,
        icon:BiXCircle,
        children: [

        ],
    },
    ]

    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

    const Sidebar = () => {
    return (
        <div className="flex flex-grow flex-col overflow-y-auto bg-white mt-16 ">
        <div className="flex flex-shrink-0 items-center px-4">
            
        </div>
        <div className="mt-5 flex flex-grow flex-col">
            <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
            {navigation.map((item) =>
                !item.children ? (
                <div key={item.name}>
                    <a
                    href={item.href}
                    className={classNames(
                        item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                    )}
                    >
                    {item.name}
                    </a>
                </div>
                ) : (
                <Disclosure as="div" key={item.name} className="space-y-1 ">
                    {({ open }) => (
                    <>
                        <Disclosure.Button
                        className={classNames(
                            item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        )}
                        >

                        <item.icon className=" flex-none" aria-hidden="false" />
                        {/* <svg
                            className={classNames(
                            open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                            'mr-2 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                            )}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                        </svg> */}
                        {item.name}
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                        {item.children.map((subItem) => (
                            <Disclosure.Button
                            key={subItem.name}
                            as="a"
                            href={subItem.href}
                            className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            >
                            {subItem.name}
                            </Disclosure.Button>
                        ))}
                        </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
                )
            )}
            </nav>
        </div>
        </div>
    )
    }
        

    

    export {Sidebar}