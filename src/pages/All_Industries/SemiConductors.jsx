import { useState, useEffect } from "react";
import IndustryLayout from "../../components/IndustryLayout";
import InfoCard from "../../components/InfoBigCards";

import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import Footer from "../../components/footer";
import { mainPagesLinksObj } from "../../data/PagesLinkList";

const footerUpBoxInfosemiconductors = {
  head: "Let’s Build the Future of SemiConductors",
  para: "Get in touch with us to explore how intelligent energy systems can power your next chapter.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const featuresData = [
  {
    id: "card-0",
    title: "Next-Generation SemiConductor Materials",
    theme: "blue",
    description:
      "We engineer advanced SemiConductor materials built for durability, thermal stability, and energy efficiency. These materials support the next generation of AI systems, robotics platforms, and high-speed computing devices.",
    marketItems: ["AI Systems", "Robotics", "Edge Computing"],
    serviceItems: [
      "High-Performance Material Engineering",
      "Reliability & Stress Testing",
    ],
    lifecycleItems: ["R&D", "Material Engineering", "Performance Optimisation"],
  },
  {
    id: "card-1",
    title: "Predictive & Adaptive SemiConductor Technologies",
    theme: "purple",
    description:
      "ANVI develops adaptive SemiConductor systems using advanced analytics, AI optimisation, and automated tuning. These technologies anticipate failures, balance workloads, and ensure long-term stability - significantly reducing downtime and operational risk.",
    marketItems: [
      "Critical Infrastructure",
      "Data Centers",
      "Enterprise Systems",
    ],
    serviceItems: [
      "SemiConductor Performance Analytics",
      "Adaptive AI-Driven Chip Optimisation",
    ],
    lifecycleItems: ["Data Collection", "Prediction", "Automated Optimisation"],
  },
  {
    id: "card-2",
    title: "Advanced Chip Engineering",
    theme: "green",
    description:
      "ANVI designs and develops high-performance SemiConductor chips built for speed, efficiency, and precision. Our architectures power intelligent devices, automation platforms, and large-scale computing environments - enabling industries to operate at next-level performance.",
    marketItems: [
      "Consumer Electronics",
      "Industrial Automation",
      "Research Labs",
    ],
    serviceItems: [
      "Chip Architecture & Design",
      "High-Performance IC Development",
    ],
    lifecycleItems: ["Design", "Fabrication Support", "Validation"],
  },
  {
    id: "card-3",
    title: "Integrated Micro-Systems & Embedded Intelligence",
    theme: "red",
    description:
      "ANVI builds intelligent embedded SemiConductor systems that seamlessly integrate with sensors, devices, and industrial IoT networks. Our micro-systems enable real-time decision-making, automation, and scalable digital transformation.",
    marketItems: ["Smart Devices", "Industrial IoT", "Automation Platforms"],
    serviceItems: [
      "Embedded System Design",
      "Sensor Integration & Micro-Architecture",
    ],
    lifecycleItems: ["Integration", "Scaling", "System Calibration"],
  },
];

const SemiConductors = () => {
  const [activeTab, setActiveTab] = useState(0);

  const whySemiConductorsData = [
    {
      number: "01.",
      title: "Precision Engineering at Scale",
      description:
        "Our chips and materials are designed using advanced research, world-class engineering, and strict validation standards.",
    },
    {
      number: "02.",
      title: "Built for Next-Gen Electronics",
      description:
        "We engineer semiconductors optimised for AI systems, robotics, automation, IoT, and high-speed industrial electronics.",
    },
    {
      number: "03.",
      title: "Scalable, Reliable, Future-Ready",
      description:
        "Our semiconductor platforms grow with your innovation  from prototypes to full-scale production.",
    },
    {
      number: "04.",
      title: "Intelligence at the Core",
      description:
        "ANVI integrates real-time processing, adaptive optimisation, and AI-driven performance to make every system smarter.",
    },
  ];
  // const footersemiconductors = {
  //   head: "Ready to Transform Your Industry?",
  //   para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  //   linkLabel: "Contact Us",
  //   link: mainPagesLinksObj.ContactUs,
  // };

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
        backgroundImage="/images/industries/semiconductors.jpg"
        title="Future of SemiConductors"
        description="Transforming next-gen electronics through high-performance materials, precision chip engineering, and intelligent semiconductor systems."
        comingSoonText="We're building solutions to transform the energy sector. Stay tuned for groundbreaking innovations that will power the future."
        ourTitle="A Smarter, Faster, and More Intelligent Tomorrow"
        gradientTitle="Building the Core of Modern Technology."
        ourDescription={[
          "SemiConductors power the world’s devices, industries, and intelligent systems. At ANVI, we develop advanced semiconductor technologies that accelerate computation, enhance reliability, and enable breakthroughs in robotics, AI, space, automation, and consumer electronics.",
          "Our work spans chip design, material engineering, embedded intelligence, and adaptive micro-systems helping organisations scale faster, operate smarter, and innovate with confidence.",
        ]}
        mobileDescription={[
          `ANVI develops advanced semiconductor technologies that accelerate computation, enhance reliability, 
          and enable breakthroughs in robotics, AI, space, and automation.
          `,

          `Our work spans chip design, material engineering, embedded intelligence, and adaptive microsystems  
          helping organisations scale faster and innovate with confidence.`,
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
        {/*- why anvi section -*/}
        <div>
          <WhySection
            backgroundImage="/images/industries/semiconductorsbox.webp"
            title={
              <>
                Why ANVI <br /> Semiconductors
              </>
            }
            description="ANVI builds high-performance, low-power semiconductor systems that are reliable, scalable, and future-ready."
            cards={whySemiConductorsData}
          />
        </div>
        <GradientText
          ourTitle="Looking Ahead"
          ourDescription={[
            "ANVI’s Semiconductors vertical is evolving, and this page marks the foundation of a larger roadmap that will expand into new materials, advanced chip platforms, and real-world applications.",
            "As we grow through new technologies and partnerships, our mission remains the same: to build semiconductor innovations that accelerate industries, empower intelligence, and shape the future of global electronics.",
          ]}
        ></GradientText>
      </IndustryLayout>
      <Footer footerUpBoxInfo={footerUpBoxInfosemiconductors} />
    </section>
  );
};
export default SemiConductors;
