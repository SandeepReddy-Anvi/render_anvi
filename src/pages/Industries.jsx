import Button from "../utils/Button";
import HeroSection from "../components/HeroSection";
import { IndustriesCardsList } from "../data/IndustriesCardsList";
import { mainPagesLinksObj } from "../data/PagesLinkList";
import GradientText from "../components/GradientText";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Industry?",
  para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const ourDescriptionDesktop = [
  "ANVI works across a diverse range of industries where technology creates meaningful change. From robotics and space to energy, entertainment, textiles, semiconductors, life sciences, and societal development, we build solutions that strengthen infrastructure, empower people, and drive sustainable progress.",
  "Our multi-vertical approach allows us to blend engineering, design, and innovation to deliver systems that are efficient, scalable, and future-ready. Across every industry we serve, our purpose remains the same  to transform challenges into opportunities and shape a smarter, more resilient world.",
];

const ourDescriptionMobile = [
  `ANVI works across robotics, space, energy, entertainment, textiles, semiconductors, life sciences, and 
  societal development  creating technology that drives real change. Our multi-vertical approach blends 
  engineering, design, and innovation to build scalable, future-ready systems.`,

  `Across every industry, our purpose stays the same: turn challenges into opportunities and build a smarter, 
  more resilient world.`,
];

export const IndustryCard = ({ title, desc, link, imgUrl }) => {
  const isExternal = link?.startsWith("https") || link?.startsWith("http");

  return (
    <div className="relative group overflow-hidden transition-all duration-300">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-[343px] object-cover group-hover:scale-110 transition-all duration-300"
      />

      <div className="absolute inset-0 text-center bg-black/0 group-hover:bg-black/70 transition-all duration-500 flex flex-col justify-center items-center">
        <p className="font-bold text-[30px] text-[#FFFFFF] mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {title}
        </p>
        <p className="text-[14px] font-medium text-[#FFFFFF] px-8 2xl:px-22 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {desc}
        </p>
        <div className="self-center max-md:pb-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={link}
            // Conditionally add target="_blank" only if it is external
            target={isExternal ? "_blank" : undefined}
            // Good security practice for external links
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="rounded-xl border-[1px] border-[#FFFFFF] text-[#FFFFFF] px-[20px] py-[10px]
            bg-gradient-to-r from-[#FA293E] to-[#FA293E]
            hover:from-[#FA293E] hover:to-[#FA293E]
            bg-[length:0%_106%] hover:bg-[length:101%_106%]
            bg-left bg-no-repeat hover:border-[1px] hover:border-[#0D1F21]
            transition-[background-size] duration-500 ease-out text-[15px] sm:text-[16px]
            inline-flex items-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Industries = () => {
  return (
    <>
      <main id="industries" className="w-full bg-[#FCFCFC]">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/videos/Heroo4_org.mp4"
          title="Industries We Transform"
          description="From Robotics to Space, Anvi transforms industries with intelligent automation 
          and advanced technology."
          descriptionWidth="656px"
        />

        <GradientText
          header="Our Industries"
          ourDescription={ourDescriptionDesktop}
          mobileDescription={ourDescriptionMobile}
        />

        {/* Industries */}
        <section className="relative w-full px-5 md:px-[60px] pb-12 sm:pb-16 md:pb-[50px] lg:pb-[80px] bg-[#FCFCFC] bg-opacity[0.82]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full py-6">
            <IndustryCard {...IndustriesCardsList.robotics} />
            <IndustryCard {...IndustriesCardsList.space} />
            <IndustryCard {...IndustriesCardsList.energy} />
            <IndustryCard {...IndustriesCardsList.entertainment} />
            <IndustryCard {...IndustriesCardsList.semiconductors} />
            <IndustryCard {...IndustriesCardsList.textiles} />
            <IndustryCard {...IndustriesCardsList.lifesciences} />
            <IndustryCard {...IndustriesCardsList.social_impact} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};
