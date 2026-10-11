import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-3 md:px-10">

        {/* About GaladimaPrint */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              Galadima<span className="text-[#21a049]">Print</span>
            </h2>
          </Link>

          <p className="mb-5 text-sm leading-7 text-gray-400">
            We provide professional printing, branding, and office
            solutions for individuals and businesses. Quality,
            attention to detail, and customer satisfaction are our
            priorities.
          </p>

          <p className="text-sm font-medium text-gray-300">
            Quality Printing. Professional Results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-5 text-lg font-bold text-white">
            Quick Links
          </h2>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-[#21a049]"
              >
                Home
              </Link>
            </li>

            <li>
              <a
                href="/#about"
                className="transition-colors hover:text-[#21a049]"
              >
                About Us
              </a>
            </li>

            <li>
              <Link
                to="/services"
                className="transition-colors hover:text-[#21a049]"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="transition-colors hover:text-[#21a049]"
              >
                Products
              </Link>
            </li>

            <li>
              <a
                href="/#contact"
                className="transition-colors hover:text-[#21a049]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div id="footer-contact">
          <h2 className="mb-5 text-lg font-bold text-white">
            Contact Us
          </h2>

          <p className="mb-4 text-sm leading-relaxed text-gray-400">
            Have a printing or branding project? Get in touch with us.
          </p>

          {/* First Phone Number */}
          <a
            href="tel:+2348068989600"
            className="mb-4 flex items-center gap-3 text-sm transition-colors hover:text-[#21a049]"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-lg"
              aria-hidden="true"
            >
              📞
            </span>

            <span>
              <span className="block text-xs text-gray-500">
                Phone Number 1
              </span>
              <span className="font-medium text-gray-200">
                0806 898 9600
              </span>
            </span>
          </a>

          {/* Second Phone Number */}
          <a
            href="tel:+2348109961369"
            className="mb-5 flex items-center gap-3 text-sm transition-colors hover:text-[#21a049]"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-lg"
              aria-hidden="true"
            >
              📱
            </span>

            <span>
              <span className="block text-xs text-gray-500">
                Phone Number 2
              </span>
              <span className="font-medium text-gray-200">
                0810 996 1369
              </span>
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2348068989600?text=Hello%20GaladimaPrint%2C%20I%20would%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#21a049] px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#21a049]"
          >
            <span aria-hidden="true">💬</span>
            Chat on WhatsApp
          </a>

          <p className="mt-4 text-xs text-gray-500">
            Kano, Nigeria
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-xs text-gray-500 sm:flex-row md:px-10">
          <p>
            &copy; {currentYear} GaladimaPrint. All rights reserved.
          </p>

          <a
            href="/"
            className="transition-colors hover:text-[#21a049]"
          >
            Quality Printing. Professional Results.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;