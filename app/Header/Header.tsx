"use client";
import Image from "next/image";
import { useState } from "react";
import NewsletterFooter from "../Footer/Footer";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white w-full   py-4">
      <div className=" mx-[7%] gap-0 flex items- lg:items-center justify-between ">
        {/* Left Section: Logo */}
        <div className="flex sm:flex-start  items-center md:pl-38">
          <Image
            src="/logoforce.png"
            alt="Grizzly Force Logo"
            width={100}
            height={100}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Middle Section: Navigation Links */}
        <nav className="hidden lg:block  md:flex space-x-6">
          <a
            href="#"
            className="text-gray-700 lg:text-[15px] md:text-[12px] hover:text-black"
          >
            Find Workers
          </a>
          <a
            href="#"
            className="text-gray-700 lg:text-[15px] md:text-[12px] hover:text-black"
          >
            Find Jobs
          </a>
          <a
            href="#"
            className="text-gray-700 lg:text-[15px] md:text-[12px] hover:text-black"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-700 lg:text-[15px] md:text-[12px] hover:text-black"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-gray-700 lg:text-[15px] md:text-[12px] hover:text-black"
          >
            Contact
          </a>
        </nav>

        {/* Right Section: Login and Open Account Button */}
        <div className="hidden md:flex lg:flex  flex-4 items-center space-x-4">
          <a href="#" className="text-gray-700  hover:text-black">
            <p className="lg:text-[15px] text-[#191818] md:text-[12px]">
              Login
            </p>
          </a>
          <a
            href="#"
            className="border border-black px-4 py-2 rounded-lg hover:bg-gray-100 md:pr-60"
          >
            <p className="lg:text-[15px] text-[#191818] md:text-[12px] w-[150px]">
              Open an account
            </p>
          </a>
        </div>
        <div className="lg:hidden md:hidden  block">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-black focus:outline-none"
          >
            {/* Icon for the hamburger */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Middle Section: Navigation Links */}
        {/* <nav className="hidden sm:block lg:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">
            Find Workers
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Find Jobs
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Resources
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </nav> */}
      </div>
    </header>
  );
}