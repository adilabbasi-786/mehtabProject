import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BsJournalMedical } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { BsAndroid2 } from "react-icons/bs";
import { FaTooth, FaChartLine, FaHeadset, FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";

export default function OurServices() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-4">
          <h3 className="text-sm md:text-base font-medium text-blue-500 uppercase tracking-wide">
            TRISTAR BILLING & CREDENTIALING
          </h3>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-12">
          Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Medical Billing */}
          <ServiceCard
            icon={<BsJournalMedical className="w-12 h-12 text-blue-400" />}
            title="Medical Billing"
            desc="End to end medical billing service on time to minimize denials"
            link="/services/medical-billing"
          />

          {/* Medical Credentialing */}
          <ServiceCard
            icon={<TfiWrite className="w-12 h-12 text-blue-400" />}
            title="Medical Credentialing"
            desc="Best & professional credentialing to keep you compliant"
            link="/services/medical-credentialing"
          />

          {/* Revenue Cycle Management */}
          <ServiceCard
            icon={<FaChartLine className="w-12 h-12 text-blue-400" />}
            title="Revenue Cycle Management"
            desc="Optimize your revenue processes with efficient management"
            link="/services/revenue-cycle-management"
          />

          {/* Credentialing & Licensing */}
          <ServiceCard
            icon={<RiGovernmentLine className="w-12 h-12 text-blue-400" />}
            title="Credentialing & Licensing"
            desc="Get licensed and credentialed quickly and correctly"
            link="/services/credentialing-licensing"
          />

          {/* Coding */}
          <ServiceCard
            icon={<FaCode className="w-12 h-12 text-blue-400" />}
            title="Medical Coding"
            desc="Accurate coding solutions for better reimbursement"
            link="/services/medical-coding"
          />

          {/* Dental Billing */}
          <ServiceCard
            icon={<FaTooth className="w-12 h-12 text-blue-400" />}
            title="Dental Billing"
            desc="Expert dental billing to maximize collections"
            link="/services/dental-billing"
          />

          {/* Analytics & Reporting */}
          <ServiceCard
            icon={<FaChartLine className="w-12 h-12 text-blue-400" />}
            title="Analytics & Reporting"
            desc="Insightful reporting to grow your practice"
            link="/services/analytics-reporting"
          />

          {/* Front Office Support */}
          <ServiceCard
            icon={<FaHeadset className="w-12 h-12 text-blue-400" />}
            title="Front Office Support"
            desc="Support for scheduling, eligibility, and more"
            link="/services/front-office-support"
          />

          {/* Web Design and SEO */}
          <ServiceCard
            icon={<MdDesignServices className="w-12 h-12 text-blue-400" />}
            title="Web Design & SEO"
            desc="Beautiful websites that rank and attract patients"
            link="/services/web-design-seo"
          />

          {/* Contact Us Card */}
          <div className="bg-blue-500 p-8 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Contact Us
            </h3>
            <Link
              href="/contact"
              className="px-6 py-2 border border-white text-white hover:bg-blue-600 transition-colors duration-200 font-medium rounded-full"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const ServiceCard = ({ icon, title, desc, link }) => (
  <Link href={link}>
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{desc}</p>
      <div className="mt-auto inline-flex items-center text-blue-500 hover:text-blue-700 font-medium">
        LEARN MORE <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </div>
  </Link>
);
