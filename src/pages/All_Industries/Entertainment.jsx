



import React, { useState, useEffect } from "react";
import IndustryLayout from "../../components/IndustryLayout";
import InfoCard from "../../components/InfoBigCards";

import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import { mainPagesLinksList } from "../../data/PagesLinkList";
import Footer from "../../components/footer";

const footerUpBoxInfoentertainment = {
  head: "Let’s Build the Future of Entertainment",
  para: "Reach out to us to create immersive worlds, visionary stories, and next-generation creative experiences.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs
}

const Entertainment = () => {
  const [activeTab, setActiveTab] = useState(0);

  const featuresData = [
    {
      id: "card-0",
      title: "Interactive & Experiential Media",
      theme: "purple",
      description: "We design interactive experiences that respond to movement, sound, and emotion  allowing audiences to engage with stories in entirely new ways.",
      marketItems: ["Immersive Installations", "Virtual Shows", "Digital Exhibitions"],
      serviceItems: ["Interactive Experience Design", "Real-Time Media Integration"],
      lifecycleItems: ["Ideation", "Interaction Design", "Deployment"]
    },
    {
      id: "card-1",
      title: "Cinematic Design & Motion Systems",
      theme: "green",
      description: "ANVI builds high-end cinematic assets, motion visuals, and storytelling sequences using advanced creative technology pipelines.",
      marketItems: ["Film", "Advertising", "Media Studios"],
      serviceItems: ["Motion Graphics & Cinematic Visuals", "Story-driven Digital Sequences"],
      lifecycleItems: ["Script", "Production", "Final Rendering"]
    },
    {
      id: "card-2",
      title: "Creative Technology Innovation",
      theme: "red",
      description: "We bring creativity and engineering together to build new forms of entertainment  AI-generated experiences, simulation-driven stories, and adaptive content.",
      marketItems: ["Media Tech", "Innovation Labs", "Experimental Entertainment"],
      serviceItems: ["AI-Enhanced Creative Systems", "Simulation-Based Storytelling"],
      lifecycleItems: ["R&D", "Prototyping", "Experience Delivery"]
    },
    {
      id: "card-3",
      title: "Immersive Worldbuilding",
      theme: "blue",
      description: "ANVI creates cinematic universes and visually rich digital worlds that blend narrative depth with artistic precision. Our worldbuilding frameworks support games, films, virtual experiences, and narrative-driven environments.",
      marketItems: ["AI Gaming", "Cinematic Media", "VR/AR Experiences"],
      serviceItems: ["World & Environment Design", "Visual Narrative Development"],
      lifecycleItems: ["Concept", "Design", "Experience Layering"]
    }
  ];

  const whyEntertainmentData = [
    {
      number: "01.",
      title: "Engineering meets creativity",
      description: "We combine technology and imagination to build entertainment systems that are visually powerful and technically sound."
    },
    {
      number: "02.",
      title: "Designed for emotional impact",
      description: "Every experience is shaped to evoke emotion and connect deeply with audiences, creating moments that stay with them."
    },
    {
      number: "03.",
      title: "Built for immersive engagement",
      description: "Our experiences are interactive, adaptive, and crafted to pull viewers into the story, creating deeper engagement and emotional impact."
    },
    {
      number: "04.",
      title: "Future-ready creative ecosystems",
      description: "ANVI develops entertainment that scales across screens, devices, and realities."
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
        backgroundImage="/images/industries/entertainment.jpg"
        title="Future of Immersive Entertainment"
        description="Where imagination, technology, and emotion merge to create extraordinary, immersive human-centered experiences."
        comingSoonText="From vision to experience, we’re creating worlds where stories come alive. Stay tuned for immersive journeys shaped by boundless creativity."
        ourTitle="Transforming Creativity Into Intelligent Worlds"
        gradientTitle="Crafting the Future of Entertainment."
        ourDescription={["At ANVI, entertainment blends storytelling, design, and technology to create immersive, emotionally engaging experiences. From cinematic worlds to interactive simulations, we combine artistry and engineering to bring imagination to life",
          "Our focus spans worldbuilding, virtual experiences, interactive media, and creative tech innovations that are intuitive and unforgettable"]}
      >

        {/* --- MAIN CONTENT CONTAINER --- */}
        <div className="bg-white w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20 lg:py-24 ">
          <div className="max-w-7xl mx-auto">

            {/* items-start is REQUIRED for sticky sidebar to work */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20  ">

              {/* --- LEFT COLUMN: Sticky Navigation --- */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-[200px]">
                <h2 className="text-3xl md:text-5xl text-black font-raleway font-medium sm:font-medium sm:text-3xl  mb-8 leading-tight">
                  What ANVI <br className="hidden md:block" />Entertainment Delivers
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
            backgroundImage="/images/industries/entertainmentbox.webp"
            title={<>Why ANVI <br /> Entertainment Delivers</>}
            description={"ANVI builds high-performance, low-power semiconductor systems that are reliable, scalable, and future-ready."}
            cards={whyEntertainmentData}
          />

        </div>
        <GradientText

          ourTitle="Looking Ahead"

          ourDescription={[
            "ANVI is expanding into next-gen creative technologies from interactive universes to AI-driven storytelling and immersive multi-sensory worlds.",
            "This page marks the start of a broader vision built on new platforms, creative tools, and storytelling innovation. We welcome creators and studios ready to redefine the future of entertainment."]}
        >
        </GradientText>

      </IndustryLayout>
      <Footer footerUpBoxInfo={footerUpBoxInfoentertainment} />
    </section>
  );
};
export default Entertainment;