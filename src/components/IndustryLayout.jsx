import { Link } from "react-router-dom";
import { IndustryCard } from "../pages/Industries";
import { IndustriesCardsList } from "../data/IndustriesCardsList";
import GradientText from "./GradientText";
import { mainPagesLinksList } from "../data/PagesLinkList";
import Footer from "./footer";
import HeroSection from "./HeroSection";

// const footerUpBoxInfoObj = {
//   head: "Ready to Transform Your Industry?",
//   para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
//   linkLabel: "Contact Us",
//   link: mainPagesLinksList.ContactUs,
// };


const IndustryLayout = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
  // comingSoonText,
  ourTitle,
  gradientTitle,
  ourDescription,
  mobileDescription,
  children,
  childern2
}) => {
  return (
    < >
      <HeroSection
        backgroundImage={backgroundImage}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        headingWidth="656px"
        descriptionWidth="656px"
      />

      {/* Gradient Text */}
      <div className="">
        <GradientText
          ourTitle={ourTitle}
          gradientTitle={gradientTitle}
          ourDescription={ourDescription}
          mobileDescription={mobileDescription}
        />
      </div>
      <div className="w-full">
        {children}
      </div>
      <div className="w-full">
        {childern2}
      </div>

      {/* Coming Soon Section */}
      {/* <section className="bg-[#F4F3F7D1] w-full flex flex-col items-center justify-center font-['Wix_Madefor_Display'] px-6 md:px-[154px] py-[60px] md:py-[80px] text-center">
        <div>
        <h2 className="text-[40px] md:text-[62px] text-[#282828] font-medium tracking-[-2px] mb-4">
          Coming Soon
        </h2>
        <p className="max-w-[616px] text-[#465455] text-[16px] mb-6">
          {comingSoonText}
        </p>
        {/* <Link className="link-bg-icon">
          Notify Me <i className="rotate-45">{IconsObj.arrow}</i>
        </Link> */}
      {/* </div> */}
      {/* // </section> */}

      {/* Explore Other Industries Section */}
      {/* <div className="bg-[#FCFCFC] px:20 md:px-[236px] py-16 md:py-24 flex flex-col items-center gap-10 md:gap-20">
        <div className="flex flex-col items-center justify-center font-['Wix_Madefor_Display'] text-center max-w-[618px] px-6">
          <p className="text-[32px] md:text-[48px] tracking-[-2px] text-[#282828] mb-4">
            Explore Other Industries
          </p>
          <p className="text-[16px] text-[#465455]">
            Discover how Anvi is revolutionizing technology across multiple
            sectors, driving innovation, efficiency, and sustainable growth for
            a smarter future.
          </p>
        </div> */}

      {/* Example Cards */}
      {/* <div className="w-full">
          <div className="grid grid-rows md:grid-cols-2 gap-[32px] items-center">
            <IndustryCard {...IndustriesCardsList.robotics} />
            <IndustryCard {...IndustriesCardsList.space} />
          </div>
        </div>
      </div> */}

      {/* Footer */}
      {/* <Footer footerUpBoxInfo={footerUpBoxInfoObj} /> */}
    </>
  );
};
export default IndustryLayout;