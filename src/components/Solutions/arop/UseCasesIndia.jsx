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
  // Define your unified color scheme here
  const iconColor = "#0097B2";
  const iconBg = "bg-[#1E9AB01A]";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-[32px] text-left font-inter px-4 sm:px-8 md:px-[90px]">
      {useCases.map(({ id, title, subtitle, description, icon: Icon }) => (
        <div
          key={id}
          className="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-[26px] transition-transform duration-300 hover:-translate-y-2"
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-md ${iconBg}`}
            >
              <Icon size={20} color={iconColor} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#2B303B]">
                {title}
              </h3>
              <p className="text-[#0097B2] text-xs sm:text-[10px] font-medium mb-2">
                {subtitle}
              </p>
            </div>
          </div>
          <p className="text-[#6B7280] text-[12px] sm:text-[12px] leading-relaxed">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UseCasesIndia;
