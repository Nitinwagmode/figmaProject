"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-10">
      {/* Subscribe to Newsletter */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Subscribe To Our <span className="text-teal-500">Newsletter</span>
        </h2>
        <p className="text-gray-600 mt-2 mb-6">
          Keep up with the Grizzly Force team!
        </p>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 lg:w-1/3 w-2/3"
          />
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition">
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-1 mt-12 md:grid-cols-4 gap-10 text-center md:text-left mt-[6%] lg:mt-16 px-4 lg:px-20">
        {/* Grizzly Force Section */}
        <div className="flex justify-start  flex-col w-[36%] ">
          <div className="flex flex-col justify-start">
            <Image
              src="/logoforce.png"
              alt="Grizzly Force Logo"
              width={100}
              height={100}
              className="w-auto h-auto object-contain"
            />
          </div>

          <p className="mt-2 text-left w-full text-[13px] text-gray-600">
            Grizzly is a private virtual network that has unique features and
            has high security.
          </p>
          <div className="mt-[6%] flex  md:justify-start space-x-4">
            <a href="#">
              <Image
                src="/playstore.png"
                alt="Grizzly Force Logo"
                width={100}
                height={100}
                className="w-auto h-auto object-contain"
              />
            </a>
            <a href="#">
              <Image
                src="/apple.png"
                alt="Grizzly Force Logo"
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
            <li>
              <a href="#" className="hover:text-teal-500">
                Download
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Locations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Server
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Countries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Engage Links */}
        <div>
          <h3 className="text-lg font-semibold">Engage</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-teal-500">
                Grizzling?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Earn Money Links */}
        <div>
          <h3 className="text-lg font-semibold">Earn Money</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-teal-500">
                Affiliate
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Become Partner
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        <p>© 2022 Grizzly, Inc. All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-teal-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-teal-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-teal-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-teal-500">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
