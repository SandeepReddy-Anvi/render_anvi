import { Link } from "react-router-dom";
import { IndustryCardVer } from "../pages/Industries";
import { IconsObj } from "../utils/Iconify_icons";
import { IndustriesCardsList } from "../utils/IndustriesCardsList";
import { mainPagesLinksList } from "../utils/PagesLinkList";
import Footer from "./footer";
import HeroSection from "./HeroSection";

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Industry?",
  para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const IndustryLayout = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
  comingSoonText,
}) => {
  return (
    <div>
      <HeroSection
        backgroundImage={backgroundImage}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        headingWidth="656px"
        descriptionWidth="656px"
      />

      {/* Coming Soon Section */}
      <section className="flex flex-col items-center justify-center font-['Wix_Madefor_Display'] px-6 md:px-[154px] py-[60px] md:py-[80px] text-center">
        <h2 className="text-[40px] md:text-[64px] text-[#282828] font-normal tracking-[-2px] mb-4">
          Coming Soon
        </h2>
        <p className="max-w-[616px] text-[#465455] text-[16px] mb-6">
          {comingSoonText}
        </p>
        <Link className="link-bg-icon">
          Notify Me <i className="rotate-45">{IconsObj.arrow}</i>
        </Link>
      </section>

      {/* Explore Other Industries Section */}
      <div className="bg-[#F4F3F7D1] py-16 md:py-24 flex flex-col items-center gap-10 md:gap-20">
        <div className="flex flex-col items-center justify-center font-['Wix_Madefor_Display'] text-center max-w-[618px] px-6">
          <p className="text-[32px] md:text-[48px] tracking-[-2px] text-[#282828] mb-4">
            Explore Other Industries
          </p>
          <p className="text-[16px] text-[#465455]">
            Discover how Anvi is revolutionizing technology across multiple
            sectors, driving innovation, efficiency, and sustainable growth for
            a smarter future.
          </p>
        </div>

        {/* Example Cards */}
        <div className="px-6 xl:px-[157px] w-full">
          <div className="flex flex-col md:flex-row gap-[48px] items-center">
            {/* Robotics */}
            {IndustryCardVer(
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};

export default IndustryLayout;
