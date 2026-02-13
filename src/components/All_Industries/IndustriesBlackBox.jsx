import { useEffect, useState } from "react";
import { InfoCard } from "./InfoBigCards";

export const IndustriesBlackBox = ({ featuresData }) => {
  const [activeTab, setActiveTab] = useState(0);

  // --- CLICK HANDLER: Smooth Scroll ---
  const scrollToCard = (index) => {
    const cardId = featuresData[index].id;
    const element = document.getElementById(cardId);

    if (element) {
      setActiveTab(index); // Update active state immediately

      // Calculate position with offset for header
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // --- SCROLL SPY: Auto-Highlight Menu on Scroll ---
  useEffect(() => {
    const handleScroll = () => {
      // Trigger slightly before the element hits the top
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      featuresData.forEach((item, index) => {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white w-full py-12 px-4 sm:px-[20px] md:px-[30px] lg:px-[60px] lg:py-24 ">
      <div className="max-w-7xl mx-auto">
        {/* items-start is REQUIRED for sticky sidebar to work */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20  ">
          {/* --- LEFT COLUMN: Sticky Navigation --- */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-[200px]">
            <h2 className="text-3xl md:text-5xl text-black font-raleway font-medium sm:font-medium sm:text-3xl  mb-8 leading-tight">
              What ANVI <br className="hidden md:block" />
              Semiconductors Delivers
            </h2>
            {/* ADDED 'hidden lg:flex': Hides on mobile, shows as Flex on Desktop */}
            <div className="hidden lg:flex flex-col space-y-6">
              {featuresData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToCard(index)}
                  className="flex items-center group text-left w-full focus:outline-none"
                >
                  {/* RED LINE */}
                  <span
                    className={`h-[2px] mr-3 transition-all duration-300 ease-in-out
        ${
          activeTab === index
            ? "w-10 bg-[#ff4d4d]"
            : "w-4 bg-gray-300 group-hover:w-6"
        }`}
                  ></span>

                  {/* TEXT */}
                  <span
                    className={`text-sm md:text-base font-medium transition-colors duration-300
        ${
          activeTab === index
            ? "text-[#ff4d4d] font-semibold font-raleway"
            : "text-gray-600 group-hover:text-gray-900"
        }`}
                  >
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col   gap-[50px]  ">
            {featuresData.map((item) => (
              <InfoCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                marketItems={item.marketItems}
                serviceItems={item.serviceItems}
                lifecycleItems={item.lifecycleItems}
                theme={item.theme}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
