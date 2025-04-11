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
      <Section title="7. Contact Information">
        <p>Email: info@solisrcm.com Phone: 412-547-2794</p>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
