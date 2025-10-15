import HeroSection from "../components/HeroSection";
import { pagesLinksList } from "../data/PagesLinkList";
import Footer from "../components/footer";
import NewsFeeds from "../components/News/NewsFeeds";

const footerUpBoxInfoObj = {
  head: "Stay Updated",
  para: "Get the latest news, updates, and insights delivered directly to your inbox"
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

      {/* NewsFeeds Container */}
      <NewsFeeds />

      {/* Footer */}
      <Footer footerUpBoxInfo2={footerUpBoxInfoObj} />
    </>
  );
};
