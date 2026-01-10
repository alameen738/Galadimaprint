import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">GaladimaPrint</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We provide professional printing, branding, and office solutions tailored to your business. Quality and customer satisfaction are our top priorities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-green-600 transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-green-600 transition-colors">Services</a></li>
            <li><a href="/about" className="hover:text-green-600 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm">Email: info@galadimaprint.com</p>
          <p className="text-gray-400 text-sm">Phone: +234 800 000 0000</p>
          <p className="text-gray-400 text-sm">Address: Kano, Nigeria</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-6 py-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} GaladimaPrint. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
