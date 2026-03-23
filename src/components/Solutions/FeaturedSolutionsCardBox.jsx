import { useState } from "react";

const pagesLinksObj = {
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
    link: pagesLinksObj.Solutions_AROP,
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
    link: pagesLinksObj.Solutions_Sewage,
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
          @keyframes slideInFromBottom {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
 
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
        <div className="featured-left w-full md:w-[40%] lg:w-[30%] bg-white flex flex-col">
          {/* Container: h-full fills the 500px parent */}
          <ul className="w-full flex flex-col h-full overflow-hidden">
            {featuredSolutionsList.map((item, index) => (
              <li
                key={"featured-solutions-" + item.id}
                onClick={() => updateActiveCardIndex(index)}
                className={`w-full md:max-w-[392px] relative flex flex-col justify-start pl-[50px] cursor-pointer transition-all duration-400 ease-in-out py-[30px] bg-white
              ${activeCardIndex === index ? "flex-[2]" : "flex-[1]"}
              before:content-[''] before:absolute before:left-0 before:top-[10%] before:w-[4px] before:h-[80%] before:transition-opacity before:duration-300
              ${
                activeCardIndex === index
                  ? "before:opacity-100 before:bg-gradient-to-b before:from-[#FE7F2C] before:via-[#FF4A3A] before:via-[#FA293E] before:to-[#CD0054]"
                  : "before:opacity-0 before:bg-transparent"
              }`}
              >
                {/* Top Divider */}
                {index > 0 && (
                  <span className="w-[80%] h-[1px] top-0 absolute bg-[#BDC5D2]"></span>
                )}

                {/* Title */}
                <h3
                  className={`text-[24px] font-semibold tracking-normal leading-[28.74px] shrink-0 transition-colors duration-300 ${activeCardIndex === index ? "text-[#0E1726]" : "text-[#8D99AE]"}`}
                >
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
                  <div className="flex flex-col gap-[15px] pb-2 pt-[20px]">
                    <p className="text-[#17253D] font-normal text-[16px] leading-[24.63px]">
                      {item.description}
                    </p>

                    <a
                      href={item.link}
                      className="text-[#CD0054] font-semibold text-[14px] self-start leading-[20.53px] border-b-2 border-[#CD0054]"
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
        <div className="featured-right-img w-full md:max-w-[60%] overflow-hidden rounded-lg flex justify-center align-middle bg-gray-50 relative">
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
