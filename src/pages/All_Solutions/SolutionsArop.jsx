import Footer from "../../components/footer";
import { pagesLinksList } from "../../data/PagesLinkList";
import HeroSection from "../../components/HeroSection";
import UseCasesIndia from "../../components/Solutions/arop/UseCasesIndia";
import { SolutionAropFaqs } from "../../data/FAQs";
import FAQLayout from "../../components/FAQLayout";
import BenefitsPage from "../../components/Solutions/benifits";
import CarouselSection from "../../components/Solutions/arop/CarouselSection";

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Operations with anvi",
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: pagesLinksList.ContactUs,
};

export const SolutionsArop = () => {
  return (
    <div className="w-full">
      <HeroSection
        backgroundImage="/images/solutions/arop/arop4.2.png"
        title="Autonomous Runway Operations"
        description="Real-time FOD detection, advanced perimeter surveillance, and predictive runway inspection that enhance safety, boost efficiency, and ensure seamless airport operation"
        buttonText="Download White Paper"
        descriptionWidth="450px"
      />

      {/* Section 2 */}
      <section className="flex flex-col md:flex-row gap-10 font-dm-sans p-6 md:p-24">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 max-w-[620px]">
          <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-3">
            Introduction to Anvi Runway Ops (AROP)
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Revolutionizing Airport Operations with AROP.{" "}
            <br className="md:hidden" /> Airports demand the highest levels of
            safety, efficiency, and precision. Yet, challenges like foreign
            object debris (FOD), wildlife intrusions, and undetected runway
            defects continue to disrupt operations and increase risks.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Anvi Runway Ops (AROP) is an AI-powered, autonomous platform
            designed to solve these challenges in real time. By combining FOD
            detection & removal, perimeter surveillance, and runway inspection
            into one integrated system, AROP ensures safer, faster, and smarter
            airport operations.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Scalable, sustainable, and compliant with global aviation standards,
            AROP sets a new benchmark for the future of airside safety and
            efficiency.
          </p>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="/images/solutions/arop/arop2.png"
            alt="AROP Overview"
            className="w-full max-w-[694px] h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Section 3 - Solution Overview */}
      <section className="bg-[#F5F4F8] p-8 md:p-[90px] font-dm-sans">
        <div className="mb-10">
          <p className="text-[26px] sm:text-[32px] font-semibold mb-4">Solution Overview</p>
          <p className="text-[18px] text-[#282828] leading-[29.25px] mb-4">
            Airports operate in one of the most demanding environments in the world, where even small oversights can lead to major consequences. Challenges such as Foreign Object Debris (FOD), wildlife intrusions near flight paths, and runway surface defects continue to pose risks every day.
          </p>
          <p className="text-[18px] text-[#282828] leading-[29.25px]">
            Anvi Runway Ops (AROP) is designed to directly address these challenges. It is a comprehensive, AI-powered and autonomous platform that combines three critical safety and inspection functions into a single, unified system:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 font-inter">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl group w-full md:w-[660px] bg-[#E0F1F4]">
            <img
              src="/images/solutions/solutionCard-1.png"
              alt="AROP Robot"
              className="py-[50px] w-full h-[426px] object-cover rounded-[12px]"
            />
          </div>

          {/* Cards */}
          <div className="md:w-1/2 flex flex-col gap-6 items-center justify-center">
            {[
              {
                num: 1,
                title: "Autonomous FOD Detection & Removal",
                desc: "Using high-resolution imaging, LiDAR scanning, and AI-based analysis, AROP detects even the smallest cracks, rubber deposits, or faulty lighting systems before they escalate into serious problems.",
              },
              {
                num: 2,
                title: "Perimeter Surveillance",
                desc: "AROP's perimeter surveillance units operate 24/7, detecting potential threats, differentiating between low- and high-risk intrusions, and sending instant alerts to airport operations teams for quick response.",
              },
              {
                num: 3,
                title: "Runway Inspection",
                desc: "Comprehensive automated runway condition assessment with detailed reporting and anomaly detection systems ensures optimal runway conditions for safe aircraft operations.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white rounded-xl transition-all duration-300 hover:-translate-y-1 group/card"
              >
                <div className="flex items-start gap-4 mb-2">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#DBF4FF] text-black rounded-full border border-black flex items-center justify-center text-xl font-bold">
                    {card.num}
                  </div>
                  <h3 className="text-[19px] font-semibold text-black mt-2">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[#000000BF] leading-[22px] ml-16 text-[14px] max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover/card:max-h-40 group-hover/card:opacity-100 group-hover/card:mt-2">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="pt-[56px] text-[18px] leading-[29.25px] md:pr-[110px]">
          By unifying these capabilities, AROP transforms airport operations from reactive and manual checks into a proactive, always-on safety system. The result is a platform that enhances safety, efficiency, reduces costs, and ensures compliance with global aviation regulations (ICAO, FAA, DGCA).
        </p>
      </section>

      {/* Section 4 */}
      <section className="p-6 md:py-[100px] md:px-[50px] lg:px-[110px] font-dm-sans">
        <p className="text-[28px] sm:text-[32px] mb-4 md:mb-6">Benefits</p>
        <p className="text-base md:text-[18px] font-normal text-[#282828] mb-6 md:mb-8">
          Airports today need more than traditional safety checks—they need
          intelligent, continuous, and proactive solutions. Anvi Runway Ops
          (AROP) delivers exactly that, offering airports a powerful way to
          reduce risks, improve efficiency, and cut costs. By combining
          real-time hazard detection, predictive maintenance, and sustainable
          operations into one platform, AROP ensures that airports not only meet
          global safety standards but also achieve long-term reliability and
          performance.
        </p>
        <BenefitsPage />
      </section>

      <CarouselSection />

      {/* Section 5 - Use Cases */}
      <section className="px-6 md:px-[114px] py-12 md:py-[90px] bg-[#F3F4F64D] text-center font-dm-sans">
        <p className="text-3xl md:text-[48px] font-normal mb-12 md:mb-[47px]">
          Use Cases Across India
        </p>
        <UseCasesIndia />
      </section>

      {/* Section 6 - FAQ */}
      <section className="px-4 py-12 md:py-[90px] flex flex-col items-center justify-center gap-16 md:gap-[64px] bg-[#F5F4F8]">
        {/* <div className="flex flex-col gap-4 md:gap-[16px] w-full font-['Wix_Madefor_Display'] text-[#2B303B] text-center"> */}
        <div className="flex flex-col gap-4 md:gap-[16px] w-full font-['Wix_Madefor_Display'] text-[#2B303B] text-center">
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[60px]">
            Frequently Asked Questions
          </p>
        </div>
        <FAQLayout faqs={SolutionAropFaqs} />
      </section>

      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};
