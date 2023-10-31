import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
Bars3BottomLeftIcon,
BellIcon,
CalendarIcon,
ChartBarIcon,
FolderIcon,
HomeIcon,    
InboxIcon,
UsersIcon,
XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { Sidebar } from './Sidebar'
import { Dashboard } from './Dashboard'


const navigation = [
    { name: 'داشبود', href: '#', icon: HomeIcon, current: true },
    { name: 'دوره ها ', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
    ]
    const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
    ]

    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

const SidebarLayouts = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
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
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                        </div>
                    </Transition.Child>

                        <Sidebar />
                        </Dialog.Panel>
                    </Transition.Child>
                <div className="w-14 flex-shrink-0">
                </div>
                </div>
            </Dialog>
            </Transition.Root>
<div className='flex '>


            <div className="hidden  md:inset-y-0 md:flex md:w-64 md:flex-col mr-0">

                <Sidebar />
            </div>

            <div className="  flex-1 ">
            <div className="flex  flex-col md:px-8 xl:px-0">
                <div className="w-full sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-indigo-800	">
                <button
                    type="button"
                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="w-full flex flex-1 justify-between px-4 md:px-0">
                    <div className="flex flex-1">
                    <form className="flex w-full md:ml-0" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">
                        Search
                        </label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                            id="search-field"
                            className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm bg-indigo-800	"
                            placeholder="Search"
                            type="search"
                            name="search"
                        />
                        </div>
                    </form>
                    </div>
                    <div className="ml-4 flex items-center md:ml-6">
                    <button
                        type="button"
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <Menu as="div" className="relative ml-3">
                        <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                    
                        </Menu.Button>
                        </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                <a
                                    href={item.href}
                                    className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-sm text-gray-700'
                                    )}
                                >
                                    {item.name}
                                </a>
                                )}
                            </Menu.Item>
                            ))}
                        </Menu.Items>
                        </Transition>
                    </Menu>
                    </div>
                </div>
                </div>

                <main className="flex-1">
                <div className="py-6">
                    <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                    </div>
                    <div className="px-4 sm:px-6 md:px-0">
                    <div className="p-16">
                        <div className=" rounded-lg border-4 border-dashed">
                            <Dashboard />
                            </div>
                    </div>
        
                    </div>
                </div>
                </main>
            </div>
            </div>
            </div>
        </div>
        </>
    )
    }

    export {SidebarLayouts}