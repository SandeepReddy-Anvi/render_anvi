


import React, { useState, useEffect } from "react";
import IndustryLayout from "../../components/IndustryLayout";
import InfoCard from "../../components/InfoBigCards";

import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import { mainPagesLinksList } from "../../data/PagesLinkList";
import Footer from "../../components/footer";

const footerUpBoxInfoentertainment = {
  head: "Let’s Build the Future of Textiles",
  para: "Get in touch with us to explore how intelligent energy systems can power your next chapter.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs
}

const Textiles = () => {
  const [activeTab, setActiveTab] = useState(0);

  const featuresData = [
     {
      id: "card-0",
      title: "Smart Material Intelligence",
      theme: "green",
      description : "We combine tradition with technology by recommending materials based on comfort, climate, longevity, and cultural context. Our system ensures users receive the perfect combination of heritage fabric and modern performance.",
      marketItems: ["Designer Wear", "Retail", "Personal Styling"],
      serviceItems: ["Intelligent Fabric Recommendation", "Climate & Comfort Profiling"],
      lifecycleItems: ["Analytics", "Material Selection", "Fabric Integration"]
    },
    {
      id: "card-1",
      title: "AI-Driven Personal Tailoring",
      theme: "purple",
      description:"ANVI leverages intelligent measurement systems to deliver precision-fit clothing customised to each individual’s body profile. Every outfit is engineered for comfort, style, and cultural expression.",
      marketItems: ["Formal Wear", "Ethnic Wear", "Custom Fashion"],
      serviceItems: ["AI Measurement & Fit Mapping", "Hyper-Personalized Tailoring"],
      lifecycleItems: ["Scan", "Personal Fit Model", "Tailored Output"]
    },
       {
      id: "card-2",
      title:  "Adaptive Fashion Experiences",
      theme: "blue",
     description : "Our platform delivers interactive, AI-enhanced fashion journeys that evolve with the wearer style updates, body profile changes, and cultural preferences.",
      marketItems: ["Fashion Tech", "Personal Styling", "Lifestyle Apparel"],
      serviceItems: ["AI-Based Style Adaptation", "Personalized Fashion Intelligence"],
      lifecycleItems: ["User Insights", "Adaptation", "Continuous Refinement"]
    },
   
    {
      id: "card-3",
      title: "Cultural & Heritage Design Systems",
      theme: "red",
      description : "ANVI preserves India’s textile legacy through digital design systems that modernize traditional craftsmanship while maintaining authenticity and emotional value.",
      marketItems: ["Ethnic Fashion", "Weddings", "Cultural Wear"],
      serviceItems: ["Digital Ethnic Craft Design", "Heritage Pattern Engineering"],
      lifecycleItems: ["Craft Research", "Digital Design", "Modern Output"]
    },
 
  ];

  const whyTextilesData = [
    {
      number: "01.",
      title: "AI-Powered Craftsmanship",
      description :"We merge intelligent systems with heritage tailoring to deliver clothing that feels both modern and culturally rooted."
     },
    {
      number: "02.",
      title: "Perfect Personal Fit",
      description : "Every outfit is designed using AI-driven body mapping for accuracy, comfort, and enhanced precision."
    },
    {
      number: "03.",
      title: "Culture-Driven Design",
      description : "We blend traditional patterns with contemporary digital engineering to preserve identity with thoughtful innovation."
     },
    {
      number: "04.",
       title : "Future-Ready Fashion",
       description : "Our platform adapts to user style, body evolution, and emerging fashion technologies seamlessly."
    }
  ];

  // --- CLICK HANDLER: Smooth Scroll ---
  const scrollToCard = (index) => {
    const cardId = featuresData[index].id;
    const element = document.getElementById(cardId);

    if (element) {
      setActiveTab(index); // Update active state immediately

      // Calculate position with offset for header
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
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
  }, [featuresData]);

  return (
    <section>
      <IndustryLayout
        backgroundImage="/images/industries/textiles.webp"
        title="Reinventing the Future of Textiles"
        description= "Where heritage craftsmanship meets intelligent design and next-gen personalization to create meaningful experiences."   
       comingSoonText="We’re pioneering AI tailoring in India to deliver personalized formal and ethnic wear experiences. Stay tuned for a personalized fashion revolution."

        ourTitle="Crafting Fashion Through Intelligence & Tradition"
        gradientTitle="Tradition Tailored. Technology Perfected."
        ourDescription={["ANVI Textiles is shaping a new era of smart fashion where AI, design engineering, and cultural craftsmanship create garments that are personal, precise, and expressive.",
          "As India’s first AI tailoring ecosystem, we blend heritage techniques with advanced digital systems to deliver perfect fits, intelligent material choices, and fashion that feels truly personal."]}
       >

        {/* --- MAIN CONTENT CONTAINER --- */}
        <div className="bg-white w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20 lg:py-24 ">
          <div className="max-w-7xl mx-auto">

            {/* items-start is REQUIRED for sticky sidebar to work */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20  ">

              {/* --- LEFT COLUMN: Sticky Navigation --- */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-[200px]">
                <h2 className="text-3xl md:text-5xl text-black font-raleway font-medium sm:font-medium sm:text-3xl  mb-8 leading-tight">
                  What ANVI <br className="hidden md:block" />Textiles
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
        ${activeTab === index
                            ? 'w-10 bg-[#ff4d4d]'
                            : 'w-4 bg-gray-300 group-hover:w-6'
                          }`}
                      ></span>

                      {/* TEXT */}
                      <span
                        className={`text-sm md:text-base font-medium transition-colors duration-300
        ${activeTab === index
                            ? 'text-[#ff4d4d] font-semibold font-raleway'
                            : 'text-gray-600 group-hover:text-gray-900'
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
        {/*- why anvi section -*/}
        <div>
          <WhySection
            backgroundImage="/images/industries/Textilesbox.webp"
            title={<>Why ANVI <br /> Textiles</>}
            description={"We merge AI with heritage tailoring traditions to create fashion that is both meaningful and technologically advanced."}
             cards={whyTextilesData}
          />

        </div>
        <GradientText

          ourTitle="Looking Ahead"

          ourDescription={[
            "ANVI Textiles is shaping the future of fashion, where AI, cultural identity, and personalized design converge.",
            "This page marks the start of a growing ecosystem that will expand into digital garment simulation, AI fabric selection, smart fashion tools, and global personalization. We welcome designers, brands, and innovators to build the next era of textile intelligence with us."]}
        >
        </GradientText>

      </IndustryLayout>
      <Footer footerUpBoxInfo={footerUpBoxInfoentertainment} />
    </section>
  );
};
export default Textiles;