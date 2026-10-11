import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => setMenuOpen(false);

const navLinks = [
{ label: "Home", href: "/" },
{ label: "About", href: "/#about" },
{ label: "Services", href: "/#services" },
{ label: "Contact", href: "/#contact" },
];

return (
<header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
<div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between gap-4">
{/* Logo */}
<Link
       to="/"
       onClick={closeMenu}
       className="flex items-center gap-3 shrink-0"
       aria-label="GaladimaPrint home"
     >
<img
         src="/images/Logo.png"
         alt="GaladimaPrint logo"
         className="h-11 w-auto object-contain"
       />

      <span className="text-gray-900 font-extrabold text-lg sm:text-xl tracking-tight">
        Galadima<span className="text-[#21a049]">Print</span>
      </span>
    </Link>

    {/* Desktop Navigation */}
    <nav
      aria-label="Main navigation"
      className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold"
    >
      <Link to="/" className="text-gray-600 hover:text-[#21a049] transition-colors">
        Home
      </Link>
      <a href="/#about" className="text-gray-600 hover:text-[#21a049] transition-colors">
        About
      </a>
      <a href="/#services" className="text-gray-600 hover:text-[#21a049] transition-colors">
        Services
      </a>
      <a href="/#contact" className="text-gray-600 hover:text-[#21a049] transition-colors">
        Contact
      </a>
    </nav>

    {/* Main CTA */}
    <a
      href="/#contact"
      className="hidden md:inline-flex items-center justify-center gap-2 bg-[#21a049] hover:bg-green-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
    >
      Get a Quote <span aria-hidden="true">→</span>
    </a>

    {/* Mobile Menu Button */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 transition"
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
    >
      {menuOpen ? (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      )}
    </button>
  </div>

  {/* Mobile Navigation */}
  {menuOpen && (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="md:hidden bg-white border-t border-gray-100 shadow-lg px-5 py-4"
    >
      <div className="flex flex-col gap-1">
        <Link to="/" onClick={closeMenu} className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-[#21a049] transition">
          Home
        </Link>
        <a href="/#about" onClick={closeMenu} className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-[#21a049] transition">
          About
        </a>
        <a href="/#services" onClick={closeMenu} className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-[#21a049] transition">
          Services
        </a>
        <a href="/#contact" onClick={closeMenu} className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-[#21a049] transition">
          Contact
        </a>

        <a
          href="/#contact"
          onClick={closeMenu}
          className="mt-2 text-center bg-[#21a049] hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          Get a Quote →
        </a>
      </div>
    </nav>
  )}
</header>

);
}