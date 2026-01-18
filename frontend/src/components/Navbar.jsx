import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/Logo.png" alt="GaladimaPrint Logo" className="h-10 w-auto" />
          <span className="text-white font-bold text-lg hidden sm:block">
            GaladimaPrint
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
          <a href="#" className="hover:text-[#21a049] transition">Home</a>
          <a href="#" className="hover:text-[#21a049] transition">About</a>
          <a href="#" className="hover:text-[#21a049] transition">Services</a>
          <a href="#" className="hover:text-[#21a049] transition">Contact</a>
        </nav>

        {/* CTA */}
        <button className="bg-[#21a049] hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
          Get a Quote
        </button>
      </div>
    </header>
  );
}
