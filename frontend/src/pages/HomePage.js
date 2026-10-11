
import React from "react";
import { Link } from "react-router-dom";

// Reusable Service Card
const ServiceCard = ({ number, title, description, icon }) => (
  <div className="group relative min-w-[260px] flex-1 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="absolute -top-5 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#21a049] text-lg font-bold text-white shadow-md">
      {number}
    </div>

    <div className="mb-5 mt-8 flex justify-center text-4xl" aria-hidden="true">
      {icon}
    </div>

    <h3 className="mb-3 text-xl font-semibold text-gray-800">{title}</h3>

    <p className="mb-6 text-sm leading-relaxed text-gray-500">
      {description}
    </p>

    <Link
      to="/services"
      className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#21a049] hover:text-green-800"
    >
      LEARN MORE <span aria-hidden="true">→</span>
    </Link>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* The main Header is already rendered by App.js */}

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-[#07150D] via-gray-950 to-black text-white"
      >
        <div
          aria-hidden="true"
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#21a049]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#21a049]/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-28 md:grid-cols-2 md:px-10 md:pb-24 md:pt-32 lg:gap-16">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#21a049]/30 bg-[#21a049]/10 px-4 py-2 text-xs font-semibold tracking-wide text-green-300 sm:text-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#21a049]"
              />
              YOUR TRUSTED PRINTING PARTNER
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Quality Printing.
              <span className="mt-1 block text-[#21a049]">
                Professional Results.
              </span>
            </h1>

            <p className="mb-9 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
              From everyday printing and photocopying to business cards,
              banners, and custom designs, GaladimaPrint helps bring your
              ideas to life with reliable service and attention to detail.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#21a049] px-7 py-4 font-semibold text-white shadow-lg shadow-green-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700"
              >
                Explore Our Services <span aria-hidden="true">→</span>
              </Link>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-[#21a049] hover:bg-white/5"
              >
                Discover GaladimaPrint
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-7">
              <div>
                <p className="text-sm font-semibold text-white sm:text-base">
                  Printing
                </p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  Everyday needs
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white sm:text-base">
                  Branding
                </p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  Business identity
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white sm:text-base">
                  Finishing
                </p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  Binding and more
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mt-4 md:mt-0">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-2 rounded-3xl border border-[#21a049]/30"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
              <img
                src="/images/Office.jpg"
                alt="Professional printing and office services at GaladimaPrint"
                className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[470px]"
                fetchPriority="high"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5"
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-300">
                  GaladimaPrint
                </p>

                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  Your Ideas, Professionally Printed.
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl bg-white p-4 text-gray-900 shadow-xl sm:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-2xl text-[#21a049]">
                ✓
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Quality-focused service
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  From print to finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-14 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-24"
      >
        <div className="relative mx-auto w-full max-w-xl pb-8 pr-4">
          <img
            src="/images/bag1.jpg"
            alt="Printing products and materials"
            loading="lazy"
            className="w-full rounded-3xl shadow-xl"
          />

          <img
            src="/images/bag.jpg"
            alt="Custom printed packaging"
            loading="lazy"
            className="absolute -bottom-2 -right-1 w-2/3 rounded-2xl border-8 border-gray-50 shadow-2xl sm:-right-4"
          />
        </div>

        <div className="pt-2">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-[#21a049]">
            About Us
          </span>

          <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
            A Journey of Quality Printing
          </h2>

          <p className="mb-8 leading-relaxed text-gray-600">
            We combine printing expertise with careful attention to detail
            to deliver quality printing, branding, and office solutions
            for individuals and businesses.
          </p>

          <div className="mb-8 flex flex-wrap gap-10 sm:gap-12">
            <div>
              <span className="text-3xl font-bold text-gray-900 sm:text-4xl">
                10+
              </span>
              <p className="mt-1 text-sm text-gray-500">Years Experience</p>
            </div>

            <div>
              <span className="text-3xl font-bold text-gray-900 sm:text-4xl">
                500+
              </span>
              <p className="mt-1 text-sm text-gray-500">Satisfied Clients</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-[#21a049] hover:text-green-800"
          >
            Contact Us <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="scroll-mt-20 bg-gray-100 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-[#21a049]">
              What We Do
            </span>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Core Services
            </h2>

            <p className="mx-auto max-w-xl leading-relaxed text-gray-500">
              Everything you need to print, brand, and grow your business.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <ServiceCard
              number="01"
              title="High-Quality Printing"
              description="Precision printing with quality materials and professional finishes."
              icon="🖨️"
            />

            <ServiceCard
              number="02"
              title="Reliable Service"
              description="Dependable service for your everyday printing and business needs."
              icon="⚡"
            />

            <ServiceCard
              number="03"
              title="Custom Branding"
              description="Custom-designed materials that help your business stand out."
              icon="🎨"
            />
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#21a049] px-8 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              View All Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-[#21a049]">
              Get in Touch
            </span>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Let's Bring Your Ideas to Life
            </h2>

            <p className="mb-10 leading-relaxed text-gray-500">
              Need printing, photocopying, business cards, banners, or
              custom branding? Contact GaladimaPrint to discuss your needs.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {/* Phone Number One */}
            <a
              href="tel:+2348068989600"
              className="flex items-center gap-4 rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-[#21a049] hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
                📞
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-500">Call Us</p>
                <p className="font-bold text-gray-900">0806 898 9600</p>
              </div>
            </a>

            {/* Phone Number Two */}
            <a
              href="tel:+2348109961369"
              className="flex items-center gap-4 rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-[#21a049] hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
                📱
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-500">Contact Number</p>
                <p className="font-bold text-gray-900">0810 996 1369</p>
              </div>
            </a>
          </div>

          {/* WhatsApp Quote Button */}
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/2348068989600?text=Hello%20GaladimaPrint%2C%20I%20would%20like%20to%20request%20a%20printing%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#21a049] px-8 py-4 font-semibold text-white shadow-md transition hover:-translate-y-1 hover:bg-green-700"
            >
              Chat on WhatsApp <span aria-hidden="true">→</span>
            </a>

            <p className="mt-4 text-sm text-gray-500">
              We look forward to helping with your printing needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
