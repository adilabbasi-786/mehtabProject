"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Marquee from "react-fast-marquee";
import React from "react";
export default function Hero() {
  const pathname = usePathname();

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner1.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Professional Medical Billing Services
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Streamline your healthcare practice with our comprehensive billing
              and credentialing solutions
            </p>

            {/* Conditionally Rendered */}
            {pathname === "/" ? (
              <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            ) : pathname === "/aboutus" ? (
              <p className="text-4xl font-bold text-white">About Us</p>
            ) : pathname === "/specialities" ? (
              <p className="text-4xl font-bold text-white">Our Specialties</p>
            ) : pathname === "/contact" ? (
              <p className="text-4xl font-bold text-white">Contact Us</p>
            ) : pathname === "/services" ? (
              <p className="text-4xl font-bold text-white">Services</p>
            ) : null}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Ticker Section */}
      <Marquee
        speed={50}
        gradient={false}
        className="bg-black text-red-500 py-3 text-xl font-semibold"
      >
        Unlock Your Practice's Potential: Flat Fee Credentialing Services for
        All Insurances - Just $1,000!
      </Marquee>

      {/* Call Us Section */}
      <div className="h-[150px] bg-[#0d4471] flex items-center justify-center">
        <p className="text-white text-3xl text-center">
          Looking To Get Our Services - Call Us Now (469) 915-4211
        </p>
      </div>
    </>
  );
}
