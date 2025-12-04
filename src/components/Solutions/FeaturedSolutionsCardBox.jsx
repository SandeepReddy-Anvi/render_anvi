import { useState } from "react";

const pagesLinksList = {
  Solutions_AROP: "/solutions/arop",
  Solutions_Sewage: "/solutions/sewage"
};

const featuredSolutionsList = [
  {
    id: 1,
    title: "AROP – Anvi Runway Ops",
    description:
      "Autonomous FOD detection, perimeter surveillance & runway maintenance. Revolutionary AI-powered system that transforms airport operations with intelligent automation and real-time monitoring.",
    points: [
      "70% reduction in FOD incidents",
      "₹40+ Cr annual ROI for major airports",
      "24/7 autonomous operation",
    ],
    imageUrl: "/images/solutions/solutionCard-1.webp",
    link: pagesLinksList.Solutions_AROP,
  },
  {
    id: 2,
    title: "Project Shudh",
    description:
      "Project SHUDH revolutionizes urban sanitation with AI-driven, autonomous, sustainable robotic systems that ensure cleaner cities through monitoring and efficient automated cleaning.",
    points: [
      "Predictive Intelligence",
      "Autonomous Robotic Cleaning",
      "Zero Manual Scavenging",
    ],
    imageUrl: "/images/solutions/solutionCard-2.png",
    link: pagesLinksList.Solutions_Sewage,
  },
];

const FeaturedSolutionsCardBox = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const updateActiveCardIndex = (index) => {
    setActiveCardIndex((prev) => (index !== prev ? index : prev));
  };

  return (
    <div className="w-full flex max-md:flex-col-reverse justify-center align-middle place-items-center gap-[10px] md:gap-[20px] max-w-[1600px] mx-auto px-[20px] my-[30px] md:my-[60px] lg:pr-[30px]">
      {/* Featured Left (Navigation/Text) */}
      <div className="featured-left w-full md:w-[40%] bg-white flex justify-center align-middle gap-[96px]">
        <ul className="w-full flex flex-col justify-center align-middle gap-[30px] place-items-center">
          {/* Card 0: First Solution */}
          <li
            key={"featured-solutions-" + featuredSolutionsList[0].id}
            onClick={() => updateActiveCardIndex(0)}
            className={`w-full md:max-w-[392px] relative flex flex-col justify-center pl-[50px] align-middle gap-[30px] lg:max-h-[284px] min-h-[94px] border-l-4 transition-all duration-500 cursor-pointer 
            ${
              activeCardIndex === 0 ? "border-l-black" : "border-l-transparent"
            }`}
          >
            <h3 className="text-[#0E1726] text-[24px] font-semibold tracking-normal leading-[28.74px]">
              {featuredSolutionsList[0].title}
            </h3>
            {/* Smooth vertical animation */}
            <div 
              className={`overflow-hidden transition-all duration-500 ${
                activeCardIndex === 0 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-[30px]">
                <p className="text-[#17253D] font-normal text-[16px] leading-[24.63px]">
                  {featuredSolutionsList[0].description}
                </p>
                <a 
                  href={featuredSolutionsList[0].link}
                  className="text-[#3E143F] font-semibold text-[14px] self-start leading-[20.53px] border-b-2 border-spacing-2 border-[#3E143F] w-auto">
                  View White Paper
                </a>
              </div>
            </div>
          </li>

          {/* Card 1: Second Solution */}
          <li
            key={"featured-solutions-" + featuredSolutionsList[1].id}
            onClick={() => updateActiveCardIndex(1)}
            className={`w-full md:max-w-[392px] relative flex flex-col justify-center py-[25px] pl-[50px] align-middle gap-[30px] lg:max-h-[284px] min-h-[94px] border-l-4 transition-all duration-500 cursor-pointer
            ${
              activeCardIndex === 1 ? "border-l-black" : "border-l-transparent"
            }`} 
          >
            <span className="w-[80%] h-[1px] top-[-15px] absolute bg-[#BDC5D2]"></span>
            <h3 className="text-[#0E1726] text-[24px] font-semibold tracking-normal leading-[28.74px]">
              {featuredSolutionsList[1].title}
            </h3>
            {/* Smooth vertical animation */}
            <div 
              className={`overflow-hidden transition-all duration-500 ${
                activeCardIndex === 1 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-[30px]">
                <p className="text-[#17253D] font-normal text-[16px] leading-[24.63px]">
                  {featuredSolutionsList[1].description}
                </p>
                <a 
                  href={featuredSolutionsList[1].link} 
                  className="text-[#3E143F] font-semibold text-[14px] self-start leading-[20.53px] border-b-2 border-spacing-2 border-[#3E143F] w-auto">
                  View White Paper
                </a>
              </div>
            </div>
            <span className="w-[80%] h-[1px] bottom-[-15px] absolute bg-[#BDC5D2]"></span>
          </li>
        </ul>
      </div>

      {/* Featured Right (Image) */}
      <div className="featured-right-img w-full md:w-[60%] bggray-500 overflow-hidden rounded-lg flex justify-center align-middle">
        <img
          src={featuredSolutionsList[activeCardIndex].imageUrl}
          alt={
            featuredSolutionsList[activeCardIndex].title +
            "_" +
            featuredSolutionsList[activeCardIndex].id
          }
          className="w-full max-w-[793px] aspect-video h-auto object-cover rounded-md" 
        />
      </div>
    </div>
  );
};

export default FeaturedSolutionsCardBox;