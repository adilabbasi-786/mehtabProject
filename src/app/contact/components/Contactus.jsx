"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          smsConsent: false,
        });
      } else {
        toast.error(result.message || "Form submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
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
                  1942 Broadway St Ste 314c
                  <br />
                  Boulder Co 80302
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
                <p className="text-gray-600">412-547-2794</p>
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
                <p className="text-gray-600">info@solisrcm.com</p>
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
                
                <span className="text-sm">
                  Do you agree to receive SMS from Solis, LLC?
                </span>
                <input
                  type="checkbox"
                  name="smsConsent"
                  className="mt-1"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                />
                <span>

                Yes
                </span>
                <input
                  type="checkbox"
                  name="smsConsent"
                  className="mt-1"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                />
                <span>

                No
                </span>
                
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-400"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <h1 className="text-md text-white/80">

              SMS Terms of Service
            </h1>

            <p className="text-sm text-white/80">

            SMS Terms of Service By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from Solis. This includes SMS messages for appointment scheduling, appointment reminders, post-visit instructions, lab notifications, and billing notifications. Message frequency varies. Message and data rates may apply. See <a href="/policy" className="text-blue-500 underline">privacy policy</a> at Privacy Ploicy. Message HELP for help. Reply STOP to any message to opt out.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
