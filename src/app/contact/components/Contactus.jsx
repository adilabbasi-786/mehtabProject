"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <p className="text-blue-600 font-medium mb-4">GET IN TOUCH</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b66] mb-6">
              Contact Us For Further Information !
            </h1>
            <p className="text-gray-600">
              Use the details below to reach out to our support team. We&apos;ll
              get back to you within 24 hours to discuss.
            </p>
          </div>

          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start">
              <div className="bg-blue-600 p-4 rounded-full mr-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0a3b66] mb-2">
                  Location
                </h3>
                <p className="text-gray-600">
                  16775 Addison Rd,
                  <br />
                  Addison, TX 75001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="bg-blue-600 p-4 rounded-full mr-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0a3b66] mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">(469) 915-4211</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="bg-blue-600 p-4 rounded-full mr-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0a3b66] mb-2">
                  Email
                </h3>
                <p className="text-gray-600">info@tristarmbc.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-[#0a3b66] p-8 md:p-12 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-md bg-white"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-md bg-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-3 rounded-md bg-white"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 rounded-md bg-white"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="flex items-start gap-2 text-white">
                <input
                  type="checkbox"
                  name="smsConsent"
                  className="mt-1"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                />
                <span className="text-sm">
                  By checking this box you are opting in to receive SMS messages
                  from our company regarding our services
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>

            <p className="text-sm text-white/80">
              By completing this form, you agree to allow us to use the provided
              information to address your inquiry. Your data will not be used
              for marketing unless you explicitly opt-in for marketing
              communications.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
