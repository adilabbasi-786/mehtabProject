import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/">
            <div className="relative h-16 w-48 md:w-64">
              <Image
                src="/solislogo.png"
                alt="TRISTAR MBC"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-sm text-sky-500 mt-2">
            Medical Billing and Credentialing Company
          </p>
        </div>

        {/* Contact Info - HIDDEN on Mobile */}
        <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center md:items-start md:justify-start w-full md:w-auto">
          {/* Phone and Email */}
          <div className="flex flex-row space-x-12">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-200">
                <Phone className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">CALL US NOW :</p>
                <p className="text-sm font-medium">412-547-2794</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-200">
                <Mail className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Email Address</p>
                <p className="text-sm font-medium">info@solisrcm.com</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-200">
              <MapPin className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500">
                16775 Addison Rd, Addison, TX
              </p>
              <p className="text-sm font-medium">75001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
