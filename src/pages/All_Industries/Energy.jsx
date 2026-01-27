import React, { useState, useEffect } from "react";
import IndustryLayout from "../../components/IndustryLayout";
import InfoCard from "../../components/InfoBigCards";
import { GraduationCap } from "lucide-react";
import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import Footer from "../../components/footer";
import { mainPagesLinksList } from "../../data/PagesLinkList";


const footerUpBoxInfoenergy = {
  head: "Let’s Build the Future of Energy",
  para: "Get in touch with us to explore how intelligent energy systems can power your next chapter.",
   linkLabel: "Contact Us",
  link : mainPagesLinksList.ContactUs
};

const Energy = () => {
  const [activeTab, setActiveTab] = useState(0);

  const featuresData = [
    {
      id: "card-0",
      title: "Intelligent Energy Systems",
      theme: "green",
      description: "ANVI builds advanced digital platforms that analyse, optimise, and automate energy usage in real time. Our systems help organisations detect inefficiencies early, prevent failures, and maintain stable operations across facilities.",
      marketItems: ["Smart Cities", "Manufacturing", "Energy Utilities"],
      serviceItems: ["Energy Monitoring Systems", "Automated Fault Detection"],
      lifecycleItems: ["Design", "Deployment", "Continuous Optimisation"]
    },
    {
      id: "card-1",
      title: "Sustainable Power Solutions",
      theme: "red",
      description: "ANVI enables companies to transition toward cleaner and more responsible energy ecosystems. We design and deploy solar, wind, and hybrid solutions that reduce environmental impact while improving operational efficiency.",
      marketItems: ["Green Energy", "EV Charging", "Industrial Facilities"],
      serviceItems: ["Solar & Wind Integration", "Battery Storage Systems"],
      lifecycleItems: ["Assessment", "Installation", "Performance Monitoring"]
    },
    {
      id: "card-2",
      title: "Smart Infrastructure Integration",
      theme: "blue",
      description: "ANVI connects digital intelligence with physical power networks to create smarter and more scalable infrastructure systems. Our integrations ensure reliability, adaptability, and seamless performance across industries and geographies",
      marketItems: ["Urban Infrastructure", "Industrial IoT", "Utilities"],
      serviceItems: ["IoT Power Infrastructure", "Grid-Level Data Intelligence"],
      lifecycleItems: ["Integration", "Scaling", "System Optimisation"]
    },
    {
      id: "card-3",
      title: "Predictive & Adaptive Technologies",
      theme: "purple",
      description: "With advanced analytics and automation, ANVI’s energy systems forecast demand, anticipate risks, and optimise performance before issues arise. This ensures long-term stability and reduced downtime for organisations.",
      marketItems: ["Smart Cities", "Large Enterprises", "Critical Facilities"],
      serviceItems: ["Predictive Analytics", "Demand-Response Automation"],
      lifecycleItems: ["Data Collection", "Prediction", "Automated Action"]
    }
  ];

  const whyEnergyData = [
    {
      number: "01.",
      title: "Engineering-First Approach",
      description: "We prioritise robust engineering backed by real-world testing to ensure every energy solution works reliably in live environments."
    },
    {
      number: "02.",
      title: "Sustainability at the Core",
      description: "Our systems are designed with sustainability built in reducing waste, improving efficiency, and supporting cleaner energy adaptation."
    },
    {
      number: "03.",
      title: "Scalable by Design",
      description: "Whether it's a single facility or an entire city network, ANVI Energy solutions grow seamlessly with your operational demands."
    },
    {
      number: "04.",
      title: "Intelligence for the Future",
      description: "With data driven insights and adaptive technology, our systems improve decision-making and ensure long-term resilience."
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
        backgroundImage="/images/industries/energy.webp"
        title="Powering the Future of Energy"
        description="Transforming how industries generate, manage, and sustain power through intelligent and sustainable innovation."
        comingSoonText="We're building solutions to transform the energy sector. Stay tuned for groundbreaking innovations that will power the future."
        ourTitle="Powering a Smarter, Cleaner, and More Resilient Future"
        gradientTitle="Powering Tomorrow. Sustaining Today."
        ourDescription={[
          "Energy is the foundation of modern society  powering industries, cities, and everyday life. At ANVI, we believe the future of energy must be intelligent, sustainable, and adaptable. Our Energy vertical focuses on building advanced systems that help organisations transition toward cleaner operations, improve efficiency, and strengthen long-term resilience.",
          "We combine engineering expertise, digital intelligence, and sustainability-driven thinking to create energy solutions that respond to today’s challenges while preparing for tomorrow’s demands."
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
                  What ANVI <br className="hidden md:block" /> Energy Delivers
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
          backgroundImage="/images/industries/energybox.webp"
          title={<>Why ANVI <br /> Energy</>} 
          description="Technology that strengthens power systems, reduces waste, and prepares industries for a smarter future."
          cards={whyEnergyData}
        />

        </div>
        <GradientText

          ourTitle="Looking Ahead"

          ourDescription={[
            "The Energy vertical at ANVI is continuously evolving. This page represents the foundation of a broader roadmap that will expand with deeper solutions, advanced platforms, and real-world impact storie",
            "As We grow this vertical, new technologies,insights,and case studeis be added here.ANVI welcomes collaborators , partners and innovatorsto shape the future of energy together."
          ]}
        >
        </GradientText>

      </IndustryLayout>
      <Footer footerUpBoxInfo={footerUpBoxInfoenergy}/>
      
    </section>
  );
};

export default Energy;