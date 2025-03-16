"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function BannerSection() {
  return (
    <section className="relative w-full bg-[#1e5584] text-white overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-[#1e5584]/90 z-0"></div>

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base font-medium tracking-wider mb-4">
              WITH 10 YEARS OF EXPERIENCE
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              We&apos;re Serving 46+ Practices & 100+ Providers in USA
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-sm md:text-base lg:text-lg opacity-90">
                We are a medical billing and credentialing company based in
                Texas. We provide a variety of services for providers all across
                the US, including Medical billing, Credentialing and Web
                development.
              </p>

              <p className="text-sm md:text-base lg:text-lg opacity-90">
                With a vision to be market leader, we offer a comprehensive
                range of billing and credentialing services that are tailored to
                the needs of our clients.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/appointment"
                className="bg-white text-[#1e5584] px-6 py-3 text-center font-medium transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1e5584] focus:outline-none"
              >
                BOOK APPOINTMENT
              </Link>

              <Link
                href="/contact"
                className="border border-white bg-transparent px-6 py-3 text-center font-medium transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1e5584] focus:outline-none"
              >
                CONTACT US
              </Link>
            </div>

            <p className="text-lg md:text-xl font-medium">
              OR CALL:{" "}
              <a href="tel:+14699154211" className="hover:underline">
                (469) 915-4211
              </a>
            </p>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative h-[600px] w-[800px]">
              <Image
                src="/banner4.png"
                alt="Medical professional"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
