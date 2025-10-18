import Button from "../utils/Button";
import HeroSection from "../components/HeroSection";
import { IndustriesCardsList } from "../data/IndustriesCardsList";
import { mainPagesLinksList, pagesLinksList } from "../data/PagesLinkList";
import { renderLink } from "../utils/renderLink";
import Footer from "../components/footer";

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Industry?",
  para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const IndustryCardHor = (title, desc, link, imgUrl) => (
  <div className="grid w-full max-md:w-[98%] mx-auto grid-cols-1 md:grid-cols-2 relative group transition-all duration-300 ease-in-out hover:scale-[1.002] origin-top-left p-[64px] rounded-[32px] bg-white gap-[10px] md:gap-[24px] lg:gap-[64px] hover:shadow-lg hover:shadow-[#1E9AB052]">
    <div className="flex flex-col justify-center">
      <p className="font-normal text-[32px] mb-[15.59px] leading-normal tracking-[-0.02em] text-[#0D1F21] transition-colors duration-300">
        {title}
      </p>
      <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
        {desc}
      </p>
      <div className="self-start max-md:pb-[10px]">
        {renderLink(
          "Learn More",
          link,
          `rounded-[32px] border-[1px] border-gray-200 text-gray-900 px-[23px] py-[11px]
        bg-gradient-to-r from-white to-white
        hover:from-[#1E9AB0] hover:to-[#1E9AB0]
        bg-[length:0%_106%] hover:bg-[length:101%_106%]
        bg-left bg-no-repeat
        transition-[background-size] duration-500 ease-out
        hover:text-white
        font-['Wix_Madefor_Display'] text-[15px] sm:text-[16px]
        inline-flex items-center`
        )}

      </div>
    </div>
    <div className="max-md:mx-auto">
      <img
        loading="lazy"
        src={imgUrl}
        alt="Our Vision"
        className="w-full max-w-[425px] h-full aspect-[4/3] object-cover -skew-x-[5deg] group-hover:skew-x-0 group-hover:scale-[1.07] transition-all duration-500 rounded-[32px]"
      />
    </div>
  </div>
);

export const IndustryCardVer = (title, desc, link, imgUrl) => (
  <div className="relative w-[98%] mx-auto md:w-[47%] group transition-transform duration-300 ease-in-out hover:scale-[1.002] origin-top-left p-[54px] lg:p-[64px] rounded-[32px] bg-white gap-[10px] md:gap-[24px] lg:gap-[64px] hover:shadow-lg hover:shadow-[#1E9AB052]">
    <div className="flex flex-col justify-center">
      <p className="font-normal text-[32px] mb-[14px] leading-normal tracking-[-0.02em] text-[#0D1F21] transition-colors duration-300">
        {title}
      </p>
      <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
        {desc}
      </p>
      <div className="self-start pb-[20px] lg:pb-[64px]">
        {renderLink(
          "Learn More",
          link,
          `rounded-[32px] border-[1px] border-gray-200 text-gray-900 px-[23px] py-[11px]
        bg-gradient-to-r from-white to-white
        hover:from-[#1E9AB0] hover:to-[#1E9AB0]
        bg-[length:0%_106%] hover:bg-[length:101%_106%]
        bg-left bg-no-repeat
        transition-[background-size] duration-500 ease-out
        hover:text-white
        font-['Wix_Madefor_Display'] text-[15px] sm:text-[16px]
        inline-flex items-center`
        )}
      </div>
      <img
        loading="lazy"
        src={imgUrl}
        alt="Our Vision"
        className="w-full max-md:mx-auto max-md: max-w-[425px] h-full aspect-[4/3] object-cover -skew-x-[5deg] group-hover:skew-x-0 group-hover:scale-[1.07] transition-all duration-500 rounded-[32px]"
      />
    </div>
  </div>
);

export const Industries = () => {
  return (
    <>
      <main id="industries" className="w-full">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/images/industries/hero.png"
          title="Industries We Transform"
          description="From Robotics to Space, Anvi transforms industries with intelligent automation 
        and advanced technology."
          descriptionWidth="656px"
        />

        {/* Industries */}
        <section className="relative w-full sm:px-2 md:px-[40px] py-12 sm:py-16 md:py-[154px] bg-[#F4F3F7] bg-opacity[0.82]">
          <div className="flex flex-col items-center text-center gap-[17px] mb-20">
            <h2 className="text-[#282828] font-dm-sans text-[54px] font-normal leading-normal tracking-[-0.02em]">
              Industries of the Future
            </h2>
            <p className="max-w-[770px] font-dm-sans text-[18px] text-[#465455]">
              From intelligent robotics to space exploration, Anvi is shaping
              tomorrow with deep-tech systems that transform industries and
              empower societies.
            </p>
          </div>
          <div className="flex flex-wrap max-w-[1000px] mx-auto justify-between w-full place-content-center gap-[30px] lg:gap-[50px] items-center">
            {/* Robotics */}
            {IndustryCardHor(
              IndustriesCardsList.robotics.title,
              IndustriesCardsList.robotics.desc,
              IndustriesCardsList.robotics.link,
              IndustriesCardsList.robotics.imgUrl
            )}

            {/* Space  & Energy*/}
            {IndustryCardVer(
              IndustriesCardsList.space.title,
              IndustriesCardsList.space.desc,
              IndustriesCardsList.space.link,
              IndustriesCardsList.space.imgUrl
            )}
            {IndustryCardVer(
              IndustriesCardsList.energy.title,
              IndustriesCardsList.energy.desc,
              IndustriesCardsList.energy.link,
              IndustriesCardsList.energy.imgUrl
            )}

            {/* Entertainment */}
            {IndustryCardHor(
              IndustriesCardsList.entertainment.title,
              IndustriesCardsList.entertainment.desc,
              IndustriesCardsList.entertainment.link,
              IndustriesCardsList.entertainment.imgUrl
            )}

            {/* Semiconductors */}
            {IndustryCardHor(
              IndustriesCardsList.SemiConductors.title,
              IndustriesCardsList.SemiConductors.desc,
              IndustriesCardsList.SemiConductors.link,
              IndustriesCardsList.SemiConductors.imgUrl
            )}

            {/* Textiles  & LifeSciences*/}
            {IndustryCardVer(
              IndustriesCardsList.textiles.title,
              IndustriesCardsList.textiles.desc,
              IndustriesCardsList.textiles.link,
              IndustriesCardsList.textiles.imgUrl
            )}
            {IndustryCardVer(
              IndustriesCardsList.lifesciences.title,
              IndustriesCardsList.lifesciences.desc,
              IndustriesCardsList.lifesciences.link,
              IndustriesCardsList.lifesciences.imgUrl
            )}

            {/* Foundation */}
            {IndustryCardHor(
              IndustriesCardsList.foundations.title,
              IndustriesCardsList.foundations.desc,
              IndustriesCardsList.foundations.link,
              IndustriesCardsList.foundations.imgUrl
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};
