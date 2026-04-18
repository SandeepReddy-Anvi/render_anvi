import Footer from "../../components/footer";
import { pagesLinksObj } from "../../data/PagesLinkList";
import HeroSection from "../../components/HeroSection";
import KeyFeaturesSection from "../../components/Solutions/sewage/KeyFeaturesSection";
import PpcTab from "../../components/Solutions/sewage/PpcTab";
import { Shield, Zap, Leaf, TrendingUp, Brain, Map, BotIcon } from "lucide-react";
import ImpRoadmap from "../../components/Solutions/sewage/ImpRoadmap";

const footerUpBoxInfoObj = {
  head: `Ready to explore the future with Anvi?`,
  //head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: pagesLinksObj.ContactUs,
};

const solutionApproachList = [
  {
    icon: <BotIcon color="#CD0054" size={32} />,
    head: "Advanced Robotics",
    para: "Specialized robots designed to navigate and maintain sewage systems, replacing dangerous manual labor with precise mechanical operations. ",
  },
  {
    icon: <Brain color="#CD0054" size={32} />,
    head: "Artificial Intelligence",
    para: "Predictive analytics and machine learning algorithms to forecast maintenance needs and optimize resource allocation.",
  },
  {
    icon: <Map color="#CD0054" size={32} />,
    head: "GIS Integration",
    para: "Comprehensive mapping and spatial analysis of sanitation infrastructure for better planning and intervention. ",
  },
]

const ValuesList = [
{
  icon: <Leaf size={32} className="text-white aspect-square w-[48px] h-auto p-[8px] rounded-[12px]" style={{background: "linear-gradient(94.05deg, #FE7F2C -20.85%, #FF4A3A 25.68%, #FA293E 85.26%, #CD0054 133.77%)"}} />,
  head: "Sustainability",
  para: "Optimize resource utilization and reduce environmental impact through intelligent planning, smarter execution, and continuous efficiency improvements.",
},{
  icon: <TrendingUp size={32} className="text-white aspect-square w-[48px] h-auto p-[8px] rounded-[12px]" style={{background: "linear-gradient(94.05deg, #FE7F2C -20.85%, #FF4A3A 25.68%, #FA293E 85.26%, #CD0054 133.77%)"}} />,
  head: "Cost Reduction",
  para: "Minimize overall operational expenses through advanced predictive maintenance strategies and intelligent automated workflow optimization for sustainable efficiency.",
},{
  icon: <Shield size={32} className="text-white aspect-square w-[48px] h-auto p-[8px] rounded-[12px]" style={{background: "linear-gradient(94.05deg, #FE7F2C -20.85%, #FF4A3A 25.68%, #FA293E 85.26%, #CD0054 133.77%)"}} />,
  head: "Enhanced Safety",
  para: "Eliminate human exposure to hazardous environments while ensuring safety and maintaining comprehensive, real-time monitoring capabilities.",
},{
  icon: <Zap size={32} className="text-white aspect-square w-[48px] h-auto p-[8px] rounded-[12px]" style={{background: "linear-gradient(94.05deg, #FE7F2C -20.85%, #FF4A3A 25.68%, #FA293E 85.26%, #CD0054 133.77%)"}} />,
  head: "Increased Efficiency",
  para: "Accelerate inspection and maintenance processes through continuous 24/7 autonomous operations, advanced real-time analytics, and enhanced decision-making capabilities.",
},
]


