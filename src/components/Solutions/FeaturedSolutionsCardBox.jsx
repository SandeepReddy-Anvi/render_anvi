/* import { useState } from "react";

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
    /* link: pagesLinksObj.Solutions_AROP, /
    link: "/docs/AROP-WhitePaper.pdf",
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
      {/* --- ANIMATION STYLES (Matched to CarouselSection) --- /}
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
          {/* Container: h-full fills the 500px parent /}
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
                {/* Top Divider /}
                {index > 0 && (
                  <span className="w-[80%] h-[1px] top-0 absolute bg-[#BDC5D2]"></span>
                )}

                {/* Title /}
                <h3
                  className={`text-[24px] font-semibold tracking-normal leading-[28.74px] shrink-0 transition-colors duration-300 ${activeCardIndex === index ? "text-[#0E1726]" : "text-[#8D99AE]"}`}
                >
                  {item.title}
                </h3>

                {/* Accordion Content /}
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

                      /* newly added /
                      target={item.id === 1 ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-[#CD0054] font-semibold text-[14px] self-start leading-[20.53px] border-b-2 border-[#CD0054]"
                    >
                      View White Paper
                    </a>
                  </div>
                </div>

                {/* Bottom Divider /}
                {index === featuredSolutionsList.length - 1 && (
                  <span className="w-[80%] h-[1px] bottom-0 absolute bg-[#BDC5D2]"></span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Right (Image) - Applies the Directional Animation /}
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
 */

import { useNavigate } from "react-router-dom";
import { pagesLinksObj } from "../../data/PagesLinkList";


const featuredSolutionsList = [
  {
    id: 1,
    title: "AROP - Anvi Runway Ops",
    description:
      "AI-powered runway operations platform for autonomous FOD detection, perimeter surveillance, and intelligent airport maintenance.",
    imageUrl: "/images/solutions/solutionCard-1.webp",
    link: pagesLinksObj.Solutions_AROP,
  },
  {
    id: 2,
    title: "Project Shudh",
    description:
      "Autonomous sanitation robotics platform delivering AI-powered monitoring and efficient urban drainage cleaning.",
    imageUrl: "/images/solutions/solutionCard-2.webp",
    link: pagesLinksObj.Solutions_Sewage,
  },
  {
    id: 3,
    title: "AI Defect Inspection",
    description:
      "AI-powered visual inspection platform for automated defect detection, quality assurance, and real-time production monitoring.",
    imageUrl: "/images/solutions/AI_Defect.jpg",
    link: pagesLinksObj.Solutions_AI_Defect,
  },
  {
    id: 4,
    title: "Automation Investment Advisor",
    description:
      "AI-powered investment advisory platform helping manufacturers evaluate automation, reduce risks, and maximize business returns.",
    imageUrl: "/images/solutions/Auto_Investment.jpg",
    link: pagesLinksObj.Solutions_AutoInvestment,
  },
  {
    id: 5,
    title: "Anvi Build",
    description:
      "End-to-end robotics development platform supporting concept design, engineering, prototyping, testing, and deployment.",
    imageUrl: "/images/solutions/Anvi_Build.jpg",
    link: pagesLinksObj.Solutions_AnviBuild,
  },
  {
    id: 6,
    title: "Connected Factory",
    description:
      "Industrial IoT platform providing real-time equipment monitoring, operational visibility, and intelligent factory connectivity.",
    imageUrl: "/images/solutions/Connected_Factory.jpg",
    link: pagesLinksObj.Solutions_ConnectedFactory,
  },
  {
    id: 7,
    title: "Predictive Maintenance AI",
    description:
      "AI-powered predictive maintenance platform using sensor analytics to reduce downtime and improve equipment performance.",
    imageUrl: "/images/solutions/Pred_Maintainence.jpg",
    link: pagesLinksObj.Solutions_PredictiveMaintenance,
  },
  {
    id: 8,
    title: "Robotics Software Engineering",
    description:
      "Advanced robotics software platform for perception, navigation, motion planning, fleet management, and autonomous control.",
    imageUrl: "/images/solutions/Soft_Enginee.jpg",
    link: pagesLinksObj.Solutions_RoboticsSoftware,
  },
  {
    id: 9,
    title: "Pharmaceutical Manufacturing Automation",
    description:
      "AI-powered pharmaceutical automation platform improving production efficiency, compliance, quality, and operational reliability.",
    imageUrl: "/images/solutions/Manuf_Auto.jpg",
    link: pagesLinksObj.Solutions_PharmaManufacAuto,
  },
  {
    id: 10,
    title: "Production Throughput Optimisation",
    description:
    "AI-powered manufacturing optimization platform improving workflow efficiency, reducing bottlenecks, and increasing production output.",
    imageUrl: "/images/solutions/Throughput_Opti.jpg",
    link: pagesLinksObj.Solutions_ProdThroughputOpti,
  },
  {
    id: 11,
    title: "Autonomous Systems & Robotics Infrastructure",
    description:
      "Robotics infrastructure platform integrating AI perception, simulation, digital twins, and autonomous automation systems.",
    imageUrl: "/images/solutions/Auto_Systems.jpg",
    link: pagesLinksObj.Solutions_RoboticsSoftware,
  },
  {
    id: 12,
    title: "Worker Safety & PPE Monitoring",
    description:
      "AI-powered workplace safety platform ensuring PPE compliance, hazard detection, and real-time worker safety monitoring.",
    imageUrl: "/images/solutions/Worker_Safety.jpg",
    link: pagesLinksObj.Solutions_workerSafety,
  }
];

const FeaturedSolutionsCardBox = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    if (link.endsWith(".pdf")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <section className="w-full flex flex-col md:px-[60px] 2xl:px-[100px]">
      <div className="w-full">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {featuredSolutionsList.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.link)}
              className="bg-[#f5f5f7] p-3 rounded-[16px] overflow-hidden transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[8px]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[270px] object-cover content-center transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <div className="inline-block mb-1">
                  <h3 className="text-[22px] font-medium text-[#000000] line-clamp-2">
                    {item.title}
                  </h3>
                  {/* Gradient line on hover */}
                  <div className="h-[1.5px] w-0 rounded-full bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] transition-all duration-500 group-hover:w-full"></div>
                </div>

                <p className="text-[#000000] text-[12px] font-regular leading-[22px] line-clamp-4">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutionsCardBox;