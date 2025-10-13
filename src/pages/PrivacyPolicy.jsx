import Footer from "../components/footer";
import { mainPagesLinksList } from "../utils/PagesLinkList";

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Industry?",
  para: "Don't see your industry listed, We work across diverse sectors and can adapt our technologies to meet your specific needs.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

export const PrivacyPolicy = () => {
  return (
    <>
      <main id="news" className="w-full">
        <h1>PrivacyPolicy</h1>
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};
