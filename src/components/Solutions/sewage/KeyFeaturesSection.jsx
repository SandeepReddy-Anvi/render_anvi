import React from "react";

const features = [
  {
    title: "Robotic Operations",
    description:
      "Autonomous robots designed for sewage inspection, cleaning, and maintenance operations with remote monitoring capabilities.",
  },
  {
    title: "AI Dashboard",
    description:
      "Comprehensive analytics platform with predictive maintenance alerts, performance metrics, and system health monitoring.",
  },
  {
    title: "GIS Analytics",
    description:
      "Spatial mapping of infrastructure with hotspot identification, intervention planning, and resource optimization.",
  },
  {
    title: "Safety Protocols",
    description:
      "Built-in hazard detection, emergency response systems, and compliance tracking for regulatory standards.",
  },
];

const KeyFeaturesSection = () => {
  return (
    <section className="px-4 md:px-12 lg:px-[90px] py-12 md:py-16 lg:py-[70px] bg-[#F5F4F8]">
      {/* Header */}
      <div className="max-w-[550px] mb-10 md:mb-14 pl-6">
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-['Wix Madefor Display'] font-medium mb-8">
          Key Features
        </h2>
        <p className="text-base md:text-[18px] text-[#282828] font-normal">
          Our solution offers comprehensive capabilities designed to revolutionize urban sanitation management.
        </p>
      </div>

      {/* Image */}
      <img
        src="/images/about/project_shudh.webp"
        alt="Sewage Management"
        className="w-full h-full object-cover rounded-2xl mb-10"
      />

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-2 md:px-4 md:py-8 
           hover:bg-white hover:shadow-lg transition-all duration-300 
           border-b-4 border-transparent hover:border-[#0097B2]"

          >
            {/* Content */}
            <div className="relative font-dm-sans">
              <h3 className="text-lg md:text-[17px] font-medium mb-3 text-[#000000]">
                {feature.title}
              </h3>
              <p className="text-sm md:text-[14px] text-[#555555] leading-[27px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
