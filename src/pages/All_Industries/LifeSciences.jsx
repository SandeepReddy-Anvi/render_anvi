import React from "react";
import IndustryLayout from "../../components/IndustryLayout";
import Footer from "../../components/footer";
import { mainPagesLinksList } from "../../data/PagesLinkList";

const footerUpBoxInfolifescience = {
  head: "Let’s Build the Future of Life Science",
  para: "Reach out to us to create immersive worlds, visionary stories, and next-generation creative experiences.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs
}
const LifeSciences = () => {

  return (
    <section>
      <IndustryLayout
        backgroundImage="/images/industries/lifesciences.jpg"
        title="Life Sciences"
        description="Pioneering breakthroughs that improve health, empower communities, inspire innovation, advance technology, protect the planet, and create better lives."

        comingSoonText="Pioneering breakthroughs that improve health, empower communities, inspire innovation, advance technology, protect the planet, and create better lives."

        ourTitle="Life Sciences"
        gradientTitle="Innovating for Healthier Futures."
        ourDescription="We pioneer breakthroughs that improve health, empower communities, and advance technology shaping a future where science protects both people and the planet for generations to come globally worldwide."
      ></IndustryLayout>

      <Footer footerUpBoxInfo={footerUpBoxInfolifescience} />

    </section>


  );
};

export default LifeSciences;