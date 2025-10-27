import { TreePine, CloudRain, Plane } from "lucide-react";

const useCases = [
  {
    id: 1,
    title: "Delhi",
    subtitle: "Faster Inspections",
    description:
      "Reduced runway inspection time from 45 minutes to 12 minutes, enabling more flight operations during peak hours.",
    icon: Plane,
  },
  {
    id: 2,
    title: "Mumbai",
    subtitle: "Monsoon Resilience",
    description:
      "Enhanced debris detection during heavy monsoon seasons with weatherproof autonomous systems.",
    icon: CloudRain,
  },
  {
    id: 3,
    title: "Nagpur",
    subtitle: "Wildlife Control",
    description:
      "24/7 perimeter monitoring successfully reduced wildlife incidents by 65% through intelligent deterrent systems.",
    icon: TreePine,
  },
];

const UseCasesIndia = () => {
  const iconColor = "#0097B2";
  const iconBg = "bg-[#1E9AB01A]";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-[90px]">
      {useCases.map(({ id, title, subtitle, description, icon: Icon }) => (
        <div
          key={id}
          className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full max-w-full"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-md ${iconBg}`}
            >
              <Icon size={22} color={iconColor} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-sm sm:text-[15px] md:text-[16px] font-bold text-[#2B303B]">
                {title}
              </h3>
              <p className="text-[#0097B2] text-xs sm:text-[12px] md:text-sm font-medium mb-1">
                {subtitle}
              </p>
            </div>
          </div>
          <p className="text-[#6B7280] text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed mt-auto">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UseCasesIndia;
