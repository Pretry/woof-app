"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  EnvelopeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BadgeMessage from "./BadgeMessage";

const navigation = [
  { name: "Trouver mon chien", href: "/trouver-mon-chien", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const path = usePathname();

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-salmon hover:bg-salmon hover:text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      className="h-10 w-auto"
                      src={Logo}
                      alt="Le logo de Woof!"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={
                          item.href === path
                            ? "bg-salmon font-medium text-white rounded-md px-3 py-2 text-sm md:text-base lg:text-lg"
                            : "text-grey-700 font-medium hover:text-salmon rounded-md px-3 py-2 text-sm md:text-base lg:text-lg"
                        }
                        // className={classNames(
                        //   item.current
                        //     ? "bg-salmon font-semibold text-white"
                        //     : "text-grey-800 font-semibold hover:bg-salmon hover:text-white",
                        //   "rounded-md px-3 py-2  font-medium"
                        // )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* right side navbar */}
              <div className=" border text-salmon lg:text-lg border-salmon font-semibold rounded-md px-3 py-2 text-sm">
                <Link href="/users/identification">
                  S'identifier
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <BadgeMessage/>
                <Link
                  href="/users/messagerie"
                  className="relative rounded-full p-1 text-salmon"
                >
                  <span className="sr-only">Mes messages</span>
                  <EnvelopeIcon className="h-7 w-7" aria-hidden="true" />
                </Link>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full p-1 text-grey-500 text-sm focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <UserIcon className="h-6 w-6 " aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-salmon text-white" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Mon compte
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-salmon text-white" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(
                              active ? "bg-salmon text-white" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Se déconnecter
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="relative">
            <div className="space-y-1 pl-2 pr-8 pb-3 pt-2 absolute z-50 bg-white ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
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
