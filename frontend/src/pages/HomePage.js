import React from "react";

// --- Sub-component for service cards ---
const ServiceCard = ({ number, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-2xl text-center relative flex-1 min-w-[280px]">
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#21a049] text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-white">
      {number}
    </div>
    <div className="mt-6 mb-4 flex justify-center">
      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">📊</div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
    <button className="text-[10px] font-bold tracking-widest text-gray-800 border-b-2 border-black pb-1 hover:text-[#21a049] hover:border-[#21a049] transition-colors">
      READ MORE
    </button>
  </div>
);

// --- Main Home Page ---
export default function HomePage() {
  return (
    <div className="bg-gray-100 font-sans text-gray-900">

      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-[600px] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 items-center w-full">
          <div className="z-10 py-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Printing <br /> Made Simple
            </h1>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              GaladimaPrint delivers high-quality printing, branding, and office solutions tailored to your business needs.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#21a049] hover:bg-green-700 text-white px-6 py-3 rounded font-bold transition-all">
                Get a Quote
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded font-bold transition-all">
                Our Services
              </button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
            <div className="absolute inset-0 bg-[#21a049] z-0" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
            <img
              src="/images/hero.jpg" // Replace with your hero image
              alt="Printing Hero"
              className="absolute inset-0 w-full h-full object-cover z-10"
              style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 10% 100%)' }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="/images/about1.jpg" alt="Printing Process" className="rounded-lg shadow-xl w-4/5" />
          <img src="/images/about2.jpg" alt="Teamwork" className="rounded-lg shadow-2xl w-3/5 absolute -bottom-10 -right-0 border-8 border-white" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">A Journey of Quality Printing</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We combine state-of-the-art technology and expertise to deliver the best printing solutions for businesses of all sizes.
          </p>
          <div className="flex gap-10 mb-8">
            <div>
              <span className="text-3xl font-bold block">10+</span>
              <span className="text-gray-500 text-sm">Years of Experience</span>
            </div>
            <div>
              <span className="text-3xl font-bold block">500+</span>
              <span className="text-gray-500 text-sm">Happy Clients</span>
            </div>
          </div>
          <button className="bg-[#21a049] text-white px-8 py-3 rounded font-bold">About Us</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-wrap gap-8 -mt-24 relative z-20">
            <ServiceCard number="01" title="High-Quality Printing" description="We provide top-notch printing solutions tailored to your brand and needs." />
            <ServiceCard number="02" title="Fast Delivery" description="Timely delivery with premium quality standards maintained for every project." />
            <ServiceCard number="03" title="Custom Branding" description="From business cards to banners, we make your brand stand out." />
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#21a049] text-white px-8 py-2 rounded font-semibold">View All Services</button>
          </div>
        </div>
      </section>

    </div>
  );
}