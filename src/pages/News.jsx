import HeroSection from "../components/HeroSection";
import { mainPagesLinksList, pagesLinksList } from "../utils/PagesLinkList";
import Footer from "../components/footer";

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Industry?",
  para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

export const News = () => {
  return (
    <>
      <main id="news" className="w-full">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/images/news/hero1.png"
          title="News & Updates"
          description="Stay informed with Anvi latest announcements, official press releases, and exciting new opportunities."
          buttonText="About Us"
          buttonLink={pagesLinksList.AboutUs}
          descriptionWidth="570px"
        />
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};
