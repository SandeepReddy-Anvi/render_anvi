import IndustryLayout from "../../components/IndustryLayout";

import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
import Footer from "../../components/footer";
import { IndustriesBlackBox } from "../../components/All_Industries/IndustriesBlackBox";

const footerUpBoxInfoentertainment = {
  head: "Let’s Build the Future of Textiles",
  para: "Get in touch with us to explore how intelligent energy systems can power your next chapter.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const featuresData = [
  {
    id: "card-0",
    title: "Smart Material Intelligence",
    theme: "green",
    description:
      "We combine tradition with technology by recommending materials based on comfort, climate, longevity, and cultural context. Our system ensures users receive the perfect combination of heritage fabric and modern performance.",
    marketItems: ["Designer Wear", "Retail", "Personal Styling"],
    serviceItems: [
      "Intelligent Fabric Recommendation",
      "Climate & Comfort Profiling",
    ],
    lifecycleItems: ["Analytics", "Material Selection", "Fabric Integration"],
  },
  {
    id: "card-1",
    title: "AI-Driven Personal Tailoring",
    theme: "purple",
    description:
      "ANVI leverages intelligent measurement systems to deliver precision-fit clothing customised to each individual’s body profile. Every outfit is engineered for comfort, style, and cultural expression.",
    marketItems: ["Formal Wear", "Ethnic Wear", "Custom Fashion"],
    serviceItems: [
      "AI Measurement & Fit Mapping",
      "Hyper-Personalized Tailoring",
    ],
    lifecycleItems: ["Scan", "Personal Fit Model", "Tailored Output"],
  },
  {
    id: "card-2",
    title: "Adaptive Fashion Experiences",
    theme: "blue",
    description:
      "Our platform delivers interactive, AI-enhanced fashion journeys that evolve with the wearer style updates, body profile changes, and cultural preferences.",
    marketItems: ["Fashion Tech", "Personal Styling", "Lifestyle Apparel"],
    serviceItems: [
      "AI-Based Style Adaptation",
      "Personalized Fashion Intelligence",
    ],
    lifecycleItems: ["User Insights", "Adaptation", "Continuous Refinement"],
  },

  {
    id: "card-3",
    title: "Cultural & Heritage Design Systems",
    theme: "red",
    description:
      "ANVI preserves India’s textile legacy through digital design systems that modernize traditional craftsmanship while maintaining authenticity and emotional value.",
    marketItems: ["Ethnic Fashion", "Weddings", "Cultural Wear"],
    serviceItems: [
      "Digital Ethnic Craft Design",
      "Heritage Pattern Engineering",
    ],
    lifecycleItems: ["Craft Research", "Digital Design", "Modern Output"],
  },
];

const whyTextilesData = [
  {
    number: "01.",
    title: "AI-Powered Craftsmanship",
    description:
      "We merge intelligent systems with heritage tailoring to deliver clothing that feels both modern and culturally rooted.",
  },
  {
    number: "02.",
    title: "Perfect Personal Fit",
    description:
      "Every outfit is designed using AI-driven body mapping for accuracy, comfort, and enhanced precision.",
  },
  {
    number: "03.",
    title: "Culture-Driven Design",
    description:
      "We blend traditional patterns with contemporary digital engineering to preserve identity with thoughtful innovation.",
  },
  {
    number: "04.",
    title: "Future-Ready Fashion",
    description:
      "Our platform adapts to user style, body evolution, and emerging fashion technologies seamlessly.",
  },
];

const Textiles = () => (
  <section>
    <IndustryLayout
      backgroundImage="/images/industries/textiles.webp"
      title="Reinventing the Future of Textiles"
      description="Where heritage craftsmanship meets intelligent design and next-gen personalization to create meaningful experiences."
      comingSoonText="We’re pioneering AI tailoring in India to deliver personalized formal and ethnic wear experiences. Stay tuned for a personalized fashion revolution."
      ourTitle="Crafting Fashion Through Intelligence & Tradition"
      gradientTitle="Tradition Tailored. Technology Perfected."
      ourDescription={[
        "ANVI Textiles is shaping a new era of smart fashion where AI, design engineering, and cultural craftsmanship create garments that are personal, precise, and expressive.",
        "As India’s first AI tailoring ecosystem, we blend heritage techniques with advanced digital systems to deliver perfect fits, intelligent material choices, and fashion that feels truly personal.",
      ]}
      mobileDescription={[
        `ANVI Textiles blends AI, design engineering, and cultural craftsmanship to create garments that are 
          precise, personal, and expressive.`,

        `As India’s first AI tailoring ecosystem, we combine heritage techniques with advanced digital systems to 
          deliver perfect fits and smart material choices.`,
      ]}
    >
      {/* --- MAIN CONTENT CONTAINER --- */}
      <IndustriesBlackBox featuresData={featuresData} />

      {/*- Why Anvi Section -*/}
      <div>
        <WhySection
          backgroundImage="/images/industries/Textilesbox.webp"
          title={
            <>
              Why ANVI <br /> Textiles
            </>
          }
          description={
            "We merge AI with heritage tailoring traditions to create fashion that is both meaningful and technologically advanced."
          }
          cards={whyTextilesData}
        />
      </div>
      <GradientText
        ourTitle="Looking Ahead"
        ourDescription={[
          "ANVI Textiles is shaping the future of fashion, where AI, cultural identity, and personalized design converge.",
          "This page marks the start of a growing ecosystem that will expand into digital garment simulation, AI fabric selection, smart fashion tools, and global personalization. We welcome designers, brands, and innovators to build the next era of textile intelligence with us.",
        ]}
      />
    </IndustryLayout>
    <Footer footerUpBoxInfo={footerUpBoxInfoentertainment} />
  </section>
);

export default Textiles;
