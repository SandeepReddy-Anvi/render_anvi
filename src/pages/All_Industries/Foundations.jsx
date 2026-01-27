import React from "react";
import IndustryLayout from "../../components/IndustryLayout";
import Footer from "../../components/footer";
import { mainPagesLinksList } from "../../data/PagesLinkList";

const footerUpBoxInfosocialimpact = {
  head: "Let’s Build the Future of Social impact",
  para: "Reach out to us to create immersive worlds, visionary stories, and next-generation creative experiences.",
  linkLabel: "Contact Us",
  link : mainPagesLinksList.ContactUs
}

const Foundations = () => {
  return (
    <section>
      <IndustryLayout
        backgroundImage="/images/industries/foundation.jpg"
        title="Socila Impact"
        description="Creating impact from the ground up by empowering people, driving innovation, fostering sustainability, shaping communities, and transforming futures."

        comingSoonText="Creating impact from the ground up by empowering people, driving innovation, fostering sustainability, shaping communities, and transforming futures."

        ourTitle= "Social Impact"
        gradientTitle="Impact That Starts at the Ground Level."
        ourDescription="Creating impact from the ground up by empowering people, driving innovation, fostering sustainability, shaping communities, and building a future that benefits everyone across generations and societies worldwide."
      />
      <Footer footerUpBoxInfo={footerUpBoxInfosocialimpact}/>
    </section>
  );
};

export default Foundations;