const SolutionsSewage = () => (
  <div className="w-full">
    {/* Hero Section */}
    <HeroSection
      backgroundImage="/images/solutions/solutionCard-2.webp"
      title="Sewage Cleaning Robot"
      description="Revolutionizing urban sanitation through robotics, AI, and predictive intelligence for a smarter, safer future"
      descriptionWidth="450px"
    />

    {/* Section 2 - Overview */}
    <section className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] font-dm-sans">
      <h2 className="text-[24px] lg:text-[28px] text-[#CD0054] font-[500] mb-6 md:mb-8 lg:mb-10">
        Overview
      </h2>
      <p className="text-base text-[18px] text-[#100000] font-[500] leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-4 md:mb-6">
        Urban sewer cleaning has always been risky, unsafe, and inefficient.
        Manual workers are often exposed to toxic gases, blockages, and
        hazardous conditions, while existing mechanized systems remain limited
        and reactive.
      </p>
      <p className="text-base text-[18px] text-[#100000] font-[500] leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-4 md:mb-6">
        The Sewage Cleaning Robot changes this completely. Powered by
        Robotics, AI, and GIS-based analytics, it works under the PPC
        framework (Predictive, Preventive, Cure) to deliver end-to-end
        sanitation management:
      </p>

      <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
        {[
          {
            title: "Predictive",
            text: "AI and satellite data forecast blockages and risks in advance.",
          },
          {
            title: "Preventive",
            text: "Cleaning operations are scheduled using hotspot maps and optimized routes.",
          },
          {
            title: "Cure",
            text: "The robot autonomously removes sludge with multi-axis arms, high-pressure jets, live video feeds, and toxic gas detection sensors.",
          },
        ].map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <span className="text-[#CD0054] font-[500] text-base text-[18px] flex-shrink-0">
              •
            </span>
            <p className="text-base text-[18px] text-[#100000] font-[500] leading-relaxed">
              <span className="font-semibold text-[#CD0054]">
                {item.title}
              </span>{" "}
              – {item.text}
            </p>
          </div>
        ))}
      </div>

      <p className="text-base text-[18px] text-[#100000] font-[500] leading-relaxed md:leading-[27px] lg:leading-[29.25px]">
        By unifying these capabilities, the Sewage Cleaning Robot transforms
        sanitation into a proactive, automated, and safe ecosystem–ensuring
        zero manual scavenging, safer urban infrastructure, reduced costs, and
        smart-city readiness.
      </p>
    </section>

    {/* Section 3 - About */}
    <section className="w-full h-full py-7 md:py-14 lg:py-[80px] relative">
      <div className="bg-[#0E181E] absolute top-0 w-full h-[70%] m:h-[00px] xl h-[700px] xl:h-[700px] z-[1]" />
      <div className="sticky z-[2]">
        <p className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-[48px] text-center font-semibold md:mb-16 font-">
          What is the Sewage Cleaning Robot?
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-sm md:text-base lg:text-[18px] text-white leading-relaxed md:leading-[24px] lg:leading-[26px] pl-6">
              The Sewage Cleaning Robot is an advanced, AI-powered system
              designed to replace unsafe and outdated manual sewer cleaning.
              It combines Robotics, Artificial Intelligence, and GIS-based
              space analytics to create a smart sanitation ecosystem. Using
              the PPC framework (Predictive, Preventive, Cure), it predicts
              potential blockages, plans preventive cleaning routes, and
              performs real-time robotic cleaning operations.
            </p>
            <img
              src="/images/solutions/sewage/sewage3.1.webp"
              alt="Sewage Analytics Dashboard"
              className="w-full h-56 sm:h-64 md:h-[350px] max-md:aspect-video lg:h-[600px] object-cover rounded-lg object-[50% 30%] lg:object-[60% 30%]"
              style={{ objectPosition: "60% 30%" }}
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <img
              src="/images/solutions/sewage/sewage3.2.webp"
              alt="Sewage Cleaning Robot"
              className="w-full h-56 sm:h-64 md:h-[400px] lg:h-[600px] object-cover rounded-lg"
            />
            <p className="text-sm md:text-base lg:text-[18px] text-[#100000] leading-relaxed md:leading-[24px] lg:leading-[26px] mt-4 md:pr-[10px]  lg:pr-[30px] xl:pr-[60px]">
              Equipped with multi-axis robotic arms, high-pressure water jets,
              360° cameras, and toxic gas sensors, the robot can safely and
              efficiently clean manholes and pipelines without exposing
              workers to hazardous conditions. By ensuring zero manual
              scavenging, improved efficiency, and smart-city readiness, the
              Sewage Cleaning Robot redefines urban sanitation for a safer and
              sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Section 4 - Challenges We Address */}
    <section className="relative w-full px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-12 lg:py-[100px] font-dm-sans bg-[#F5F4F8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[40px] items-start justify-items-end">
        {/* Section Heading */}
        <div className="pr-0 md:pr-[40px] md:sticky md:top-[160px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[500] text-[#100000] mb-4 md:mb-6 lg:mb-[28px]">
            Challenges We Address
          </h2>
          <p className="text-[#282828] text-sm md:text-base lg:text-[18px] leading-relaxed md:leading-[26px]">
            Urban sanitation struggles with major challenges dangerous manual
            work, toxic environments, and poor predictability of blockages or
            failures. The Sewage Cleaning Robot solves these issues by
            automating cleaning, using smart sensors, and reducing human risk
            making cities safer and pipelines more reliable.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-8 md:space-y-12">
            {/* card 1 */}
            <div className="relative w-full md:w-[380px] h-auto bg-[#FFFFFF] p-[24px] rounded-lg">
              <img
                src="/images/solutions/sewage/sewage4.1.jpg"
                alt="Manual Labor Risk"
                className="w-full h-[310px] object-cover rounded-lg"
              />
              <p className="text-[#000000] text-[22px] font-medium mt-4">
                Manual Labor Risk
              </p>
              <p className="text-[#2F2F34] text-[16px] mt-3">
                Sanitation workers in manual scavenging face hazardous
                conditions, toxic gases, and severe health risks that endanger
                their safety and dignity.
              </p>
            </div>

            {/* card 2 */}
            <div className="relative w-full md:w-[380px] h-auto bg-[#FFFFFF] p-[24px] rounded-lg">
              <img
                src="/images/solutions/sewage/sewage4.2.jpg"
                alt="Predictive Gap"
                className="w-full h-[310px] object-cover rounded-lg"
              />
              <p className="text-[#000000] text-[22px] font-medium mt-4">
                Predictive Gap
              </p>
              <p className="text-[#2F2F34] text-[16px] mt-3">
                The absence of data-driven systems to accurately predict
                maintenance requirements often leads to unexpected failures in
                critical infrastructure, resulting in costly downtime and
                safety risks
              </p>
            </div>

            {/* card 3 */}
            <div className="relative w-full md:w-[380px] h-auto bg-[#FFFFFF] p-[24px] rounded-lg">
              <img
                src="/images/solutions/sewage/sewage4.3.jpg"
                alt="Safety Concerns"
                className="w-full h-[310px] object-cover rounded-lg"
              />
              <p className="text-[#000000] text-[22px] font-medium mt-4">
                Safety Concerns
              </p>
              <p className="text-[#2F2F34] text-[16px] mt-3">
                Urban sanitation infrastructure often lacks adequate safety
                measures and real-time monitoring systems, putting both
                workers and the public at risk of accidents and operational
                failures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 5 - Solution Approach */}
    <section className="max-w-[1600px] mx-auto bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-12 lg:py-[100px]">
      <div className="w-full max-2xl:max-w-[672px] mb-[60px]">
        <h2 className="text-2xl md:text-3xl lg:text-[48px] font-medium text-[#100000] mb-4 md:mb-[32px]">
          Our Solution Approach
        </h2>
        <p className="w-full text-sm md:text-base lg:text-[20px] text-[#100000] font-[400] leading-[30px]">
          A comprehensive system integrating robotics, artificial
          intelligence, and geographic information Systems.
        </p>
      </div>

      <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        {/* <div className="space-y-6 md:space-y-8 lg:space-y-10 pl-0 sm:pl-4 lg:pl-6"> */}
        {solutionApproachList.map((each, index) => (
          <li
            className="flex flex-col gap-[24px]"
            key={"ourSolAppr_" + index}
          >
            {each.icon}
            <h3 className="text-base md:text-lg lg:text-[20px] font-semibold text-[#333333]">
              {each.head}
            </h3>
            <p className="text-sm md:text-base lg:text-[16px] text-[#282828] leading-[29px]">
              {each.para}
            </p>
          </li>
        ))}
      </ul>
    </section>

    {/* Section 6 - Key Features */}
    <KeyFeaturesSection />

    {/* Section 7 - PPC FrameWork */}
    <section className="w-full px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-12 lg:py-[100px] place-items-center items-center">
      <h2 className="w-full text-center max-w-[984px] text-[28px] lg:text-[48px] font-medium text-[#100000] mb-4 md:mb-6 lg:mb-8 leading-[37px] lg:leading-[57px]"
        style={{lineHeigt: "57px"}}
      >
        Our step-by-step PPC Framework for Smart Manhole Management System
      </h2>
      <p className="text-center max-w-[840px] text-sm md:text-base lg:text-[18px] text-[#000000] mb-6 md:mb-[50px] lg:mb-[100px]">
        From early risk detection to preventive maintenance and rapid emergency response - our PPC Framework ensures urban sanitation stays safe, efficient, and uninterrupted.
      </p>
      <div className="pt-6">
        <PpcTab />
      </div>
    </section>

    {/* Section 8 - Value & Benefits */}
    <section className="w-full flex flex-col justify-center align-middle px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-8 md:py-16 lg:py-[100px] bg-[#F5F4F8] text-center">
      <h2 className="w-auto self-center text-center text-3xl md:text-4xl lg:text-[46px] font-medium mb-2 md:mb-4 lg:mb-6">Value & Benefits</h2>
      <p className="w-full max-w-[524px] self-center text-center text-[#545454] text-sm md:text-base lg:text-[16px] mb-10 md:mb-12">
        Transformative advantages that drive operational excellence and
        sustainable growth
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[32px] max-w-6xl mx-auto">
        {/* Card */}
        {ValuesList.map((each, index) => (
        <li key={`valueLi_${index+1}`} className="w-full max-w-[835px] bg-white rounded-xl p-6 md:p-8 flex items-start gap-[24px] shadow-sm hover:scale-[1.015] hover:shadow-[0px_1px_50px_#FA293E33] transition-all duration-[0.4s]">
          {/* Icon Wrapper */}
          <span className="w-auto overflow-hidden aspect-square object-center object-cover flex-shrink-0">{each.icon}</span>
          <div className="text-left">
            <h3 className="font-semibold text-[#121212] md:text-lg lg:text-[20px] mb-1">
              {each.head}
            </h3>
            <p className="text-sm md:text-[15px] text-[#545454] leading-[26px]">
              {each.para}
            </p>
          </div>
          </li>
          ))}
      </ul>
    </section>

    {/* Section 9 - Implementation Roadmap */}
    <section className="max-w-[1600px] overflow-hidden mx-auto bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-[40px] lg:py-[100px]">
      <div className="w-full max-2xl:max-w-[766px] mb-[60px]">
        <h2 className="text-[36px] lg:text-[48px] font-medium text-[#111111] mb-2 md:mb-[32px]">
          Implementation Roadmap
        </h2>
        <p className="w-full text-base text-[16px] text-[#555555] font-[400] leading-[30px]">
          Our phased approach ensures systematic, step-by-step development, rigorous testing, continuous improvements, and seamless deployment of the solution.
        </p>
      </div>
      {/* Sewage RoadMap Phases */}
      <ImpRoadmap />
    </section>

    <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
  </div>
);

export default SolutionsSewage;
