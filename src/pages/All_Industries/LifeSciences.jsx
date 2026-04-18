import IndustryLayout from "../../components/IndustryLayout";
import GradientText from "../../components/GradientText";
import WhySection from "../../components/All_Industries/WhySection"
import Footer from "../../components/footer";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
import { IndustriesBlackBox } from "../../components/All_Industries/IndustriesBlackBox";

const footerUpBoxInfolifescience = {
  head: "Let’s Build the Future of Life Science",
  para: "Connect with us to develop solutions that empower people, advance innovation, and shape healthier, sustainable communities for generations to come.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const featuresData = [
  {
    id: "card-0",
    title: "Human-Centric Health Innovation",
    theme: "purple",
    description:
      "ANVI develops intelligent health and wellness technologies that focus on real human needs  accessibility, reliability, and long-term wellbeing.",
    marketItems: ["Healthcare", "Wellness", "Community Support"],
    serviceItems: ["Digital Health Tools", "Smart Wellness Systems"],
    lifecycleItems: ["Research", "Engineering", "Deployment"],
  },
  {
    id: "card-1",
    title: "Sustainable Development Systems",
    theme: "red",
    description:
      "We create solutions that promote environmental balance, community resilience, and sustainable resource usage  ensuring long-term impact",
    marketItems: ["Climate", "Rural Development", "Urban Planning"],
    serviceItems: [
      "Community Sustainability Tools",
      "Environmental Intelligence Platforms",
    ],
    lifecycleItems: ["Assessment", "Implementation", "Impact Tracking"],
  },
  {
    id: "card-2",
    title: "AI-Driven Community Empowerment",
    theme: "green",
    description:
      "ANVI builds inclusive platforms that leverage AI to improve education, accessibility, and social support across diverse populations.",
    marketItems: ["Designer Wear", "Retail", "Personal Styling"],
    serviceItems: [
      "Educational Intelligence Systems",
      "Community Empowerment Platforms",
    ],
    lifecycleItems: ["Analytics", "Material Selection", "Fabric Integration"],
  },
  {
    id: "card-3",
    title: "Integrated Life Science Solutions",
    theme: "blue",
    description:
      "We combine engineering, data science, and life science expertise to create systems that help societies thrive  from healthcare to environment and community development.",
    marketItems: ["Public Health", "Sustainability", "Social Innovation"],
    serviceItems: [
      "Integrated Health & Environment Systems",
      "Data-Driven Social Innovation",
    ],
    lifecycleItems: ["Integration", "Optimization", "Scaling"],
  },
];

const whyLifeSciences = [
  {
    number: "01.",
    title: "Innovation Rooted in Humanity",
    description:
      "Built to uplift people, improve lives, and create real-world impact through thoughtful, future-ready innovation.",
  },
  {
    number: "02.",
    title: "Sustainability at the Core",
    description:
      "Solutions engineered for long-term environmental and social balance, ensuring responsible and sustainable progress.",
  },
  {
    number: "03.",
    title: "Community-Centered Design",
    description:
      "Crafted to support diverse societies, cultures, and ecosystems through responsible innovation.",
  },
  {
    number: "04.",
    title: "Future-Ready Systems",
    description:
      "Adaptive platforms that grow with changing societal needs through continuous, responsive innovation.",
  },
];

const LifeSciences = () => (
  <section>
    <IndustryLayout
      backgroundImage="/images/industries/lifesciences.jpg"
      title="Future of Life Sciences"
      description="Where heritage craftsmanship meets intelligent design and next-gen personalization to create meaningful experiences."
      comingSoonText="Pioneering breakthroughs that improve health, empower communities, inspire innovation, advance technology, protect the planet, and create better lives."
      ourTitle="Building Impact That Lasts for Generations"
      gradientTitle="Innovating for Healthier Futures."
      ourDescription={[
        "ANVI Life Sciences merges innovation, sustainability, and community progress to create meaningful impact. We combine engineering, biology, and digital intelligence to advance healthcare and improve quality of life.",
        "Our work spans intelligent health systems, environment-aware technologies, and empowerment platforms built for an inclusive and sustainable future.",
      ]}
      mobileDescription={[
        `ANVI Life Sciences merges innovation, sustainability, and community progress to advance healthcare and 
          improve quality of life.`,

        `We develop intelligent health systems, environment-aware technologies, and empowerment platforms 
          designed for an inclusive, sustainable future.`,
      ]}
    >

      {/* --- MAIN CONTENT CONTAINER --- */}
      <IndustriesBlackBox 
       title={<>What ANVI <br className="hidden md:block" /> LifeScience Delivers</>}
      featuresData={featuresData} />

      {/*- why anvi section -*/}
      <div>
        <WhySection
          backgroundImage="/images/industries/LifeScienceBox.jpg"
          title={
            <>
              Why ANVI Life
              <br /> Sciences
            </>
          }
          description={
            "ANVI Life Sciences builds sustainable, human-centered systems that improve lives and create long-term, inclusive impact."
          }
          cards={whyLifeSciences}
        />
      </div>

      <GradientText
        ourTitle="Looking Ahead"
        ourDescription={[
          "ANVI Life Sciences is growing into a global ecosystem dedicated to wellbeing, community growth, and sustainable innovation.",
          "This page introduces a long-term vision built on advanced health tools, community platforms, and environmental systems inviting organisations and researchers to reimagine the future with us.",
        ]}
      />
    </IndustryLayout>
    <Footer footerUpBoxInfo={footerUpBoxInfolifescience} />
  </section>
);

export default LifeSciences;
