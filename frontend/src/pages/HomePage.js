
import React from "react";
import { Link } from "react-router-dom";

const WHATSAPP_URL =
  "https://wa.me/2348068989600?text=Hello%20GaladimaPrint%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

const portfolioItems = [
  {
    image: "/images/businesscard.jpg",
    title: "Business Cards",
    category: "Corporate Printing",
    description:
      "Professional business cards for individuals, brands and businesses.",
  },
  {
    image: "/images/packaging.jpg",
    title: "Custom Packaging",
    category: "Product Branding",
    description:
      "Printed packaging to give products a distinctive presentation.",
  },
  {
    image: "/images/complent_card.jpg",
    title: "Compliment Cards",
    category: "Business Stationery",
    description:
      "Custom compliment cards for businesses and professional use.",
  },
  {
    image: "/images/banners.jpg",
    title: "Banners",
    category: "Promotional Printing",
    description:
      "Printed banners for advertising, events and business promotion.",
  },
];

const features = [
  {
    number: "01",
    title: "Product Catalogue",
    description:
      "Browse available printing products, stationery and promotional materials in one place.",
  },
  {
    number: "02",
    title: "Custom Print Orders",
    description:
      "Specify your printing needs, preferred products and order requirements.",
  },
  {
    number: "03",
    title: "Shopping Cart",
    description:
      "Select products and review your chosen items before proceeding with an order.",
  },
  {
    number: "04",
    title: "Customer Accounts",
    description:
      "Register or log in to access customer account features and personalised services.",
  },
  {
    number: "05",
    title: "Order History",
    description:
      "Review previous orders and access order information through your customer account.",
  },
  {
    number: "06",
    title: "Online Payments",
    description:
      "Paystack payment integration is planned to support convenient online checkout.",
  },
];

