import React from "react";
import Navbar from "../components/Navbar";

// --- Service Card Component ---
const ServiceCard = ({ number, title, description, icon }) => (
  <div className="group bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex-1 min-w-[280px] relative hover:-translate-y-2">
    <div className="absolute -top-5 left-6 w-12 h-12 bg-[#21a049] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md">
      {number}
    </div>

    <div className="mt-8 mb-5 flex justify-center text-3xl">
      {icon}
    </div>

    <h3 className="text-xl font-semibold text-gray-800 mb-3">
      {title}
    </h3>

    <p className="text-gray-500 text-sm leading-relaxed mb-6">
      {description}
    </p>

    <span className="inline-block text-xs font-semibold tracking-wider text-[#21a049] group-hover:underline cursor-pointer">
      READ MORE →
    </span>
  </div>
);

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold bg-[#21a049]/10 text-[#21a049] rounded-full">
              Trusted Printing Partner
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Professional Printing,<br /> Made Simple
            </h1>

            <p className="text-gray-400 max-w-lg mb-10 leading-relaxed">
              GaladimaPrint delivers premium printing, branding, and office solutions designed to elevate your business identity.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#21a049] hover:bg-green-700 px-7 py-3 rounded-xl font-semibold transition">
                Get a Quote
              </button>
              <button className="border border-gray-700 hover:border-[#21a049] px-7 py-3 rounded-xl font-semibold transition">
                Our Services
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block relative">
            <img
              src="/images/Office.jpg" // updated hero image
              alt="Printing Hero"
              className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img src="/images/bag1.jpg" alt="Printing Process" className="rounded-3xl shadow-xl w-full" />
          <img src="/images/bag.jpg" alt="Teamwork" className="rounded-2xl shadow-2xl w-2/3 absolute -bottom-12 -right-8 border-8 border-black" />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">A Journey of Quality Printing</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We combine modern printing technology with deep industry expertise to deliver consistent, high-impact results.
          </p>

          <div className="flex gap-12 mb-10">
            <div>
              <span className="text-4xl font-bold">10+</span>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
            <div>
              <span className="text-4xl font-bold">500+</span>
              <p className="text-gray-500 text-sm">Satisfied Clients</p>
            </div>
          </div>

          <button className="bg-[#21a049] hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition">
            About Us
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you need to print, brand, and grow your business.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <ServiceCard
              number="01"
              title="High-Quality Printing"
              description="Precision printing with premium materials and flawless finishes."
              icon="🖨️"
            />
            <ServiceCard
              number="02"
              title="Fast Turnaround"
              description="Reliable delivery timelines without compromising quality."
              icon="⚡"
            />
            <ServiceCard
              number="03"
              title="Custom Branding"
              description="Unique branding assets that make your business stand out."
              icon="🎨"
            />
          </div>

          <div className="text-center mt-14">
            <button className="bg-[#21a049] hover:bg-green-700 text-white px-10 py-3 rounded-xl font-semibold transition">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}