import HeroSection from "../components/HeroSection";
import { pagesLinksObj } from "../data/PagesLinkList";
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
          backgroundImage="/videos/Heroo2_org.mp4"
          title="News & Updates"
          description="Stay informed with Anvi latest announcements, official press releases, and exciting new opportunities."
   
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
