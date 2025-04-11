// components/PrivacyPolicy.jsx
import React from "react";

const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </section>
);

const Termscondtions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-4">
        Effective Date: March 1, 2025
      </p>
      <p className="mb-4">
        Welcome to Solis Rcm. By accessing www.solisrcm.com, you agree to the
        following terms and conditions.
      </p>

      <Section title="1. Use of Website">
        <p>Users must be 18 years or older to access our services.</p>
        <p>
          Unauthorized use, data scraping, or automated access to our website is
          prohibited.
        </p>
      </Section>

      <Section title="2. Services & Payments">
        <p>
          Our services are subject to availability and may be updated at any
          time.
        </p>
        <p>
          Payment is required upfront for billing, credentialing, and compliance
          services
        </p>
        <p>No refunds are provided for completed services.</p>
      </Section>

      <Section title="3. Intellectual Property">
        <p>
          All content on our website, including text, images, and branding, is
          owned by Solis Rcm .
        </p>
        <p>
          Unauthorized use, reproduction, or distribution of our content is
          prohibited.
        </p>
      </Section>

      <Section title="4. Limitation of Liability">
        <p>
          We are not liable for any indirect or consequential damages arising
          from the use of our services.
        </p>
        <p>
          Users agree to indemnify Revmedics LLC against any legal claims due to
          misuse of our services.
        </p>
      </Section>
      <Section
        title="5. Non-Solicitation
"
      >
        <p>
          During the term of this agreement and for two (2) years after
          termination, both parties agree not to:
        </p>
        <p>
          - Solicit clients or customers of the other party. <br />- Disclose
          client or customer information to third parties.
          <br /> - Induce employees or agents of the other party to leave their
          position.
          <br /> - Make disparaging statements about the other party.
        </p>
      </Section>
      <Section title="6. Confidentiality">
        <p>
          Both parties agree to maintain the confidentiality of any proprietary
          information and not disclose it to third parties without consent.
        </p>
      </Section>
      <Section title="7. Non-Competition">
        <p>
          During the term of this agreement and for one (1) year after
          termination, both parties agree not to engage in competing business
          activities.
        </p>
      </Section>
      <Section title="8. Termination">
        <p>
          This agreement remains effective until terminated by either party with
          a thirty (30) day written notice. We reserve the right to suspend
          services for any breach of terms.
        </p>
      </Section>
      <Section title="9. Changes to Terms">
        <p>
          We reserve the right to update these terms at any time. Continued use
          of our website constitutes acceptance of the revised terms.
        </p>
      </Section>
      <Section title="10. Contact Information">
        <p>
          Email: info@solisrcm.com
          <br />
          Phone: 412-547-2794
        </p>
      </Section>
    </div>
  );
};

export default Termscondtions;
