"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 animate__animated animate__fadeInDown">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="h-16 w-16 md:h-24 md:w-24 relative">
            <Image src="/images/logo.png" alt="Shree Shyam Logo" layout="fill" objectFit="contain" />
          </div>
          <nav className="hidden md:flex space-x-10 font-semibold text-md">
            {['Home', 'Shop', 'About', 'Service', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-[var(--dark-red)] transition">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 text-gray-700 hover:text-[var(--dark-red)]  transition cursor-pointer">
              <svg
                id="menu-icon"
                className={`h-8 w-8 ${isMobileMenuOpen ? 'hidden' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                id="close-icon"
                className={`h-8 w-8 ${isMobileMenuOpen ? '' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex flex-col space-y-6 px-6 py-28">
          {['Home', 'Shop', 'About', 'Service', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-dark_red transition">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}