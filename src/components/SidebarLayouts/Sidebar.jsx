
    import React from 'react'
    import { Disclosure } from '@headlessui/react'

    import { BiPlus,BiSolidMessageAltEdit,BiWallet,BiShuffle,BiChat,BiFoodMenu} from "react-icons/bi";
    import { CiPower } from "react-icons/ci";
    import img from '../../assets/image/logo good.png'

    
    const navigation = [
    { name: 'داشبورد', href: '#', current: false },
    {
        name: 'دوره ها ',
        current: true,
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
        icon:CiPower,
        children: [

        ],
    },
    ]

    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }
    const Sidebar = () => {
    return (
        <div className="flex flex-grow flex-col overflow-y-auto bg-indigo-800 mt-0 pt-8 ">
        <div className=" ">
        <img src={img} alt="image" className='w-24 h-24 mx-auto' />
        </div>
        <div className="mt-5 flex flex-grow flex-col font-base">
            <nav className="flex-1 space-y-1 bg-indigo-800 pr-3" aria-label="Sidebar">
            {navigation.map((item,index) =>
                !item.children ? (
                <div key={item.name}>
                    <a
                    href={item.href}
                    className={classNames(
                        item.current
                        ? 'bg-white text-gray-900  pr-4'
                        : '		text-white hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-r-full'
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
                            ? 'bg-white text-gray-900  pr-4'
                            : '		text-white hover:bg-gray-50 hover:text-gray-900',
                            'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-r-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        )}
                        >

                        <item.icon className=" flex-none ml-3 text-lg" aria-hidden="false" />
                    
                        {item.name}
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1 pr-3">
                        {item.children.map((subItem) => (
                            <Disclosure.Button
                            key={subItem.name}
                            as="a"
                            href={subItem.href}
                            className="group flex w-full items-center rounded-r-md py-2 pl-10 pr-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-900"
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