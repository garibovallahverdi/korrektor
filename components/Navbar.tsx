"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import HeaderBuuttons from "@/featured/shared/HeaderBuuttons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setMobileMenuOpen(true);
    setTimeout(() => setAnimateMenu(true), 10);
  };

  const closeMenu = () => {
    setAnimateMenu(false);
    setTimeout(() => setMobileMenuOpen(false), 300);
  };

  const handleOverlayClick = () => {
    closeMenu();
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto container flex flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-3xl whitespace-nowrap text-black tracking-wide">
            korrekto<span className="text-red-500">R</span>
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <div className="hidden md:block">
            <HeaderBuuttons />
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={openMenu}
          >
            <span className="sr-only">Menunu aç</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/#services"
                className="block font-medium tracking-wide py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Xidmətlər
              </Link>
            </li>
            <li>
              <Link
                href="/#pricing"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Tariflər
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Haqqımızda
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className={`flex-1 bg-black/80 transition-opacity duration-300 ${
              animateMenu ? "bg-opacity-40 opacity-100" : "bg-opacity-0 opacity-0"
            }`}
            onClick={handleOverlayClick}
          />
          <div
            className={`w-[300px] max-w-full bg-white h-full shadow-lg p-6 flex flex-col transform transition-transform duration-300 ${
              animateMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold text-black">Menu</span>
              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="#"
                  className="block font-medium tracking-wide py-2 px-3 rounded-sm text-gray-900 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Xidmətlər
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block font-medium tracking-wide py-2 px-3 rounded-sm text-gray-900 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Tariflər
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block font-medium tracking-wide py-2 px-3 rounded-sm text-gray-900 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Haqqımızda
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <HeaderBuuttons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
