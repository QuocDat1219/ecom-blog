import React, { useState, useEffect } from "react";

import { nav } from "../../data/Data";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "./header.css";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const setActive = (item) => {
    window.localStorage.setItem("avtive", item);
  };

  return (
    <Disclosure as="nav" className="bg-color-nav sticky top-0  z-40">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-betwee ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-text-color hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex flex-shrink-0 items-center bg-white rounded-md ">
                  <img
                    className="block h-[40px] w-auto lg:hidden"
                    src="https://everev.vn/wp-content/uploads/2023/03/everev-logo-1563x1024.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-[50px] w-auto lg:block"
                    src="https://everev.vn/wp-content/uploads/2023/03/everev-logo-1563x1024.png"
                    alt="Your Company"
                  />
                </div>
              </div> */}

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center sticky ">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {nav.map((list, index) => (
                      <a
                        key={index}
                        href={list.path}
                        className={`text-text-color hover:bg-text-nav hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                          window.localStorage.getItem("avtive") == index
                            ? "bg-text-nav text-white"
                            : ""
                        }`}
                        onClick={() => setActive(index)}
                      >
                        {list.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div class="searchBox">
                <input
                  class="searchInput"
                  type="text"
                  name=""
                  placeholder="Search"
                />
                <button class="searchButton" href="#">
                  <i class="material-icons">search</i>
                </button>
              </div> */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {nav.map((list, index) => (
                <Disclosure.Button
                  key={list.text}
                  as="a"
                  href={list.path}
                  className={`text-text-color hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
                    window.localStorage.getItem("avtive") == index
                      ? "bg-gray-700 text-white"
                      : ""
                  }`}
                  onClick={() => setActive(index)}
                >
                  {list.text}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
