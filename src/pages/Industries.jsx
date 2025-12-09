import Button from "../utils/Button";
import HeroSection from "../components/HeroSection";
import { IndustriesCardsList } from "../data/IndustriesCardsList";
import { mainPagesLinksList } from "../data/PagesLinkList";
import GradientText from "../components/GradientText";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
 

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Industry?",
  para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

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
        <p className="font-['Wix_Madefor_Display'] font-bold text-[30px] text-[#FFFFFF] mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {title}
        </p>
        <p className="font-dm-sans text-[14px] font-medium text-[#FFFFFF] px-8 2xl:px-28 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {desc}
        </p>
        <div className="self-center max-md:pb-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={link}
            // Conditionally add target="_blank" only if it is external
            target={isExternal ? "_blank" : undefined} 
            // Good security practice for external links
            rel={isExternal ? "noopener noreferrer" : undefined} 
            className="rounded-xl border-[1px] border-gray-200 text-gray-100 px-[23px] py-[11px]
        bg-gradient-to-r from-[#1E9AB0] to-[#1E9AB0]
        hover:from-[#1E9AB0] hover:to-[#1E9AB0] 
        bg-[length:0%_106%] hover:bg-[length:101%_106%]
        bg-left bg-no-repeat
        transition-[background-size] duration-500 ease-out
        hover:text-white
        font-['Wix_Madefor_Display'] text-[15px] sm:text-[16px]
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
          ourTitle="Our Industries"
          gradientTitle="Where Innovation Meets Every Industry."
          ourDescription="From robotics and space to life sciences and semiconductors, Anvi’s technologies are reshaping how industries think, build, and evolve. We design intelligent systems that bring safety, efficiency, and sustainability to every sector we touch - creating innovation with purpose."
        />

        {/* Industries */}
        <section className="relative w-full px-5 md:px-[60px] pb-12 sm:pb-16 md:pb-[50px] lg:pb-[80px] bg-[#FCFCFC] bg-opacity[0.82]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full py-6">
            <IndustryCard {...IndustriesCardsList.robotics} />
            <IndustryCard {...IndustriesCardsList.space} />
            <IndustryCard {...IndustriesCardsList.energy} />
            <IndustryCard {...IndustriesCardsList.entertainment} />
            <IndustryCard {...IndustriesCardsList.SemiConductors} />
            <IndustryCard {...IndustriesCardsList.textiles} />
            <IndustryCard {...IndustriesCardsList.lifesciences} />
            <IndustryCard {...IndustriesCardsList.foundations} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};
