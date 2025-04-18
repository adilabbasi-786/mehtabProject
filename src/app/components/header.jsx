"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed inset-0 bg-blue-500 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 border-b">
            <button
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              GET APPOINTMENT
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col">
            <Link
              href="/"
              className="w-full text-center py-6 text-gray-800 text-xl border-b hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className="w-full text-center py-6 text-gray-800 text-xl border-b hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="w-full text-center py-6 text-gray-800 text-xl border-b hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/specialities"
              className="w-full text-center py-6 text-gray-800 text-xl border-b hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Specialties
            </Link>
            <Link
              href="/blog"
              className="w-full text-center py-6 text-gray-800 text-xl border-b hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="w-full text-center py-6 text-gray-800 text-xl border-b hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-blue-500 rounded-full mx-4 md:mx-8 lg:mx-16 -mb-6 relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Hamburger Menu Button */}
            <button
              className="md:hidden absolute left-4 top-2 text-white"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-row items-center justify-center md:justify-start gap-4 md:gap-8 text-white font-medium w-full md:w-auto">
              <Link href="/" className="hover:text-blue-100 transition-colors">
                Home
              </Link>
              <Link
                href="/aboutus"
                className="hover:text-blue-100 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-100 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/specialities"
                className="hover:text-blue-100 transition-colors"
              >
                Specialties
              </Link>
              <Link
                href="/blog"
                className="hover:text-blue-100 transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-100 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="md:hidden lg:block hover:text-blue-100 transition-colors"
              >
                Get Appointment
              </Link>
              <Link
                href="/policy"
                className="md:hidden lg:block hover:text-blue-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="md:hidden lg:block hover:text-blue-100 transition-colors"
              >
                Terms And Conditions
              </Link>
            </nav>

            <Link
              href="/contact"
              className="hidden md:block mt-4 md:mt-0 px-6 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-500 transition-colors"
            >
              GET APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
