import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-label">GET IN TOUCH</span>

          <h1>
            Let's Work
            <br />
            <span>Together.</span>
          </h1>

          <p>
            Have a printing, branding, website, or software project?
            We'd love to hear from you. Tell us what you need and
            let's bring your idea to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        {/* Contact Information */}
        <div className="contact-info">
          <span className="contact-label">CONTACT INFORMATION</span>

          <h2>
            Let's talk about
            <br />
            <span>your project.</span>
          </h2>

          <p className="contact-intro">
            Whether you need professional printing, business branding,
            graphic design, website development, or custom software,
            our team is ready to help.
          </p>

          <div className="contact-details">
            {/* Phone */}
            <div className="contact-detail">
              <div className="contact-icon">☎</div>

              <div>
                <span>PHONE</span>

                <a href="tel:+2348109961369">
                  +234 810 996 1369
                </a>

                <a href="tel:+3470774444449">
                  +34 707 744 4449
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="contact-detail">
              <div className="contact-icon">⌖</div>

              <div>
                <span>ADDRESS</span>

                <p>
                  Muhammad Abdullahi Wase Way,
                  <br />
                  Kano, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            className="contact-whatsapp"
            href="https://wa.me/2348109961369"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
            <span>→</span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h3>Send us a message</h3>

            <p>
              Fill in the form below and we'll get back to you.
            </p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Required</label>

              <select id="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>

                <option value="digital-printing">
                  Digital Printing
                </option>

                <option value="large-format">
                  Large Format Printing
                </option>

                <option value="graphic-design">
                  Graphic Design
                </option>

                <option value="branding">
                  Business Branding
                </option>

                <option value="website">
                  Website Development
                </option>

                <option value="software">
                  Software Development
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-cta">
        <div>
          <span className="contact-label">NEED A QUICK RESPONSE?</span>

          <h2>Talk to us directly.</h2>

          <p>
            Reach us on WhatsApp and we'll respond as soon as possible.
          </p>
        </div>

        <a
          href="https://wa.me/2348109961369"
          target="_blank"
          rel="noreferrer"
          className="contact-cta-button"
        >
          WhatsApp Us
          <span>→</span>
        </a>
      </section>
    </div>
  );
}

export default ContactPage;
