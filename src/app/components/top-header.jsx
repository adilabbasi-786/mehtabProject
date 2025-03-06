import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <div className="relative h-16 w-64">
              <Image
                src="/logo.png"
                alt="TRISTAR MBC"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-center text-sm text-sky-500">
            Medical Billing and Credentialing Company
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-200">
              <Phone className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">CALL US NOW :</p>
              <p className="text-sm font-medium">(469) 915-4211</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-200">
              <Mail className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Address</p>
              <p className="text-sm font-medium">info@tristarmbc.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-200">
              <MapPin className="h-5 w-5 text-blue-500" />
            </div>
            <div>
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
