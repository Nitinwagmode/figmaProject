"use client";
import React from 'react';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black sm:bg-white w-full py-10">
      {/* Top Section with Text and Image */}
      <div className="bg-white py-12 md:pl-60">
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Left Section - Text */}
          <div className="w-full md:w-[433px] h-auto text-center md:text-left mb-8 md:mb-0">
            <h2 className="uppercase text-sm font-bold text-gray-600 mb-4">
              Grizzly Force Cities
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
              Serving <span className="text-teal-500">The Greater <br /> Vancouver</span>, 
              <span className="text-teal-500"> Victoria</span>,<br />
              <span className="text-teal-500"> Okanagan</span>, 
              <span className="text-teal-500"> Calgary</span> &<br /> 
              <span className="text-teal-500"> Toronto</span> Areas
            </h1>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-[557px] h-auto flex justify-center md:pr-60">
            <img
              src="/map-image.png"
              alt="Map"
              className="w-full h-auto max-w-full md:max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* Below Sections - Two Buttons */}
      <div className="w-full flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center mt-8 md:mt-10">
        {/* Button 1 */}
        <a
          href="#"
          className="bg-gray-900 text-white py-3 px-6 w-full md:w-auto text-lg font-semibold rounded-lg flex justify-center items-center"
        >
          Looking for additional help? 
          <br />
          Find Workers ↗
        </a>

        {/* Button 2 */}
        <a
          href="#"
          className="bg-teal-500 text-white py-3 px-6 w-full md:w-auto text-lg font-semibold rounded-lg flex justify-center items-center"
        >
          Looking for extra cash?
          <br />
          Find a Job ↗
        </a>
      </div>

      {/* Subscribe to Newsletter */}
      <div className="lg:text-center mx-[8%] text-left mt-12">
        <h2 className="text-3xl lg:text-4xl font-bold">
          <span className="text-white md:text-black">Subscribe To Our</span>{" "}
          <span className="text-teal-500">Newsletter</span>
        </h2>
        <p className="text-white sm:text-black mt-2 mb-6">
          Keep up with the Grizzly Force team!
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-start gap-6 lg:items-center">
          <input
            type="email"
            placeholder="Email Address"
            className="px-2 py-3 rounded-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full lg:w-2/3"
          />
          <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition w-full lg:w-auto">
            Submit
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="hidden lg:grid lg:grid-cols-4 mt-12 gap-10 text-center md:text-left mt-[6%] lg:mt-16 px-4 lg:px-20">
        {/* Grizzly Force Section */}
        <div className="flex flex-col">
          <div className="flex justify-start mb-6">
            <Image
              src="/logoforce.png"
              alt="Grizzly Force Logo"
              width={100}
              height={100}
              className="w-auto h-auto object-contain"
            />
          </div>
          <p className="text-left w-full text-[13px] text-gray-600">
            Grizzly is a private virtual network that has unique features and
            has high security.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#">
              <Image
                src="/playstore.png"
                alt="Playstore"
                width={100}
                height={100}
                className="w-auto h-auto object-contain"
              />
            </a>
            <a href="#">
              <Image
                src="/apple.png"
                alt="App Store"
                width={100}
                height={100}
                className="w-auto h-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold">Product</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-teal-500">Download</a></li>
            <li><a href="#" className="hover:text-teal-500">Pricing</a></li>
            <li><a href="#" className="hover:text-teal-500">Locations</a></li>
            <li><a href="#" className="hover:text-teal-500">Server</a></li>
            <li><a href="#" className="hover:text-teal-500">Countries</a></li>
            <li><a href="#" className="hover:text-teal-500">Blog</a></li>
          </ul>
        </div>

        {/* Engage Links */}
        <div>
          <h3 className="text-lg font-semibold">Engage</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-teal-500">Grizzling?</a></li>
            <li><a href="#" className="hover:text-teal-500">FAQ</a></li>
            <li><a href="#" className="hover:text-teal-500">Tutorials</a></li>
            <li><a href="#" className="hover:text-teal-500">About Us</a></li>
            <li><a href="#" className="hover:text-teal-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-teal-500">Terms of Service</a></li>
          </ul>
        </div>

        {/* Earn Money Links */}
        <div>
          <h3 className="text-lg font-semibold">Earn Money</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-teal-500">Affiliate</a></li>
            <li><a href="#" className="hover:text-teal-500">Become Partner</a></li>
          </ul>
        </div>
      </div>

      
      {/* Footer Bottom */}
<div className="lg:mt-12 mt-6 mx-[8%] border-0  lg:border-gray-300 pt-6 text-left lg:text-center">
  <div className="flex justify-between items-center">
    {/* Footer Text */}
    <p className="text-white text-[10px] lg:text-[14px] lg:text-gray-600">
      © 2022 Grizzly, Inc. All rights reserved
    </p>

    {/* Social Media Icons */}
    <div className="flex space-x-4">
      {/* Facebook Icon */}
      <a href="#" className="flex items-center hover:text-teal-500">
        <img
          src="/insta.png" // Replace with the correct path to your image
          alt="social media"
          className="w-[240px] h-[240px" // Set appropriate width and height for the icon
        />
        {/* <span className="ml-2 text-white lg:text-gray-600"></span> */}
      </a>
    </div>
  </div>
</div>

    </footer>
  );
}
