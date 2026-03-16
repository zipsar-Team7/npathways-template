import { useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Sales",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "Sales", message: "" });
  };

  return (
    <div className="contact-page fade-in">
      <section className="section bg-gray contact-hero">
        <div className="container text-center">
          <h1>
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have questions? We're here to help you on your journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="mb-8">
                Reach out to us for any queries regarding our services,
                products, or support.
              </p>

              <div className="info-item">
                <div className="info-icon">L</div>
                <div>
                  <h3>Headquarters</h3>
                  <p>
                    123 Education Lane, Tech Park
                    <br />
                    Bangalore, KA 560001, India
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">@</div>
                <div>
                  <h3>Email Us</h3>
                  <p>info@zipway.global</p>
                  <p className="text-sm text-gray-500">
                    For support: support@zipway.global
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">#</div>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210</p>
                  <p className="text-sm text-gray-500">
                    Mon-Fri, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>

              <div className="map-placeholder mt-8">
                <img
                  src="https://placehold.co/600x300/E2E8F0/64748B?text=Map+Location"
                  alt="Map"
                  className="rounded-xl w-full"
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="contact-form-card">
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Department</label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="Sales">
                      Sales & Inquiries (Pre-purchase)
                    </option>
                    <option value="Tech Support">
                      Tech Support (Link issues)
                    </option>
                    <option value="Billing">Billing & Refunds</option>
                  </select>
                  <p className="form-help">
                    {formData.subject === "Sales" &&
                      "For questions about our services and products."}
                    {formData.subject === "Tech Support" &&
                      "If you haven't received your download link or can't open a file."}
                    {formData.subject === "Billing" &&
                      "For invoice queries or refund requests."}
                  </p>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <Button variant="premium" type="submit" fullWidth size="large">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
