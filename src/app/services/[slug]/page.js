import React from "react";
import TopHeader from "../../components/top-header";
import Header from "../../components/header";
import Footer from "../../components/footer";

const serviceDetails = {
  "revenue-cycle-management": {
    title: "Revenue Cycle Management (RCM)",
    description:
      "Revenue Cycle Management (RCM) is the backbone of healthcare practices, ensuring that providers are correctly paid for their services. At SOLIS, we offer comprehensive RCM services that cover the entire revenue cycle process—from patient appointment scheduling to billing and collections. Our dedicated team assesses and optimizes each stage of your revenue cycle to minimize payment delays and denials.",
    keyBenefits: [
      "Streamlined Processes: We employ best practices and technology to enhance efficiency in billing operations.",
      "Real-time Reporting: Receive insightful, real-time analytics that help track revenue performance metrics.",
      "Personalized Strategy: Our experts analyze industry benchmarks to create a tailored RCM strategy that aligns with your practice goals.",
    ],
    whyChooseUs:
      "Leave the complexities of RCM to our experienced professionals, so you can dedicate your time and energy to what matters most—providing exceptional patient care.",
  },
  "medical-billing": {
    title: "Medical Billing Services",
    description:
      "Effective medical billing is essential for healthcare providers to ensure a steady revenue stream and maintain their focus on patient care. At SOLIS, we provide comprehensive medical billing services designed to handle the complexities of billing and collections. Our experienced team works diligently to ensure accurate coding, timely submissions, and effective follow-ups, enabling providers to optimize their financial performance.",
    keyBenefits: [
      "Accuracy and Compliance: We prioritize precise coding and adherence to regulations, reducing the risk of claim denials and ensuring compliance with industry standards.",
      "Faster Payments: Our efficient billing processes are aimed at minimizing the turnaround time for claims, resulting in quicker payments and improved cash flow for your practice.",
      "Dedicated Support: Our skilled professionals are always available to address your inquiries and provide insights into your billing operations, ensuring a smooth and transparent process.",
      "Customizable Solutions: We understand that each practice has unique needs. Our tailored medical billing services are designed to align with your specific requirements and operational goals.",
      "Comprehensive Reporting: Gain access to detailed reports and analytics that provide clarity on billing performance, outstanding claims, and receivables, helping you make informed decisions.",
    ],
    whyChooseUs:
      "At SOLIS, we are committed to empowering healthcare providers with efficient medical billing solutions that enhance revenue cycle performance, allowing you to focus on delivering exceptional patient care.",
  },
  "medical-credentialing": {
    title: "Credentialing Services",
    description:
      "Credentialing is essential for healthcare providers to practice and obtain insurance reimbursements. At SOLIS, we streamline the credentialing process, enabling you to start seeing patients quickly. Our comprehensive services include primary source verification, application preparation, and submission to all necessary payers.",
    keyBenefits: [
      "Flat Fee Structure: Enjoy affordable credentialing services at a flat fee of just $1,000 for access to all payers.",
      "Hassle-free Process: We handle all paperwork and follow-ups with insurance companies, saving you time and effort.",
      "Continuous Monitoring: We stay proactive about license renewals and other requirements, ensuring your status remains compliant.",
    ],
    whyChooseUs:
      "With our dedicated Credentialing Services, you can focus on your practice while we ensure you are credentialed and ready for patient care.",
  },
  "credentialing-licensing": {
    title: "State Licensing",
    description:
      "Navigating the state licensing process is often complicated and time-consuming. SOLIS specializes in assisting healthcare providers in obtaining the necessary state licenses to practice legally. We ensure that you comply with state regulations so you can commence operations without unnecessary delays.",
    keyBenefits: [
      "Guidance through Regulations: Our team provides clear guidance on state-specific documentation and requirements.",
      "Expedited Process: We leverage our network and experience to expedite the licensing process on your behalf.",
      "Ongoing Support: We also offer assistance with renewals and changes in licensing regulations over time.",
    ],
    whyChooseUs:
      "With SOLIS by your side, you can mitigate the complexities of obtaining and maintaining state licenses, allowing you to focus on patient care.",
  },
  "medical-coding": {
    title: "Coding Services",
    description:
      "Accurate coding is crucial for billing compliance and maximizing reimbursements in medical practices. SOLIS offers professional coding services provided by certified and experienced coders who ensure that every procedure is assigned the correct code. Our coders are proficient in ICD-10, CPT, and HCPCS coding systems.",
    keyBenefits: [
      "Accuracy Guaranteed: We emphasize accuracy and thoroughness to reduce claim rejections and denials.",
      "Comprehensive Coding: Our services cover outpatient, inpatient, as well as surgical coding for various specialties.",
      "Ongoing Training: Our coders undergo continuous training to stay updated with the latest coding guidelines and regulations.",
    ],
    whyChooseUs:
      "With SOLIS's coding services, you'll experience seamless billing processes and improved cash flow through precise coding applications.",
  },
  "dental-billing": {
    title: "Dental Billing",
    description:
      "Dental billing requires unique knowledge of dental procedures and insurance protocols. At SOLIS, our Dental Billing Services offer specialized billing solutions designed specifically for dental practices, ensuring that procedures are accurately billed, and payments are collected promptly.",
    keyBenefits: [
      "Specialized Expertise: Our team understands the intricacies of dental coding and billing, ensuring compliance and accuracy.",
      "Insurance Verification: We handle insurance verifications upfront, minimizing surprises for your patients and your practice.",
      "Customized Reports: Receive tailored financial reports that help track your dental practice's financial health.",
    ],
    whyChooseUs:
      "Let SOLIS handle your dental billing, allowing you to concentrate on providing quality dental care.",
  },
  "analytics-reporting": {
    title: "Analytics & Reporting",
    description:
      "Comprehensive analytics and reporting services that provide valuable insights into your practice's performance.",
    keyBenefits: [
      "Custom Reports: Tailored to your practice's needs",
      "Performance Metrics: Track key performance indicators",
      "Trend Analysis: Identify patterns and opportunities",
    ],
    whyChooseUs:
      "Our analytics services help you make data-driven decisions to improve your practice's performance and profitability.",
  },
  "front-office-support": {
    title: "Front Office Support",
    description:
      "Comprehensive front office support services to streamline your practice's administrative operations.",
    keyBenefits: [
      "Patient Scheduling: Efficient appointment management",
      "Insurance Verification: Pre-service verification of benefits",
      "Patient Communication: Professional patient interaction",
    ],
    whyChooseUs:
      "Our front office support team helps you provide excellent patient service while maintaining efficient operations.",
  },
  "web-design-seo": {
    title: "Web Design & SEO",
    description:
      "Professional web design and SEO services to enhance your online presence and attract more patients.",
    keyBenefits: [
      "Modern Design: User-friendly, responsive websites",
      "SEO Optimization: Improve your search engine rankings",
      "Content Management: Easy-to-use content management systems",
    ],
    whyChooseUs:
      "Our web design and SEO services help you establish a strong online presence and attract more patients to your practice.",
  },
};

export default function ServiceDetail({ params }) {
  const service = serviceDetails[params.slug];

  if (!service) {
    return (
      <div>
        <TopHeader />
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Service Not Found
            </h1>
            <p className="text-gray-600">
              The requested service could not be found.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <main className="min-h-screen bg-white lg:ml-20 ml-0">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {service.title}
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Description
            </h2>
            <p className="text-gray-600 mb-8">{service.description}</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Benefits
            </h2>
            <ul className="list-disc pl-6 mb-8">
              {service.keyBenefits.map((benefit, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {benefit}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600">{service.whyChooseUs}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
