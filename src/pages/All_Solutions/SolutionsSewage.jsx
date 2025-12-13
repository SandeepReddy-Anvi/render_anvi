import Footer from "../../components/footer";
import { pagesLinksList } from "../../data/PagesLinkList";
import HeroSection from "../../components/HeroSection";
import KeyFeaturesSection from "../../components/Solutions/sewage/KeyFeaturesSection";
import PpcTab from "../../components/Solutions/sewage/PpcTab";
import { Shield, Zap, Leaf, TrendingUp, Bot, Brain, Map } from "lucide-react";

const footerUpBoxInfoObj = {
  head: `Ready to explore the future with Anvi?`,
  //head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: pagesLinksList.ContactUs,
};

const SolutionsSewage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/solutions/solutionCard-2.webp"
        title="Sewage Cleaning Robot"
        description="Revolutionizing urban sanitation through robotics, AI, and predictive intelligence for a smarter, safer future"
        descriptionWidth="450px"
      />

      {/* Section 2 - Overview */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-[90px] py-8 md:py-16 lg:py-[100px] font-dm-sans">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-[46px] font-['Wix_Madefor_Display'] font-medium text-black mb-6 md:mb-8 lg:mb-10">
          Overview
        </h2>
        <p className="text-base sm:text-base md:text-lg lg:text-[18px] text-[#2F2F34] leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-4 md:mb-6">
          Urban sewer cleaning has always been risky, unsafe, and inefficient.
          Manual workers are often exposed to toxic gases, blockages, and
          hazardous conditions, while existing mechanized systems remain limited
          and reactive.
        </p>
        <p className="text-base sm:text-base md:text-lg lg:text-[18px] text-[#2F2F34] leading-relaxed md:leading-[27px] lg:leading-[29.25px] mb-4 md:mb-6">
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
              <span className="text-[#333333] font-bold text-base md:text-lg lg:text-[18px] flex-shrink-0">
                •
              </span>
              <p className="text-base md:text-lg lg:text-[18px] text-[#2F2F34] leading-relaxed">
                <span className="font-semibold">{item.title}</span> –{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-base md:text-lg lg:text-[18px] text-[#2F2F34] leading-relaxed md:leading-[27px] lg:leading-[29.25px]">
          By unifying these capabilities, the Sewage Cleaning Robot transforms
          sanitation into a proactive, automated, and safe ecosystem–ensuring
          zero manual scavenging, safer urban infrastructure, reduced costs, and
          smart-city readiness.
        </p>
      </section>

      {/* Section 3 - About */}
      <section className="bg-[#0E181E] py-7 md:py-14 lg:py-[100px]">
        <p className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-[48px] text-center font-bold md:mb-16 font-">What is the Sewage Cleaning Robot?</p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-sm md:text-base lg:text-[18px] text-white leading-relaxed md:leading-[24px] lg:leading-[26px] pl-6">
              The Sewage Cleaning Robot is an advanced, AI-powered system
              designed to replace unsafe and outdated manual sewer cleaning. It
              combines Robotics, Artificial Intelligence, and GIS-based space
              analytics to create a smart sanitation ecosystem. Using the PPC
              framework (Predictive, Preventive, Cure), it predicts potential
              blockages, plans preventive cleaning routes, and performs
              real-time robotic cleaning operations.
            </p>
            <img
              src="/images/solutions/sewage/sewage3.1.webp"
              alt="Sewage Analytics Dashboard"
              className="w-full h-56 sm:h-64 md:h-64 lg:h-[600px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <img
              src="/images/solutions/sewage/sewage3.2.webp"
              alt="Sewage Cleaning Robot"
              className="w-full h-56 sm:h-64 md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
            <p className="text-sm md:text-base lg:text-[18px] text-white leading-relaxed md:leading-[24px] lg:leading-[26px] mt-4">
              Equipped with multi-axis robotic arms, high-pressure water jets,
              360° cameras, and toxic gas sensors, the robot can safely and
              efficiently clean manholes and pipelines without exposing workers
              to hazardous conditions. By ensuring zero manual scavenging,
              improved efficiency, and smart-city readiness, the Sewage Cleaning
              Robot redefines urban sanitation for a safer and sustainable
              future.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 md:px-8 lg:px-[90px] py-8 md:py-12 lg:py-[100px] font-dm-sans bg-[#F5F4F8]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[40px] items-start justify-items-end">
          {/* Section Heading */}
          <div className="pr-0 md:pr-[40px] md:sticky md:top-[110px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#333333] mb-4 md:mb-6 lg:mb-[28px]">
              Challenges We Address
            </h2>
            <p className="text-[#282828] text-sm md:text-base lg:text-[18px] leading-relaxed md:leading-[26px]">
              Urban sanitation faces key issues. Manual Labor Risks put workers
              in dangerous conditions with toxic waste and confined spaces.
              Predictive Gaps make it hard to foresee blockages, overflows, or
              equipment failures, leading to costly disruptions. Sewage Cleaning
              Robot tackles these by automating cleaning, using smart sensors,
              and reducing human risk, making cities safer and pipelines more
              reliable.
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
      <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-[90px] py-8 md:py-12 lg:py-[100px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-[46px] font-['Wix Madefor Display'] font-medium text-[#111111] mb-4 md:mb-6 lg:mb-8">
            Our Solution Approach
          </h2>
          <p className="text-sm md:text-base lg:text-[20px] text-[#282828] leading-relaxed mb-6 md:mb-8 lg:mb-10 w-full sm:w-[100%] lg:w-[670px]">
            A comprehensive system integrating robotics, artificial
            intelligence, and geographic information Systems.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 pl-0 sm:pl-4 lg:pl-6">
              <div>
                <h3 className="text-base md:text-lg lg:text-[22px] font-semibold text-[#333333] mb-2 md:mb-5">
                  Advanced Robotics
                </h3>
                <p className="text-sm md:text-base lg:text-[18px] text-[#282828] leading-[29px]">
                  Specialized robots designed to navigate and maintain sewage
                  systems, replacing dangerous manual labor with precise
                  mechanical operations.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg lg:text-[22px] font-semibold text-[#333333] mb-2 md:mb-5">
                  Artificial Intelligence
                </h3>
                <p className="text-sm md:text-base lg:text-[18px] text-[#282828] leading-[29px]">
                  Predictive analytics and machine learning algorithms to
                  forecast maintenance needs and optimize resource allocation.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg lg:text-[22px] font-semibold text-[#333333] mb-2 md:mb-5">
                  GIS Integration
                </h3>
                <p className="text-sm md:text-base lg:text-[18px] text-[#282828] leading-[29px]">
                  Comprehensive mapping and spatial analysis of sanitation
                  infrastructure for better planning and intervention.
                </p>
              </div>
            </div>

            {/* Right Column - Icon Cards */}
            <div className="bg-blue-100 border border-[#2986FF33] rounded-xl w-full lg:w-[500px] h-auto lg:h-[250px] flex flex-col justify-center items-center p-6 md:p-8 lg:p-10">
              {/* First row: two icons with larger gap */}
              <div className="w-full flex justify-center gap-16 md:gap-32 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 md:w-16 h-14 md:h-16 bg-[#2986FF33] rounded-full flex items-center justify-center">
                    <Bot size={32} color="#2986FF" />
                  </div>
                  <p className="text-xs md:text-sm text-[#333333] font-medium text-center">
                    Robotics
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 md:w-16 h-14 md:h-16 bg-[#16A24933] rounded-full flex items-center justify-center">
                    <Brain size={32} color="#16A249" />
                  </div>
                  <p className="text-xs md:text-sm text-[#333333] font-medium text-center">
                    AI Analytics
                  </p>
                </div>
              </div>

              {/* Second row: single centered icon */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 md:w-16 h-14 md:h-16 bg-[#FF805233] rounded-full flex items-center justify-center">
                  <Map size={32} color="#FF8052" />
                </div>
                <p className="text-xs md:text-sm text-[#333333] font-medium text-center">
                  GIS Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <KeyFeaturesSection />

      {/* Section 7 */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-[90px] py-8 md:py-12 lg:py-[100px]">
        <h2 className="text-2xl md:text-3xl lg:text-[46px] font-['Wix Madefor Display'] font-medium text-[#111111] mb-4 md:mb-6 lg:mb-8">
          PPC Framework – Predictive | Preventive | Cure
        </h2>
        <p className="text-sm md:text-base lg:text-[18px] text-[#282828] mb-6 md:mb-8 lg:mb-10">
          Urban sanitation systems face constant challenges like sewer
          blockages, septic tank overflows, toxic gas leaks, and sudden
          infrastructure breakdowns. To address these, we propose a PPC
          Framework – a three-step approach that ensures safety, efficiency, and
          reliability from prediction to resolution.
        </p>
        <div className="pt-6">
          <PpcTab />
        </div>
      </section>

      {/* Section 8 */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] py-8 md:py-16 lg:py-[100px] bg-[#F5F4F8] text-center font-['Wix Madefor Display']">
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-medium mb-2 md:mb-4 lg:mb-6">
          Value & Benefits
        </h2>
        <p className="text-[#545454] text-sm md:text-base lg:text-[16px] mb-10 md:mb-12">
          Transformative advantages that drive operational excellence and
          sustainable growth
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 md:p-8 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Icon Wrapper */}
            <div className="w-20 h-8 md:w-20 md:h-8 flex items-center justify-center bg-[#1E9AB01A] rounded-lg">
              <Shield size={24} color="#0097B2" />
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-[#121212] md:text-lg lg:text-[20px] mb-1">
                Enhanced Safety
              </h3>
              <p className="text-sm md:text-[15px] text-[#545454] leading-[26px]">
                Eliminate human exposure to hazardous environments while
                ensuring safety and maintaining comprehensive, real-time
                monitoring capabilities.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 md:p-8 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Icon Wrapper */}
            <div className="w-20 h-8 md:w-20 md:h-8 flex items-center justify-center bg-[#1E9AB01A] rounded-lg">
              <Zap size={24} color="#0097B2" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-[#121212] md:text-lg lg:text-[20px] mb-1">
                Increased Efficiency
              </h3>
              <p className="text-sm md:text-[15px] text-[#545454] leading-relaxed">
                Accelerate inspection and maintenance processes through
                continuous 24/7 autonomous operations, advanced real-time
                analytics, and enhanced decision-making capabilities.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 md:p-8 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Icon Wrapper */}
            <div className="w-14 h-8 md:w-14 md:h-8 flex items-center justify-center bg-[#1E9AB01A] rounded-lg">
              <Leaf size={24} color="#0097B2" />
            </div>

            {/* Text */}
            <div className="text-left">
              <h3 className="font-semibold text-[#121212] md:text-lg lg:text-[20px] mb-1">
                Sustainability
              </h3>
              <p className="text-sm md:text-[15px] text-[#545454] leading-relaxed">
                Optimize resource utilization and reduce environmental impact
                through intelligent planning and execution.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 md:p-8 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Icon Wrapper */}
            <div className="w-20 h-8 md:w-22 md:h-10 flex items-center justify-center bg-[#1E9AB01A] rounded-lg">
              <TrendingUp size={25} color="#0097B2" />
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-[#121212] md:text-lg lg:text-[20px] mb-1">
                Cost Reduction
              </h3>
              <p className="text-sm md:text-[15px] text-[#545454] leading-relaxed">
                Minimize overall operational expenses through advanced
                predictive maintenance strategies and intelligent automated
                workflow optimization for sustainable efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};


export default SolutionsSewage;