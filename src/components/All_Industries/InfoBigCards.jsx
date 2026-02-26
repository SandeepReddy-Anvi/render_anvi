import React from "react";

const ArrowDown = () => (
  <svg
    className="w-4 h-4 my-1 text-gray-100"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

export const InfoCard = ({
  title,
  description,
  marketItems,
  serviceItems,
  lifecycleItems,
  theme,
  id,
}) => {
  // Map themes to your specific gradient strings
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
        // Default to the blue or green one
        return "bg-[linear-gradient(90deg,#000203_0%,#010508_20%,#030c14_40%,#04131e_60%,#051826_80%,#061c2c_100%)]";
    }
  };

  return (
    <div
      id={id}
      className={`w-full p-8 md:p-12 text-white transition-all duration-500 scroll-mt-32 
      relative overflow-hidden content-end min-h-[750px] shadow-2xl ${getGradientClass()}`}
    >
      {/* Header */}
      <div className="mb-12 font-raleway relative z-10">
        <h2 className="text-4xl md:text-4xl font-semibold mb-6">
          {title}
        </h2>
        <p className="text-gray-100 leading-relaxed max-w-2xl text-sm md:text-base font-light">
          {description}
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm relative z-10">
        {/* Market Column */}
        <div>
          <h4 className="text-gray-400 mb-4 font-medium uppercase tracking-wide text-xs">
            Market & Industry
          </h4>
          <ul className="space-y-3">
            {marketItems?.map((item, index) => (
              <li key={index} className="flex items-center text-gray-100 font-medium">
                <span className="w-1 h-1 bg-gray-100 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-gray-400 mb-4 font-medium uppercase tracking-wide text-xs">
            Services
          </h4>
          <ul className="space-y-3">
            {serviceItems?.map((item, index) => (
              <li key={index} className="flex items-center text-gray-100 font-medium">
                <span className="w-1 h-1 bg-gray-100 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Lifecycle Column */}
        <div>
          <h4 className="text-gray-400 mb-4 font-medium uppercase tracking-wide text-xs">
            Solution Lifecycle
          </h4>
          <div className="flex flex-col items-start text-gray-100 font-medium">
            {lifecycleItems?.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item}</span>
                {index < lifecycleItems.length - 1 && <ArrowDown />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};