import {Dialog} from "@headlessui/react";
import {Bars3Icon, ChevronDownIcon, MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {FC, useContext, useState} from "react";
import logo from "../../../assets/logo.png";
import {CardContext} from "../../providers/CardContext.tsx";

const navigation = [
    { name: "Editorial", href: "/" },
    { name: "Sports", href:"/" },
    { name: "Creative", href: "/" },
    { name: "Archive", href: "/" },
];

interface INavbar {
    isNotHomeScreen?: boolean;
}

export const Nav: FC<INavbar> = ({ isNotHomeScreen = false }) => {
    const itemsNumber = useContext(CardContext).numberOfItems;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <nav
                className="flex items-center py-4 px-8 justify-between border-b"
            >
                <div className="flex lg:min-w-0 lg:flex-1 items-center">
                    <a href="/">
                        <img src={logo} alt="Imago" width={72} />
                    </a>
                    {isNotHomeScreen && <div className="ml-6 items-center h-10 hidden lg:flex w-full">
                        <button
                            className="bg-white h-full border pl-2 border-r-0 border-gray-300 flex items-center justify-center">
                            <MagnifyingGlassIcon className="text-gray-400 h-4 w-4"/>
                        </button>
                        <input
                            type="text"
                            className="h-full w-full px-4 border border-x-0 border-gray-300 focus:outline-none focus:ring-0 focus:border-1"
                            placeholder="Search..."
                        />
                        <div className="relative inline-block h-full">
                            <button
                                className="bg-white h-full border pr-2 border-l-0 border-gray-300 flex items-center justify-center cursor-pointer"
                            >
                                <p className="text-gray-400 pl-2 pr-10 border-l border-gray-300">All</p>
                                <ChevronDownIcon
                                    className={`text-gray-400 h-4 w-4 transform duration-300`}
                                />
                            </button>
                        </div>
                    </div>}
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="font-semibold text-gray-900 hover:text-rose-700"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="relative">
                        <button className="bg-black text-white py-2 px-3 relative">
                            Account
                            {itemsNumber > 0 && (
                                <span className="absolute -top-3 -right-3 bg-cyan-400 text-sm text-black font-medium rounded-full w-6 h-6 flex items-center justify-center">
                              {itemsNumber}
                            </span>
                            )}
                        </button>
                    </div>
                    <button className="text-black ml-4">
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <a href="/">
                                <img src={logo} alt="Imago" width={72} />
                            </a>
                        </div>
                        <div className="flex">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <div className="relative">
                                    <button className="bg-black text-white py-2 px-3 relative">
                                        Account
                                        {itemsNumber > 0 && (
                                            <span className="absolute -top-3 -right-3 bg-cyan-400 text-sm text-black font-medium rounded-full w-6 h-6 flex items-center justify-center">
                                        {itemsNumber}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
};