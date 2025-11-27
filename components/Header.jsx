"use client";
import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Shop", id: "shop" },
    { name: "About", id: "about" },
    { name: "Service", id: "service" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="bg-white shadow-md sticky top-0 z-50 ">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="h-16 w-16 md:h-24 md:w-24 relative cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Shree Shyam Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold text-md">
            {menuItems.map(({ name, id }) => {
              const isContact = name === "Contact";
              return (
                <Link
                  key={id}
                  to={id}
                  smooth={true}
                  duration={600}
                  offset={-80} // compensate sticky header height
                  spy={true}
                  className={`cursor-pointer ${
                    isContact
                      ? "bg-[var(--dark-red)] text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
                      : "text-gray-700 hover:text-[var(--dark-red)] transition"
                  }`}
                >
                  {isContact ? "Contact Us" : name}
                </Link>
              );
            })}
          </nav>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[var(--dark-red)] transition"
          >
            {!isMobileMenuOpen ? (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
          {menuItems.map(({ name, id }) => {
            const isContact = name === "Contact";
            return (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-center font-semibold text-lg py-2 rounded-md cursor-pointer ${
                  isContact
                    ? "bg-[var(--dark-red)] text-white hover:bg-red-700 transition"
                    : "text-gray-700 hover:text-[var(--dark-red)] transition"
                }`}
              >
                {isContact ? "Contact Us" : name}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
