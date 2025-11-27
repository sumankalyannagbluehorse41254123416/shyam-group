"use client";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Footer() {
  const menuItems = [
    { name: "About Us", id: "about" },
    { name: "Our Services", id: "service" },
    { name: "Our Products", id: "shop" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <footer className="bg-dark_red text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-between">
          {/* Logo and Description */}
          <div className="md:max-w-75">
            <Image
              src="/images/white-logo.png"
              alt="Logo"
              width={90}
              height={90}
              className="pb-2"
            />
            <p className="text-white mb-4">
              Shree Shyam Concreto – Authorized Godrej Dealer for lockers, cash
              safes, strong room doors, and advanced security solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            {/* Useful Links */}
            <div>
              <p className="text-xl font-bold mb-4">Useful Links</p>
              <ul className="space-y-2">
                {menuItems.map(({ name, id }) => (
                  <li key={id}>
                    <Link
                      to={id}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      spy={true}
                      className="cursor-pointer hover:underline"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <p className="text-xl font-bold mb-4">Legal</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:max-w-80">
              <p className="text-xl font-bold mb-4">Contact Info</p>
              <ul className="space-y-2">
                {/* Address */}
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Keranichotti+near+Agarwal+Marble,+Abash,+Barua,+West+Bengal+721102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Keranichotti near Agarwal Marble, Abash, Barua, West Bengal
                    721102
                  </a>
                </li>

                {/* Phone */}
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+919475540692" className="hover:underline">
                    +91 94755 40692
                  </a>
                </li>

                {/* Email */}
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:shyamconcreto@gmail.com"
                    className="hover:underline"
                  >
                    shyamconcreto@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

     
        {/* Footer Bottom */}
        <div className="border-t border-white mt-8 py-6 text-center text-white delay-500">
          <p>
            © {new Date().getFullYear()} Shree Shyam - All Rights Reserved.{" "}
            <br />
            Powered by{" "}
            <a
              href="https://www.bluehorse.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline inline-block"
            >
              BlueHorse Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
