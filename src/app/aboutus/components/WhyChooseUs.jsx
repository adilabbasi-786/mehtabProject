import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="z-10">
          <p className="text-blue-500 font-medium mb-4 uppercase">
            TRISTAR MEDICAL CREDENTIALING & BILLING
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b66] mb-6 leading-tight">
            Why You Should Choose Us
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            Tristar MBC LLC is one of the top medical billing companies in the
            US, delivering comprehensive healthcare solutions that are
            affordable, secure, and efficient. Medical professionals and
            physicians work with us to enhance their revenue cycle management,
            front desk operations, and billing and coding. With our physician
            credentialing service we help providers to get them in network with
            their desired insurances.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#0a3b66] flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-700">Results Oriented Projects</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#0a3b66] flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-700">Less Denials</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#0a3b66] flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-700">24/7 Customer Service</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#0a3b66] flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-700">Award Winning Support Team</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#0a3b66] flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-700">Experienced Professionals</span>
            </li>
          </ul>
        </div>

        <div className="relative hidden md:block">
          {/* Decorative circles */}
          <div className="absolute w-[450px] h-[450px] border border-gray-200 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-[550px] h-[550px] border border-dashed border-gray-200 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Small circles */}
          <div className="absolute w-4 h-4 border-2 border-gray-200 rounded-full top-[15%] right-[30%]"></div>
          <div className="absolute w-4 h-4 border-2 border-gray-200 rounded-full top-[30%] right-[10%]"></div>
          <div className="absolute w-4 h-4 border-2 border-gray-200 rounded-full bottom-[20%] left-[30%]"></div>

          {/* Doctor image */}
          <div className="relative z-10">
            <Image
              src="/about.png"
              alt="Medical Professional"
              width={450}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
