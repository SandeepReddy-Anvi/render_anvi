import { useState } from "react";
import { pagesLinksList } from "../../data/PagesLinkList";

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
  // Added prop for clarity
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const updateActiveCardIndex = (index) => {
    // console.log("previous activeCardIndex : ", activeCardIndex);
    // console.log("index : ", index);
    // The previous check is redundant, simpler setActiveCardIndex(index) is fine,
    // but keeping original logic structure and fixing the index issue.
    setActiveCardIndex((prev) => (index !== prev ? index : prev));
  };

  return (
    <div className="w-full flex max-md:flex-col-reverse justify-center align-middle place-items-center gap-[10px] md:gap-[20px] max-w-[1600px] mx-auto px-[20px]  my-[30px] md:my-[60px] lg:pr-[30px]">
      {/* Featured Left (Navigation/Text) */}
      {/* Changed bg-gray-300 to a neutral background if not intended to be gray */}
      <div className="featured-left w-full md:w-[40%] bg-white flex justify-center align-middle gap-[96px]">
        {" "}
        {/* Use justify-end to align list to the right */}
        <ul className="w-full flex flex-col justify-center align-middle gap-[30px] place-items-center">
          {/* Card 0: First Solution */}
          <li
            key={"featured-solutions-" + featuredSolutionsList[0].id}
            // MODIFICATION 1: Set the index to 0
            onClick={() => updateActiveCardIndex(0)}
            className={`w-full md:max-w-[392px] relative flex flex-col justify-center pl-[50px] align-middle gap-[30px] lg:max-h-[284px] min-h-[94px] border-l-4 transition-all duration-500 cursor-pointer 
            ${
              activeCardIndex === 0 ? "border-l-black" : "border-l-transparent"
            }`} // Use a better color for active state
          >
            <h3 className="text-[#0E1726] text-[24px] font-semibold tracking-normal leading-[28.74px]">
              {featuredSolutionsList[0].title}
            </h3>
            {/* MODIFICATION 2: Check for activeCardIndex === 0 */}
            {activeCardIndex === 0 && (
              <>
                <p className="text-[#17253D] font-normal text-[16px] leading-[24.63px]">
                  {featuredSolutionsList[0].description}
                </p>
                <p className="text-[#3E143F] font-semibold text-[14px] self-start leading-[20.53px] border-b-2 border-spacing-2 border-[#3E143F] w-auto">
                  View White Paper
                </p>
              </>
            )}
          </li>

          {/* Card 1: Second Solution */}
          <li
            key={"featured-solutions-" + featuredSolutionsList[1].id}
            // MODIFICATION 1: Set the index to 1
            onClick={() => updateActiveCardIndex(1)}
            className={`w-full md:max-w-[392px] relative flex flex-col justify-center py-[25px] pl-[50px] align-middle gap-[30px] lg:max-h-[284px] min-h-[94px] border-l-4 transition-all duration-500 cursor-pointer
            ${
              activeCardIndex === 1 ? "border-l-black" : "border-l-transparent"
            }`} // Use a better color for active state
          >
            <span className="w-[80%] h-[1px] top-[-15px] absolute bg-[#BDC5D2]"></span>
            {/* <span className=""></span> */}
            <h3 className="text-[#0E1726] text-[24px] font-semibold tracking-normal leading-[28.74px]">
              {featuredSolutionsList[1].title}
            </h3>
            {/* MODIFICATION 2: Check for activeCardIndex === 1 */}
            {activeCardIndex === 1 && (
              <>
                <p className="text-[#17253D] font-normal text-[16px] leading-[24.63px]">
                  {featuredSolutionsList[1].description}
                </p>
                <p className="text-[#3E143F] font-semibold text-[14px] self-start leading-[20.53px] border-b-2 border-spacing-2 border-[#3E143F] w-auto">
                  View White Paper
                </p>
              </>
            )}
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
          className="w-full max-w-[793px] aspect-video h-auto object-cover rounded-md" // object-cover for better image fitting
        />
      </div>
    </div>
  );
};

export default FeaturedSolutionsCardBox;
