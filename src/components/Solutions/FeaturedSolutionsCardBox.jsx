import { useState } from "react";

const pagesLinksList = {
  Solutions_AROP: "/solutions/arop",
  Solutions_Sewage: "/solutions/sewage",
};

const featuredSolutionsList = [
  {
    id: 1,
    title: "AROP - Anvi Runway Ops",
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
    imageUrl: "/images/solutions/solutionCard-2.webp",
    link: pagesLinksList.Solutions_Sewage,
  },
];

const FeaturedSolutionsCardBox = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // 'next' (from bottom) or 'prev' (from top)

  const updateActiveCardIndex = (newIndex) => {
    if (newIndex === activeCardIndex) return;

 
    
    setDirection(newIndex > activeCardIndex ? "next" : "prev");
    setActiveCardIndex(newIndex);
  };

  return (
    <>
      {/* --- ANIMATION STYLES (Matched to CarouselSection) --- */}
      <style>
        {`
          /* Physics-based Easing */
          /* NEXT/DOWN: Content slides UP from bottom */
          @keyframes slideInFromBottom {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          /* PREV/UP: Content slides DOWN from top */
          @keyframes slideInFromTop {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .animate-slide-next {
            animation: slideInFromBottom 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }

          .animate-slide-prev {
            animation: slideInFromTop 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
        `}
      </style>

      <div className="w-full flex max-md:flex-col-reverse justify-center align-middle place-items-center gap-[10px] md:gap-[20px] max-w-[1600px] mx-auto px-[20px] my-[30px] md:my-[60px] lg:pr-[30px]">
  <div className="featured-left w-full md:w-[30%] bg-white flex flex-col h-[500px]">
  
  {/* Container: h-full fills the 500px parent */}
  <ul className="w-full flex flex-col h-full overflow-hidden">
    
    {featuredSolutionsList.map((item, index) => (
      <li
        key={"featured-solutions-" + item.id}
        onClick={() => updateActiveCardIndex(index)}
        
        className={`w-full md:max-w-[392px] relative flex flex-col justify-start pl-[50px] gap-[20px] border-l-4 cursor-pointer transition-all duration-500 ease-in-out pt-[30px]
        ${
          activeCardIndex === index
            ? "flex-[2] border-l-black"
            : "flex-[1] border-l-transparent" 
        }`}
      >
        {/* Top Divider */}
        {index > 0 && (
          <span className="w-[80%] h-[1px] top-0 absolute bg-[#BDC5D2]"></span>
        )}

        {/* Title - Fixed at the top via padding */}
        <h3 className="text-[#0E1726] text-[24px] font-semibold tracking-normal leading-[28.74px] shrink-0">
          {item.title}
        </h3>

        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            activeCardIndex === index
              ? "opacity-100 max-h-[400px] translate-y-0"
              : "opacity-0 max-h-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col gap-[15px] pb-2">
            <p className="text-[#17253D] font-normal text-[16px] leading-[24.63px]">
              {item.description}
            </p>

            <a
              href={item.link}
              className="text-[#3E143F] font-semibold text-[14px] self-start leading-[20.53px] border-b-2 border-spacing-2 border-[#3E143F]"
            >
              View White Paper
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        {index === featuredSolutionsList.length - 1 && (
          <span className="w-[80%] h-[1px] bottom-0 absolute bg-[#BDC5D2]"></span>
        )}
      </li>
    ))}
  </ul>
</div>

        {/* Featured Right (Image) - Applies the Directional Animation */}
        <div className="featured-right-img w-full md:w-[60%] overflow-hidden rounded-lg flex justify-center align-middle bg-gray-50 relative">
          <img
            // KEY is critical: it forces React to replace the element, triggering the animation
            key={activeCardIndex} 
     
            src={featuredSolutionsList[activeCardIndex].imageUrl}
            alt={featuredSolutionsList[activeCardIndex].title}
            className={`w-full max-w-[793px] aspect-video h-auto object-cover rounded-md 
              ${direction === "next" ? "animate-slide-next" : "animate-slide-prev"}`}
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedSolutionsCardBox;