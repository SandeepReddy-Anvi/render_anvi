import React from "react";

export const InfoCard2 = ({ title, description, Impact, Areas, theme, id }) => {
  // Mapping themes to your specific CSS gradient strings
  const getGradientClass = () => {
    switch (theme) {
      case "blue":
        return "bg-[linear-gradient(90deg,#000203_0%,#010508_20%,#030c14_40%,#04131e_60%,#051826_80%,#061c2c_100%)]";
      case "green":
        return "bg-[linear-gradient(90deg,#000200_0%,#010602_20%,#020e06_40%,#04190a_60%,#072810_80%,#0a3717_100%)]";
      case "purple":
        return "bg-[radial-gradient(circle_at_110%_50%,#120a2e_0%,#0c0824_18%,#070518_38%,#03020d_60%,#000000_85%)]";
      case "red":
        return "bg-[radial-gradient(circle_at_110%_50%,#5a1517_0%,#3a0a0c_18%,#260607_38%,#160304_60%,#0b0102_75%,#000000_90%)]";
      default:
        // Defaulting to Green as per your original code's default
        return "bg-[linear-gradient(90deg,#000200_0%,#010602_20%,#020e06_40%,#04190a_60%,#072810_80%,#0a3717_100%)]";
    }
  };

  return (
    <div
      id={id}
      className={`w-full p-8 md:p-12 text-white transition-all duration-500 scroll-mt-32 
      relative overflow-hidden content-end min-h-[750px] shadow-2xl ${getGradientClass()}`}
    >
      {/* Content Wrapper for better layering */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 font-raleway">
          <h2 className="text-4xl md:text-4xl font-semibold mb-6">
            {title}
          </h2>
          <p className="text-gray-100 leading-relaxed max-w-2xl text-sm md:text-base font-light">
            {description}
          </p>
        </div>

        {/* 2-Column Grid (Original had 3, but only 2 columns were populated) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Impact Column */}
          <div>
            <h4 className="text-gray-400 mb-4 font-medium uppercase tracking-wide text-xs">
              Impact Sectors
            </h4>
            <ul className="space-y-3">
              {Impact?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-100 font-medium"
                >
                  <span className="w-1 h-1 bg-gray-100 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h4 className="text-gray-400 mb-4 font-medium uppercase tracking-wide text-xs">
              Focus Areas
            </h4>
            <ul className="space-y-3">
              {Areas?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-100 font-medium"
                >
                  <span className="w-1 h-1 bg-gray-100 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Empty third column to maintain layout alignment with InfoCard 1 if desired */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};