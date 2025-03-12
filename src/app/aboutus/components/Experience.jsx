import { Lightbulb, Target, User } from "lucide-react";

export default function Experience() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-blue-500 font-medium mb-4">
            WITH 10+ YEARS OF EXPERIENCE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b66] mb-6 leading-tight">
            We&apos;re Leading Medical Billing & Credentialing Company in Texas
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            We are a medical billing and credentialing company based in Texas.
            We provide a variety of services for providers all across the US,
            including Medical billing, Credentialing, Web development and
            digital marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 ">
            <div className="bg-[#0a3b66] rounded-lg p-6 text-center text-white flex flex-col items-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-6">
                <Lightbulb className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p>
                To be a market leader in the Medical billing and credentialing
                industry.
              </p>
            </div>

            <div className="bg-[#0a3b66] rounded-lg p-6 text-center text-white flex flex-col items-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p>
                To offer a comprehensive range of billing and credentialing
                services that are tailored to the needs of our clients.
              </p>
            </div>

            <div className="bg-[#0a3b66] rounded-lg p-6 text-center text-white flex flex-col items-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-6">
                <User className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <p>
                At Tristar Medical Credentialing & Billing, we always cater for
                Integrity, Teamwork, Customer Service, Respect & Accountability
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">—</span>
              <span className="text-gray-700">Medical Billing</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">—</span>
              <span className="text-gray-700">Medical Credentialing</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">—</span>
              <span className="text-gray-700">Web Design and Development</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
