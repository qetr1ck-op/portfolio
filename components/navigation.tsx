'use client';

import Link from 'next/link';
import Image from 'next/image';

import { author, navLinks } from '@/constants';
import { logo, menu, close } from '@/assets';
import { useState } from 'react';

const useRouterHash = () => {
  return window?.location.hash.split('#')[1];
};

export function Navigation() {
  const [routerHash, setRouterHash] = useState(useRouterHash());
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="w-full py-5 px-6 sm:px-16 bg-transparent fixed top-0 z-20 flex items-center">
      <div className="max-w-7xl w-full flex justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width="50" height="50" />
          <p className="flex text-white text-lg font-medium cursor-pointer">
            <span>{author.name}&nbsp;</span>
            <span className="hidden sm:block">| {author.details}</span>
          </p>
        </Link>
        {/* TODO: remove duplication with mobile */}
        <ul className="hidden sm:flex gap-10 text-lg">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${routerHash === id ? 'text-white' : 'text-secondary'} hover:text-white`}
            >
              <Link
                href={`#${id}`}
                onClick={() => {
                  setRouterHash(id);
                }}
              >
                {title}
              </Link>
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
                      routerHash === id ? 'text-white' : 'text-secondary'
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
