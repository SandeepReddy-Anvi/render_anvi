"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="max-w-[1440px] relative flex flex-col md:flex-row justify-center gap-[30px] lg:gap-[60px] mx-auto px-4 md:px-12 lg:px-[90px] py-12 bg-[#F5F4F8]"
      style={{
        background: "linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)",
      }}
    >
      {/* Image */}
      <img
        src="/images/about/project_shudh.webp"
        alt="Sewage Management"
        className="w-full h-full max-md:aspect-video md:max-w-[300px] lg:max-w-[400px] xl:max-w-[602px] max-h-[687px] object-cover rounded-2xl aspect-[3/4] sticky md:top-[100px]"
      />

      <div className="py-[40px] flex flex-col">
        {/* Header */}
        <div className="w-full max-w-[580px] mb-14 p-[20px]">
          <h2 className="text-[24px] md:text-[36px] lg:text-[48px] text-[#111111] font-medium mb-[24px]">
            Key Features
          </h2>

          <p className="text-[16px] md:text-[20px] text-[#282828] leading-[30px]">
            Our solution offers comprehensive capabilities designed to
            revolutionize urban sanitation management.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-7">
          {features.map((feature, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
                className="cursor-pointer w-full max-w-[662px] rounded-[14px] px-[24px] py-[20px] border-[2px] border-[#E5E7EB] bg-white hover:shadow-lg transition-all duration-300"
              >
                {/* Title */}
                <div className="flex justify-between items-center">
                  <h3 className="text-[20px] font-medium text-black">
                    {feature.title}
                  </h3>

                  <Plus
                    size={24}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[200px] opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[16px] text-[#282828] leading-[24px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
