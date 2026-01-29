

import React, { useState, useEffect } from "react";
import IndustryLayout from "../../components/IndustryLayout";
import InfoCard from "../../components/InfoBigCards";

import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { mainPagesLinksList } from "../../data/PagesLinkList";

const footerUpBoxInfolifescience = {
  head: "Let’s Build the Future of Life Science",
  para: "Connect with us to develop solutions that empower people, advance innovation, and shape healthier, sustainable communities for generations to come.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs
}

const LifeSciences = () => {
  const [activeTab, setActiveTab] = useState(0);

  const featuresData = [
    {
      id: "card-0",
      title: "Human-Centric Health Innovation",
      theme: "purple",
     description :"ANVI develops intelligent health and wellness technologies that focus on real human needs  accessibility, reliability, and long-term wellbeing.",
      marketItems: ["Healthcare", "Wellness", "Community Support"],
      serviceItems: ["Digital Health Tools", "Smart Wellness Systems"],
      lifecycleItems: ["Research", "Engineering", "Deployment"]
    },
    {
      id: "card-1",
      title: "Sustainable Development Systems",
      theme: "red",
      description : "We create solutions that promote environmental balance, community resilience, and sustainable resource usage  ensuring long-term impact",
      marketItems: ["Climate", "Rural Development", "Urban Planning"],
      serviceItems: ["Community Sustainability Tools", "Environmental Intelligence Platforms"],
      lifecycleItems: ["Assessment", "Implementation", "Impact Tracking"]
    },
    {
      id: "card-2",
      title: "AI-Driven Community Empowerment",
      theme: "green",
      description :"ANVI builds inclusive platforms that leverage AI to improve education, accessibility, and social support across diverse populations.", 
      marketItems: ["Designer Wear", "Retail", "Personal Styling"],
      serviceItems: ["Educational Intelligence Systems", "Community Empowerment Platforms"],
      lifecycleItems: ["Analytics", "Material Selection", "Fabric Integration"]
    },
    {
      id: "card-3",
      title: "Integrated Life Science Solutions",
      theme: "blue",
      description : "We combine engineering, data science, and life science expertise to create systems that help societies thrive  from healthcare to environment and community development.",
       marketItems: ["Public Health", "Sustainability", "Social Innovation"],
      serviceItems: ["Integrated Health & Environment Systems", "Data-Driven Social Innovation"],
      lifecycleItems: ["Integration", "Optimization", "Scaling"]
    }
  ];

  const whysemiconductorsData = [
    {
      number: "01.",
      title: "Innovation Rooted in Humanity",
      description:"Built to uplift people, improve lives, and create real-world impact through thoughtful, future-ready innovation."
     },
    {
      number: "02.",
      title: "Sustainability at the Core",
      description :"Solutions engineered for long-term environmental and social balance, ensuring responsible and sustainable progress."
     },
    {
      number: "03.",
      title: "Community-Centered Design",
      description: "Crafted to support diverse societies, cultures, and ecosystems through responsible innovation."
     },
    {
      number: "04.",
      title: "Future-Ready Systems",
      description :"Adaptive platforms that grow with changing societal needs through continuous, responsive innovation."
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
        backgroundImage="/images/industries/lifesciences.jpg"
        title="Future of Life Sciences"
        description="Where heritage craftsmanship meets intelligent design and next-gen personalization to create meaningful experiences."
      
        comingSoonText="Pioneering breakthroughs that improve health, empower communities, inspire innovation, advance technology, protect the planet, and create better lives."

        ourTitle="Building Impact That Lasts for Generations"
        gradientTitle="Innovating for Healthier Futures."
        ourDescription={["ANVI Life Sciences merges innovation, sustainability, and community progress to create meaningful impact. We combine engineering, biology, and digital intelligence to advance healthcare and improve quality of life.",
          "Our work spans intelligent health systems, environment-aware technologies, and empowerment platforms built for an inclusive and sustainable future."
        ]}
        mobileDescription={[
          `ANVI Life Sciences merges innovation, sustainability, and community progress to advance healthcare and 
          improve quality of life.`,

          `We develop intelligent health systems, environment-aware technologies, and empowerment platforms 
          designed for an inclusive, sustainable future.`
        ]}  

        >

        {/* --- MAIN CONTENT CONTAINER --- */}
        <div className="bg-white w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20 lg:py-24 ">
          <div className="max-w-7xl mx-auto">

            {/* items-start is REQUIRED for sticky sidebar to work */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20  ">

              {/* --- LEFT COLUMN: Sticky Navigation --- */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-[200px]">
                <h2 className="text-3xl md:text-5xl text-black font-raleway font-medium sm:font-medium sm:text-3xl  mb-8 leading-tight">
                  What ANVI Life<br className="hidden md:block" />Sciences Delivers
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
            backgroundImage="/images/industries/LifeScienceBox.jpg"
            title={<>Why ANVI Life<br /> Sciences</>}
            description={"ANVI Life Sciences builds sustainable, human-centered systems that improve lives and create long-term, inclusive impact."}
             cards={whysemiconductorsData}
          />

        </div>
        <GradientText

          ourTitle="Looking Ahead"

          ourDescription={[
            "ANVI Life Sciences is growing into a global ecosystem dedicated to wellbeing, community growth, and sustainable innovation.",
            "This page introduces a long-term vision built on advanced health tools, community platforms, and environmental systems inviting organisations and researchers to reimagine the future with us."
          ]}
        >
        </GradientText>

      </IndustryLayout>
      <Footer footerUpBoxInfo={footerUpBoxInfolifescience} />
    </section>
  );
};
export default LifeSciences;