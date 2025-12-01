import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import FeaturedSolutionsCardBox from "../components/Solutions/FeaturedSolutionsCardBox";
import { mainPagesLinksList } from "../data/PagesLinkList";
import SectionWithImage from "../components/SectionWithImage";
import GradientText from "../components/GradientText";
import ImpactSolutions from "../components/Solutions/ImpactSolutions";

const footerUpBoxInfoObj = {
  head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const Solutions = () => {
  return (
    <div id="solutions" className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/videos/Heroo3_org.mp4"
        title="Our Solutions"
        description="From Robotics to Space, Anvi transforms industries with intelligent automation and advanced technology."
        descriptionWidth="450px"
      />

      {/* Featured Solution */}
      <GradientText
        ourTitle="Featured Solutions"
        gradientTitle="We Engineer it."
        ourDescription="From robotics and space to life sciences and semiconductors, Anvi’s technologies are reshaping how industries think, build, and evolve. We design intelligent systems that bring safety, efficiency, and sustainability to every sector we touch - creating innovation with purpose."
      />

      {/* <section className="w-full mt-[30px] px-5 pt-[50px] text-center xl:px-[118px] md:pt-[60px] lg:pt-[50px] font-['Wix_Madefor_Display']">
        <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-[48px] mb-[16px] text-[#282828]">
          Featured Solution
        </h2>
        <p className="text-[16px] w-full md:w-[584px] m-auto text-[#4C4C4C] mb-[6px] font-[400] leading-[24px] text-center">
          Discover Anvi’s groundbreaking innovations that solve critical
          challenges and redefine what’s possible through intelligent
          automation.
        </p>
        Featured Solutions Grid 
      </section>*/}

      <FeaturedSolutionsCardBox />

      {/* Why Our Solution Matter */}
      <section className="w-full bg-[#F4F3F7D1] mb-[100px]">
        <div className="w-full my-[20px] px-5 py-[50px] text-center xl:px-[118px] md:py-[60px] lg:py-[65px] font-['Wix_Madefor_Display']">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-[48px] mb-[16px] text-[#282828]">
            Why Our Solutions Matter
          </h2>
          <p className="text-[16px] w-full md:w-[752px] mx-auto text-[#4C4C4C] font-[400] leading-[24px] text-center">
            Our solutions address critical global challenges, empowering
            industries to innovate, enabling societies to thrive, and shaping a
            smarter, sustainable future.
          </p>
        </div>

        {/* Why */}
        <SectionWithImage
          title="Why ??"
          description="Our solutions create meaningful impact across industries and society. They safeguard people and assets, optimize operations, promote responsible practices, ensure compliance with standards, and drive continuous innovation — empowering businesses and communities to thrive today while shaping a smarter, more resilient tomorrow."
          points={[
            "Safety – Protecting people and assets.",
            "Efficiency – Doing more with less, faster.",
            "Sustainability – Responsible solutions for a better tomorrow.",
            "Compliance – Meeting standards, exceeding expectations.",
            "Innovation – Driving progress through new ideas.",
          ]}
          backgroundImage="/images/careers/career3.1.webp"
        />

        <ImpactSolutions />
      </section>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};

export default Solutions;
