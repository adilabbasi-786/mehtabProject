// components/PrivacyPolicy.jsx
import React from "react";

const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4">
        Effective Date: March 1, 2025
      </p>
      <p className="mb-4">
        Solis Rcm ("we," "our," "us") is committed to protecting your privacy.
        This Privacy Policy outlines how we collect, use, disclose, and
        safeguard your information when you visit our website,{" "}
        <a href="https://www.solisrcm.com/" className="text-blue-600 underline">
          Solis Rcm
        </a>
        .
      </p>

      <Section title="1. Information We Collect">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, billing details, and other identifiers.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, operating
            system, and access logs.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you interact with
            our website, products, and services.
          </li>
          <li>
            <strong>Health Information:</strong> If applicable, details related
            to medical billing and healthcare services.
          </li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide, operate, and improve our services.</li>
          <li>Personalize user experiences and respond to inquiries.</li>
          <li>Process payments and manage customer accounts.</li>
          <li>
            Send marketing, promotions, and service-related communications (with
            consent).
          </li>
          <li>
            Ensure compliance with The Campaign Registry (TCR) and other legal
            regulations.
          </li>
          <li>
            Facilitate medical billing services, including interactions with
            healthcare providers and insurance companies.
          </li>
        </ul>
      </Section>

      <Section title="3. Data Sharing & Compliance">
        <p>
          We do not sell or share text messaging opt-in data with third parties
          or affiliates for marketing.
        </p>
        <p>
          Third-party services used (e.g., payment processors) follow industry
          standards to protect user data.
        </p>
        <p>
          All data sharing complies with applicable laws and regulations,
          including HIPAA.
        </p>
      </Section>

      <Section title="4. SMS Communications">
        <p>
          We may send appointment reminders, payment notifications, and other
          relevant information via SMS on behalf of healthcare providers.
        </p>
        <p>
          Consent for receiving SMS messages is obtained through our service
          agreements or interactions. You can opt out of receiving SMS messages
          at any time by replying STOP or UNSUBSCRIBE
        </p>
      </Section>
      <Section title="5. Data Security">
        <p>
          We implement safeguards to protect personal information from
          unauthorized access, use, or disclosure
        </p>
        <p>
          While we strive to protect your data, no method of transmission over
          the internet or electronic storage is 100% secure.
        </p>
      </Section>
      <Section title="6. Changes to This Privacy Policy">
        <p>
          We reserve the right to update this Privacy Policy. Continued use of
          our services after changes constitutes acceptance of the updated
          policy.
        </p>
      </Section>
      {/* New Data Privacy Policy Section */}
      <Section title="Data Privacy">
        <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
        <p>
          <strong>a. Personal Information*</strong> – We collect various types of information to provide and improve our services, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>b. Identifying Information:</strong></li>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name</li>
            <li>Contact details (email addresses, phone numbers)</li>
          </ul>
          <li>
            <strong>Medical Credentialing and Billing Information:</strong> Any information related to medical credentialing and billing services that you provide to us.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Providing Services:</strong> To facilitate medical billing and credentialing services as requested by you.</li>
          <li><strong>Communication:</strong> To respond to your inquiries, send updates, and provide information related to our services.</li>
          <li><strong>Improvement:</strong> To analyze usage patterns and improve the quality of our website and services.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">3. Information Sharing & Disclosure</h3>
        <p>
          We do not share your personal information with third parties. Your information is solely used for the provision of our medical credentialing services and communication with you.
        </p>
        <p>
          No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
        </p>

        <h3 className="text-lg font-semibold mb-2">4. Your Consent and Control</h3>
        <p>
          By providing your information, you consent to the collection, processing, and storage of your personal data as outlined in this Privacy Policy.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Opt-Out:</strong> You may opt out of receiving promotional communications from us by contacting us directly.</li>
          <li><strong>Access and Correction:</strong> You may request access to and correction of your personal information by contacting us.</li>
        </ul>
      </Section>
      <Section title=" Contact Information">
        <p>Email: info@solisrcm.com Phone: 412-547-2794</p>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