const services = [
  {
    number: "01",
    title: "Digital Printing",
    description:
      "Printing for documents, flyers, business materials and everyday requirements.",
  },
  {
    number: "02",
    title: "Branding & Design",
    description:
      "Business cards, branded stationery and promotional materials for businesses and organisations.",
  },
  {
    number: "03",
    title: "Large Format Printing",
    description:
      "Banners and promotional materials for events, advertising and business visibility.",
  },
  {
    number: "04",
    title: "Finishing Services",
    description:
      "Binding, lamination and other finishing services for a neat, professional result.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-[#21a049]"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? "text-green-300" : "text-[#21a049]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PortfolioCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#21a049]">
          {item.category}
        </p>

        <h3 className="mt-2 text-lg font-bold text-gray-900">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {item.description}
        </p>

        <a
          href={`${WHATSAPP_URL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#21a049] transition hover:text-green-800"
        >
          Make an Enquiry
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

function FeatureCard({ feature }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#21a049]/50 hover:shadow-lg sm:p-7">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-sm font-bold text-[#21a049]">
        {feature.number}
      </span>

      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {feature.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
        {feature.description}
      </p>
    </article>
  );
}

function ServiceItem({ service }) {
  return (
    <article className="border-t border-gray-200 py-6 sm:py-7">
      <div className="flex items-start gap-5">
        <span className="pt-1 text-sm font-bold tracking-widest text-[#21a049]">
          {service.number}
        </span>

        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {service.title}
          </h3>

          <p className="mt-3 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
            {service.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-gray-900">
      {/* HERO SECTION: Original dark green-to-black colour scheme */}
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-24 sm:px-8 md:grid-cols-2 md:px-10 md:pb-24 md:pt-28 lg:gap-16 lg:px-12">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#21a049]/30 bg-[#21a049]/10 px-4 py-2 text-xs font-semibold tracking-wide text-green-300 sm:text-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#21a049]"
              />
              YOUR PRINTING PARTNER
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Quality Printing.
              <span className="mt-1 block text-[#21a049]">
                Professional Results.
              </span>
            </h1>

            <p className="mb-9 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              From everyday printing and photocopying to business cards,
              banners and custom designs, GaladimaPrint helps bring your
              ideas to life with attention to detail.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#21a049] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-700"
              >
                Explore Our Services
                <ArrowIcon />
              </Link>

              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-[#21a049] hover:bg-white/5"
              >
                Browse Products
              </Link>
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

          {/* Hero image */}
          <div className="relative mt-2 md:mt-0">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-2 rounded-3xl border border-[#21a049]/30"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/40">
              <img
                src="/images/Office.jpg"
                alt="GaladimaPrint printing workspace"
                fetchPriority="high"
                className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[470px]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5"
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
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-xl font-bold text-[#21a049]">
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
        className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-12 px-6 py-20 sm:px-8 md:grid-cols-2 md:gap-16 md:px-10 md:py-24 lg:px-12"
      >
        <div className="grid grid-cols-2 items-start gap-4">
          <div className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src="/images/bag1.jpg"
              alt="Printing products and materials"
              loading="lazy"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>

          <div className="mt-10 overflow-hidden rounded-xl bg-gray-100">
            <img
              src="/images/bag.jpg"
              alt="Custom printed products"
              loading="lazy"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About GaladimaPrint"
            title="A better experience for your printing needs."
            description="We bring printing products, branding materials and office services together to help individuals and businesses find what they need."
          />

          <p className="mt-5 text-base leading-8 text-gray-600">
            Whether you need business stationery, promotional materials or
            everyday document printing, our goal is to make it easier to
            discover products and enquire about your next print job.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-[#21a049] transition hover:text-green-800"
          >
            Learn More About Us
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section
        id="features"
        className="scroll-mt-20 bg-gray-50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12">
          <SectionHeading
            eyebrow="Platform Features"
            title="Everything for your printing needs in one place."
            description="The GaladimaPrint platform is designed to simplify product discovery, customer orders and access to printing services."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.number} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / PRODUCTS */}
      <section
        id="portfolio"
        className="scroll-mt-20 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Portfolio"
              title="Print products that represent your brand."
              description="Explore selected printing categories for business, promotion and professional presentation."
            />

            <Link
              to="/products"
              className="inline-flex shrink-0 items-center gap-2 font-bold text-[#21a049] transition hover:text-green-800"
            >
              Explore All Products
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12">
          <SectionHeading
            eyebrow="How It Works"
            title="Getting started is straightforward."
            description="Explore products, review your requirements and contact our team to discuss your printing project."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="border-l-2 border-[#21a049] pl-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#21a049]">
                Step 01
              </p>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Explore
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Browse available products and printing services.
              </p>
            </article>

            <article className="border-l-2 border-[#21a049] pl-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#21a049]">
                Step 02
              </p>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Select Your Products
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Choose products and specify your printing requirements.
              </p>
            </article>

            <article className="border-l-2 border-[#21a049] pl-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#21a049]">
                Step 03
              </p>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Make an Enquiry
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Contact GaladimaPrint to discuss your order and requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 sm:px-8 sm:py-24 md:px-10 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="What We Do"
              title="Printing solutions for individuals and businesses."
              description="Discover our printing, branding and finishing services for everyday and professional projects."
            />

            <Link
              to="/services"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#21a049] px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              View All Services
              <ArrowIcon />
            </Link>
          </div>

          <div>
            {services.map((service) => (
              <ServiceItem key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 bg-white px-6 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-br from-[#07150D] via-gray-950 to-black px-6 py-12 sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#21a049]">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's bring your ideas to life.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg">
              Need printing, photocopying, business cards, banners or custom
              branding? Contact GaladimaPrint to discuss your requirements.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:min-w-56 lg:flex-col">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#21a049] px-6 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Chat on WhatsApp
              <ArrowIcon />
            </a>

            <a
              href="tel:+2348068989600"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-6 py-4 font-semibold text-white transition hover:border-[#21a049] hover:bg-white/5"
            >
              Call 0806 898 9600
            </a>

            <a
              href="tel:+2348109961369"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-6 py-4 font-semibold text-white transition hover:border-[#21a049] hover:bg-white/5"
            >
              Call 0810 996 1369
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
