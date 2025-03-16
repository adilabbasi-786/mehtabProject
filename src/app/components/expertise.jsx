import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BsJournalMedical } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { BsAndroid2 } from "react-icons/bs";
export default function Expertise() {
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
          {/* Medical Billing Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="mb-4">
              <BsJournalMedical className="w-12 h-15 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Medical Billing
            </h3>
            <p className="text-gray-600 mb-6">
              End to end medical billing service on time to minimize denials
            </p>
            <Link
              href="/services/medical-billing"
              className="mt-auto inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
            >
              LEARN MORE <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Medical Credentialing Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="mb-4">
              <TfiWrite className="w-12 h-15 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Medical Credentialing
            </h3>
            <p className="text-gray-600 mb-6">
              Best & professional credentialing to keep you compliant
            </p>
            <Link
              href="/services/medical-credentialing"
              className="mt-auto inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
            >
              LEARN MORE <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Website Development Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="mb-4">
              <BsAndroid2 className="w-12 h-15 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Website Development
            </h3>
            <p className="text-gray-600 mb-6">
              To improve your branding & online business
            </p>
            <Link
              href="/services/website-development"
              className="mt-auto inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
            >
              LEARN MORE <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Contact Us Card */}
          <div className="bg-blue-500 p-8 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Contact Us
            </h3>
            <Link
              href="/contact"
              className="px-6 py-2 border border-white text-white hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
