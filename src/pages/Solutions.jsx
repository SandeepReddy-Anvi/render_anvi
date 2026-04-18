import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import FeaturedSolutionsCardBox from "../components/Solutions/FeaturedSolutionsCardBox";
import { mainPagesLinksObj } from "../data/PagesLinkList";
import SectionWithImage from "../components/SectionWithImage";
import GradientText from "../components/GradientText";
import ImpactSolutions from "../components/Solutions/ImpactSolutions";
import CoreCapabilities from "../components/CoreCapabilities";

const footerUpBoxInfoObj = {
  head: `Ready to explore the future with Anvi?`,
  //head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const Solutions = () => {
  return (
    <div id="solutions" className="w-full bg-[#FFFFFF]">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/videos/Heroo3_org.mp4"
        title="Our Solutions"
        description="From Robotics to Space, Anvi transforms industries with intelligent automation and advanced technology."
        descriptionWidth="450px"
      />

      {/* Featured Solution */}
      <GradientText
        header="Featured Solutions"
        ourTitle="Engineering Solutions for a Smarter, Stronger Tomorrow"
        gradientTitle="We Engineer it."
        ourDescription={["At ANVI, our solutions are engineered ecosystems built to solve real-world challenges across robotics, space, lifestyle, entertainment, semiconductors, textiles, life sciences, and social impact. We combine research, engineering, creativity, and intelligence to create systems that adapt and scale with the future.",
          "From advanced automation to immersive digital environments and purpose-led community projects, ANVI solutions deliver lasting value for industries and society."]}
      />

      <div>
        <FeaturedSolutionsCardBox />
      </div>

      {/* Why Our Solution Matter */}
      <section className="w-full">
        <div className="w-full my-[20px] px-5 py-[50px] text-center xl:px-[118px] md:py-[60px] lg:py-[65px]">
          <div className="flex items-center gap-2 pb-4 justify-center">
            <span className="w-6 h-[2px] bg-[#CD0054]" />
            <p className="text-[14px] text-[#CD0054] font-bold font-wix uppercase">
              Why anvi
            </p>
          </div>
          <h2 className="text-[32px] md:text-[46px] font-medium mb-[16px] text-[#100000]">
            Why Our Solutions Matter
          </h2>
          <p className="text-[16px] w-full md:w-[752px] mx-auto text-[#100000] leading-[24px] text-center">
            Our solutions address critical global challenges, empowering
            industries to innovate, enabling societies to thrive, and shaping a
            smarter, sustainable future.
          </p>
        </div>
      </section>

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
        
        <div className="pt-10 md:pt-[30px] lg:pt-[60px]">
          <CoreCapabilities />
        </div>

        <ImpactSolutions />

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};

export default Solutions;
