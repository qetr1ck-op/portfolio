"use client";

import Link from "next/link";
import Image from "next/image";

import { author, navLinks } from "@/constants";
import { logo, menu, close } from "@/public/assets";
import { useEffect, useState } from "react";
import { useIsServer } from "@/hooks/is-server";

const useRouterHash = () => {
  const isServer = useIsServer();

  if (isServer) {
    return "";
  }
  return window?.location.hash.split("#")[1];
};

export function debounce<F extends (...params: any[]) => void>(
  fn: F,
  delay: number = 30
) {
  let timeoutID: number;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
  } as F;
}

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const debouncedHandleScroll = debounce(function handleScroll() {
      setIsScrolled(window.scrollY > 100);
    });

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return isScrolled;
};

export function Navigation() {
  const [routerHash, setRouterHash] = useState(useRouterHash());
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isScrolled = useIsScrolled();

  return (
    <nav
      className={`w-full py-5 px-6 sm:px-16  fixed top-0 z-20 flex items-center ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full flex justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <Image src={logo} alt="logo" width="50" height="50" />
          <p className="flex text-white text-lg font-medium cursor-pointer">
            <span>{author.name}&nbsp;</span>
            <span className="hidden sm:block">| {author.details}</span>
          </p>
        </a>
        {/* TODO: remove duplication with mobile */}
        <ul className="hidden sm:flex gap-10 text-lg">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                routerHash === id ? "text-white" : "text-secondary"
              } hover:text-white`}
            >
              <a
                href={`#${id}`}
                onClick={() => {
                  setRouterHash(id);
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden">
          <Image
            src={isMobileNavOpen ? close : menu}
            alt="navigation list"
            width="28"
            height="28"
            className="cursor-pointer"
            onClick={() => {
              setIsMobileNavOpen(!isMobileNavOpen);
            }}
          />
          {isMobileNavOpen && (
            <div className="sm:hidden black-gradient min-w-[140px] absolute top-20 right-0 z-10 rounded-xl mx-4 my-2 p-6">
              <ul className="flex flex-col gap-4 text-lg">
                {navLinks.map(({ id, title }) => (
                  <li
                    key={id}
                    className={`${
                      routerHash === id ? "text-white" : "text-secondary"
                    } hover:text-white`}
                  >
                    <Link
                      href={`#${id}`}
                      onClick={() => {
                        setRouterHash(id);
                        setIsMobileNavOpen(false);
                      }}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
