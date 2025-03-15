"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger shadow when scrolled 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="bg-blue-500 rounded-full mx-4 md:mx-8 lg:mx-16 fixed top-0 left-0 right-0 z-50">
          <div className="flex justify-between items-center p-4 border-b border-blue-800">
            <button className="text-white" onClick={() => setIsMenuOpen(false)}>
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
              href="/appointment"
              className="px-6 py-2 bg-white text-blue-500 rounded-full"
            >
              GET APPOINTMENT
            </Link>
          </div>
          <nav className="flex-1 flex flex-col w-full">
            <Link
              href="/"
              className="w-full text-center py-6 text-white text-xl border-b border-blue-800 hover:bg-blue-800"
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className="w-full text-center py-6 text-white text-xl border-b border-blue-800 hover:bg-blue-800"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="w-full text-center py-6 text-white text-xl border-b border-blue-800 hover:bg-blue-800"
            >
              Services
            </Link>
            <Link
              href="/specialities"
              className="w-full text-center py-6 text-white text-xl border-b border-blue-800 hover:bg-blue-800"
            >
              Specialties
            </Link>
            <Link
              href="/specialities"
              className="w-full text-center py-6 text-white text-xl border-b border-blue-800 hover:bg-blue-800"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="w-full text-center py-6 text-white text-xl border-b border-blue-800 hover:bg-blue-800"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-blue-500 rounded-full mx-4 md:mx-8 lg:mx-16 -mb-6 relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Hamburger Menu Button */}
            <button
              className="md:hidden absolute left-4 top-2 text-white"
              onClick={() => setIsMenuOpen(true)}
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
                href="/appointment"
                className="md:hidden lg:block hover:text-blue-100 transition-colors"
              >
                Get Appointment
              </Link>
            </nav>

            <Link
              href="/appointment"
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
