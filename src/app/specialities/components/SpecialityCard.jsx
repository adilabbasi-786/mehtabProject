import {
  ArrowRight,
  Brain,
  Activity,
  Heart,
  Microscope,
  Stethoscope,
  Hospital,
  FlaskRoundIcon as Flask,
  Baby,
  BabyIcon as Kidney,
  Eye,
  UserPlus,
  FootprintsIcon as Shoe,
  LigatureIcon as Bandage,
  StickerIcon as Stomach,
  TestTube,
  GroupIcon as Family,
  Clock,
  ScissorsIcon as Scalpel,
  Bone,
  TreesIcon as Lungs,
  Clipboard,
  DropletsIcon as Drop,
  WormIcon as Virus,
  SmileIcon as Tooth,
  SpadeIcon as Spine,
  UserCircle,
  RadiationIcon as Rheumatology,
} from "lucide-react";

const SpecialtyCard = ({ icon: Icon, title, description, className }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full ${className}`}
  >
    <div className="mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
      {title}
      <ArrowRight className="w-4 h-4 text-blue-600" />
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const specialties = [
  // Previous specialties
  {
    icon: Brain,
    title: "Behavioral & Mental Health Billing",
    description:
      "Expert billing solutions enhance mental health revenue for streamlined operations in psychiatric practices efficiently.",
  },
  {
    icon: Activity,
    title: "Radiology Medical Billing",
    description:
      "Specialized billing maximizes radiology revenue with accurate claims processing for diagnostic medical practices.",
  },
  {
    icon: Heart,
    title: "Cardiology Medical Billing",
    description:
      "Boost cardiology revenue with precise billing solutions, ensuring financial success for specialized cardiology services.",
  },
  {
    icon: Brain,
    title: "Neurology Medical Billing",
    description:
      "Efficient neurology billing solutions to optimize revenue for specialized practices and enhance financial stability.",
  },
  {
    icon: Microscope,
    title: "Neurosurgery Medical Billing",
    description:
      "Expert billing solutions optimize neurosurgery revenue with efficient and accurate claims processing for specialized practices.",
  },
  {
    icon: Stethoscope,
    title: "Dermatology Medical Billing",
    description:
      "Optimize dermatology revenue with expert billing solutions for efficient, accurate claims processing and financial stability.",
  },
  {
    icon: Hospital,
    title: "Rehab Medical Billing Services",
    description:
      "Rehab billing solutions for efficient and accurate claims processing, optimizing revenue for specialized practices.",
  },
  {
    icon: Flask,
    title: "Allergy & Immunology",
    description:
      "Resolve reimbursement delays and coding challenges with our specialized allergy and immunology billing services.",
  },
  {
    icon: Baby,
    title: "Pediatrics Medical Billing",
    description:
      "Maximize pediatrics revenue with expert billing solutions for efficient, accurate claims processing and financial success.",
  },
  {
    icon: Kidney,
    title: "Nephrology Medical Billing",
    description:
      "Enhance nephrology revenue with expert billing solutions for efficient, accurate claims processing and financial growth.",
  },
  {
    icon: Eye,
    title: "Ophthalmology Medical Billing",
    description:
      "Expert billing ensures efficient management of ophthalmology revenue and claims, enhancing financial stability for practices.",
  },
  {
    icon: UserPlus,
    title: "Geriatrics Medical Billing",
    description:
      "Geriatrics billing ensures accurate and streamlined claims management, optimizing revenue for specialized practices.",
  },
  {
    icon: Shoe,
    title: "Podiatry Medical Billing",
    description:
      "Practice a refined approach to podiatry billing that places your patients' well-being as the forefront and ensures clinical excellence.",
  },
  {
    icon: Flask,
    title: "Endocrinology Medical Billing",
    description:
      "Experience the difference with our endocrinology billing mastery, dedicated to empowering endocrinologists.",
  },
  {
    icon: Bandage,
    title: "Wound Care Billing Services",
    description:
      "Elevate revenue and growth with iRCM wound care billing services specialized expertise for impactful results.",
  },

  // New specialties
  {
    icon: Stomach,
    title: "Gastroenterology Billing",
    description:
      "Optimize revenue for your gastroenterology practice with our comprehensive medical billing services. Achieve accuracy and financial efficiency.",
  },
  {
    icon: TestTube,
    title: "Pathology Billing Services",
    description:
      "Partner with iRCM for swift claims and seamless payments in pathology practices, resolving billing challenges efficiently.",
  },
  {
    icon: Family,
    title: "Family Practice Billing",
    description:
      "Ensure precise family practice revenue cycle management with expert billing solutions for optimized results.",
  },
  {
    icon: Clock,
    title: "Urgent Care Billing Services",
    description:
      "Maximize revenue with iRCM's urgent care billing solutions. Clean claim rate, fast turnaround, low denial rate. Optimize your financial excellence!",
  },
  {
    icon: Scalpel,
    title: "General Surgery Billing",
    description:
      "Streamline your finances with iRCM General Surgery Billing Services.Trust us for quick claims and smooth payments in medical billing.",
  },
  {
    icon: Bone,
    title: "Orthopedic Billing Services",
    description:
      "Optimize your practice's financial health with iRCM Orthopedic Medical Billing Services. Simplify finances, prioritize patient care.",
  },
  {
    icon: Lungs,
    title: "Pulmonology Billing Services",
    description:
      "Maximize revenue, reduce claim denials & collaborate with iRCM's Pulmonology Billing Services. Certified experts for precise efficiency.",
  },
  {
    icon: Clipboard,
    title: "Internal Medicine Billing",
    description:
      "Optimize your internal medicine billing with iRCM expert services. Boost efficiency, maximize returns, and streamline claims for success.",
  },
  {
    icon: Drop,
    title: "Hematology Billing Services",
    description:
      "Partner with specialized billing solutions for tailored strategies, maximizing revenue cycle management for practice success.",
  },
  {
    icon: Virus,
    title: "Infectious Disease Billing",
    description:
      "Optimize your infectious disease practice revenue with iRCM's expert billing solutions, prioritizing patient care.",
  },
  {
    icon: Tooth,
    title: "Dental Billing Services",
    description:
      "Discover iRCM's dental billing solutions, simplifying financial management for optimized revenue and seamless operations.",
  },
  {
    icon: Spine,
    title: "Chiropractic Billing Services",
    description:
      "Transform practice revenue with iRCM Chiropractic Billing Services. Specialized solutions for efficiency and growth.",
  },
  {
    icon: UserCircle,
    title: "OB/GYN Medical Billing",
    description:
      "Maximize OB/GYN revenue with practice-specific billing by iRCM's tailored services, and reliable solutions for maximum returns.",
  },
  {
    icon: Drop,
    title: "Urology Billing Services",
    description:
      "Achieve accurate revenue for urology practice with expert medical billing services that ensure precise claims and financial management.",
  },
  {
    icon: Rheumatology,
    title: "Rheumatology Billing Services",
    description:
      "Rheumatology billing is for managing complex claims while ensuring accurate coding and maximizing reimbursements in rheumatology practices.",
  },
];

const Specialties = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover iRCM Specialties & Elevate Your Revenue Cycle
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transform your revenue cycle and unlock success with iRCM
            Specialties. Experience the power of expert medical billing
            solutions to elevate your financial growth. Discover the key to
            maintaining revenue and efficiency in healthcare today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              {...specialty}
              className="border border-gray-200 hover:border-blue-900 transition-all duration-300 rounded-lg cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;
