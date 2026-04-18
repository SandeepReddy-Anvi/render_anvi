import React, { useState, useEffect } from "react";
import IndustryLayout from "../../components/IndustryLayout";

import GradientText from "../../components/GradientText";
import WhySection from "../../components/All_Industries/WhySection"
import Footer from "../../components/footer";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
import TwoImageSection from "../../components/Socialimpactcomponet2img";
import { InfoCard2 } from "../../components/All_Industries/InfoBigCard2";

const footerUpBoxInfosocialimpact = {
  head: "Let’s Build the Future of Social impact",
  para: "Connect with us to create initiatives that uplift communities, support sustainability, and drive meaningful progress for generations to come.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const featuresData = [
  {
    id: "card-0",
    title: "Sustainable Development Initiatives",
    theme: "purple",
    description:
      "We create programs that strengthen environmental health, improve resource efficiency, and support long-term ecological balance in communities.",
    Impact: ["Rural Development", "Urban Renewal", "Community Welfare"],
    Areas: [
      "Climate & Environmental Programs",
      "Clean & Sustainable Living Tools",
    ],
  },
  {
    id: "card-1",
    title: "Education & Digital Empowerment",
    theme: "red",
    description:
      "ANVI develops platforms and initiatives that increase access to knowledge, technology, and learning opportunities for both youth and underserved groups.",
    Impact: ["School", "NGOs", "Skill Development Programs"],
    Areas: ["Digital Learning Systems", "Community Education Access"],
  },
  {
    id: "card-2",
    title: "Community Upliftment Systems",
    theme: "green",
    description:
      "We design systems and programs that empower individuals through support networks, resources, and opportunities that help improve quality of life.",
    Impact: ["Public Welfare", "Social Innovation", "Local Communities"],
    Areas: ["Social Assistance Platforms", "Local Community Development"],
  },
  {
    id: "card-3",
    title: "Innovation for Social Good",
    theme: "blue",
    description:
      "ANVI applies engineering, data, and creative thinking to build solutions that solve real societal challenges and support long-term impact across generations.",
    Impact: [
      "Government",
      "SustainSocial Enterprisesability",
      "Research Institutions",
    ],
    Areas: ["AI for Social Development", "Impact Measurement & Analytics"],
  },
];

const whysemiconductorsData = [
  {
    number: "01.",
    title: "Human-first philosophy",
    description:
      "Every initiative is designed to uplift people and build long-term societal progress with purpose.",
  },
  {
    number: "02.",
    title: "Sustainability at the Core",
    description:
      "Our programs prioritize environmental balance and future-ready development to support sustainable growth.",
  },
  {
    number: "03.",
    title: "Community-driven innovation",
    description:
      "We co-create solutions with communities, not just for them, ensuring every voice truly matters.",
  },
  {
    number: "04.",
    title: "Impact that lasts generations",
    description:
      "Built to strengthen today, empower tomorrow, and inspire the future with meaningful, lasting impact.",
  },
];

const SocialImpact = () => {
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
    <section>
      <IndustryLayout
        backgroundImage="/images/industries/social_impact.jpg"
        title="Future of Social Impact"
        description="Empowering communities, advancing sustainability, and creating change that lasts for generations."
        comingSoonText="Creating impact from the ground up by empowering people, driving innovation, fostering sustainability, shaping communities, and transforming futures."
        ourTitle="Engineering Change That Begins at the Ground Level"
        gradientTitle="Impact That Starts at the Ground Level."
        ourDescription={[
          "Social Impact at ANVI is driven by the belief that technology should uplift people. We build systems and initiatives that strengthen communities, support sustainable development, improve education access, and enable digital empowerment. ",
          "Our work spans environmental sustainability, social upliftment, and long-term community development shaping a future where innovation benefits everyone.",
        ]}
        mobileDescription={[
          `ANVI’s Social Impact initiatives use technology to uplift people and strengthen communities.`,
          `We focus on sustainable development, education access, digital empowerment, and environmental 
          improvement  shaping a future where innovation benefits everyone.`,
        ]}
      >
        <TwoImageSection />

        {/* --- MAIN CONTENT CONTAINER --- */}
        <div className="bg-white w-full py-12 px-4 sm:px-[20px] md:px-[30px] lg:px-[60px] lg:py-24 ">
          <div className="max-w-7xl mx-auto">
            {/* items-start is REQUIRED for sticky sidebar to work */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20  ">
              {/* --- LEFT COLUMN: Sticky Navigation --- */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-[200px]">
                <h2 className="text-3xl md:text-5xl text-black font-raleway font-medium sm:font-medium sm:text-3xl  mb-8 leading-tight">
                  What ANVI Social
                  <br className="hidden md:block" />
                  Impact Delivers
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
                  <InfoCard2
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    Impact={item.Impact}
                    Areas={item.Areas}
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
            backgroundImage="/images/industries/SocialimpactBox.png"
            title={
              <>
                Why ANVI <br /> Social Impact
              </>
            }
            description={
              "ANVI Social Impact builds sustainable, human-centered solutions for lasting community progress."
            }
            cards={whysemiconductorsData}
          />
        </div>
        <GradientText
          ourTitle="Looking Ahead"
          ourDescription={[
            "ANVI Social Impact is evolving into a global framework for sustainability, education, and community empowerment.",
            "This page marks the start of a long-term mission that will grow through new programs, partnerships, and deeper societal impact. We welcome organisations and individuals ready to build a better future together.",
          ]}
        ></GradientText>
      </IndustryLayout>
      <Footer footerUpBoxInfo={footerUpBoxInfosocialimpact} />
    </section>
  );
};

export default SocialImpact;
