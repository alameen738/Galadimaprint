import React from "react";
import "./ServicesPage.css";

const services = [
  {
    number: "01",
    title: "Digital Printing",
    description:
      "Flyers, business cards, brochures, invitations and quality document printing.",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59e6b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Large Format Printing",
    description:
      "Banners, posters, signs, stickers and promotional materials for your business.",
    image: "/images/large-format-printing.png",
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Creative designs that communicate your business, event or personal brand.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Business Branding",
    description:
      "Professional visual identities, branded materials and promotional designs.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Website Development",
    description:
      "Modern, responsive websites that give your business a professional online presence.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    title: "Software Development",
    description:
      "Custom software solutions designed around your business operations and needs.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "07",
    title: "Document Services",
    description:
      "Photocopying, scanning, binding, lamination and professional document preparation.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "08",
    title: "Stationery & Materials",
    description:
      "Business cards, letterheads, envelopes, paper products and office materials.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
  },
];

function ServicesPage() {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-eyebrow">
            WHAT WE DO
          </span>

          <h1>
            Services that
            <br />
            <span>bring ideas to life.</span>
          </h1>

          <p>
            From professional printing and branding to modern websites
            and custom software, we provide practical solutions for
            individuals, organizations and businesses.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">

        <div className="services-heading">
          <div>
            <span className="services-eyebrow">
              OUR SERVICES
            </span>

            <h2>
              See what we
              <br />
              <span>can do for you.</span>
            </h2>
          </div>

          <p>
            Explore our services and choose the solution that fits
            your project. Quality, creativity and reliability are
            at the heart of everything we do.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              className="service-card"
              key={service.number}
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <div className="service-overlay"></div>

              <div className="service-number">
                {service.number}
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-link">
                  Learn more
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">

        <div>
          <span className="services-eyebrow">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build
            <br />
            <span>something great.</span>
          </h2>

          <p>
            Contact GaladimaPrint today and let's discuss your
            printing, branding or technology needs.
          </p>
        </div>

        <a
          href="https://wa.me/2348109961369"
          target="_blank"
          rel="noreferrer"
          className="services-cta-button"
        >
          Start a Conversation
          <span>→</span>
        </a>

      </section>

    </div>
  );
}

export default ServicesPage;