import React from "react";
import { Link } from "react-router-dom";
import "./ServicesPage.css";

const services = [
  {
    number: "01",
    title: "Digital Printing",
    description:
      "High-quality printing for documents, flyers, brochures, business cards, invitations, and other business materials.",
  },
  {
    number: "02",
    title: "Large Format Printing",
    description:
      "Professional banners, posters, signage, roll-up banners, and other large-format promotional materials.",
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Creative and professional designs for logos, flyers, business cards, banners, invitations, and marketing materials.",
  },
  {
    number: "04",
    title: "Business Branding",
    description:
      "Build a strong and consistent brand identity with professionally designed and printed branding materials.",
  },
  {
    number: "05",
    title: "Website Development",
    description:
      "Modern, responsive websites for businesses, organizations, institutions, and personal brands.",
  },
  {
    number: "06",
    title: "Software Development",
    description:
      "Custom software solutions designed to simplify business operations and improve productivity.",
  },
  {
    number: "07",
    title: "Photocopy & Document Services",
    description:
      "Fast and reliable photocopying, document printing, scanning, binding, and lamination services.",
  },
  {
    number: "08",
    title: "Stationery & Business Materials",
    description:
      "Professional business cards, letterheads, envelopes, stickers, ID cards, and other office materials.",
  },
];

function ServicesPage() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-label">OUR SERVICES</span>

          <h1>
            Professional Services
            <br />
            <span>Built Around Your Needs.</span>
          </h1>

          <p>
            From high-quality printing and branding to modern websites and
            software solutions, GaladimaPrint provides reliable services for
            individuals, businesses, and organizations.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="services-heading">
          <span className="services-label">WHAT WE OFFER</span>

          <h2>
            Everything You Need
            <br />
            <span>In One Place.</span>
          </h2>

          <p>
            We combine creativity, technology, and professional printing to
            deliver solutions that help our clients present themselves better.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to="/contact" className="service-link">
                Get a Quote <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div>
          <span className="services-label">READY TO START?</span>

          <h2>Let's bring your idea to life.</h2>

          <p>
            Tell us what you need and our team will help you find the right
            solution.
          </p>
        </div>

        <Link to="/contact" className="services-cta-button">
          Contact Us <span>→</span>
        </Link>
      </section>
    </div>
  );
}

export default ServicesPage;
