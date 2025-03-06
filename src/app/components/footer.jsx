import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Users,
  Facebook,
  WorkflowIcon as Wordpress,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2f3c7e] text-white">
      {/* Appointment Banner */}
      <div className="bg-[#1e2d6f] py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 md:mb-0">
            Book Your Appointment Online!
          </h2>
          <Link
            href="/appointment"
            className="border border-white px-6 py-3 hover:bg-white/10 transition-colors"
          >
            ONLINE APPOINTMENT
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=100&width=300"
              alt="TRISTAR MBC LLC"
              width={300}
              height={100}
              className="bg-white p-2"
            />
            <p className="text-sm leading-relaxed">
              Tristar medical credentialing and billing is a premium medical
              billing & credentialing company in Texas to provide quality medial
              billing and credentialing services.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Medical Billing",
                "Medical Credentialing",
                "Web Design",
                "SEO",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="hover:underline"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Appointment",
                "Services",
                "Contact",
                "Privacy Policy",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect Us</h3>
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Users, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Wordpress, href: "#" },
              ].map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            {/* Contact Info */}
            <address className="not-italic space-y-2 text-sm">
              <p>16775 Addison Rd, Addison, TX 75001</p>
              <p>
                <a href="tel:+14699154211" className="hover:underline">
                  (469) 915-4211
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@tristarmbc.com"
                  className="hover:underline"
                >
                  info@tristarmbc.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            Copyright © {currentYear} Tristar Medical Credentialing & Billing.
            All rights reserved.
          </p>
          <Link href="/terms" className="hover:underline mt-2 md:mt-0">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}
