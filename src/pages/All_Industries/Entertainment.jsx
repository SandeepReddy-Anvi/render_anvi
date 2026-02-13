import IndustryLayout from "../../components/IndustryLayout";
import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
import Footer from "../../components/footer";
import { IndustriesBlackBox } from "../../components/All_Industries/IndustriesBlackBox";

const footerUpBoxInfoentertainment = {
  head: "Let’s Build the Future of Entertainment",
  para: "Reach out to us to create immersive worlds, visionary stories, and next-generation creative experiences.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const featuresData = [
  {
    id: "card-0",
    title: "Interactive & Experiential Media",
    theme: "purple",
    description:
      "We design interactive experiences that respond to movement, sound, and emotion  allowing audiences to engage with stories in entirely new ways.",
    marketItems: [
      "Immersive Installations",
      "Virtual Shows",
      "Digital Exhibitions",
    ],
    serviceItems: [
      "Interactive Experience Design",
      "Real-Time Media Integration",
    ],
    lifecycleItems: ["Ideation", "Interaction Design", "Deployment"],
  },
  {
    id: "card-1",
    title: "Cinematic Design & Motion Systems",
    theme: "green",
    description:
      "ANVI builds high-end cinematic assets, motion visuals, and storytelling sequences using advanced creative technology pipelines.",
    marketItems: ["Film", "Advertising", "Media Studios"],
    serviceItems: [
      "Motion Graphics & Cinematic Visuals",
      "Story-driven Digital Sequences",
    ],
    lifecycleItems: ["Script", "Production", "Final Rendering"],
  },
  {
    id: "card-2",
    title: "Creative Technology Innovation",
    theme: "red",
    description:
      "We bring creativity and engineering together to build new forms of entertainment  AI-generated experiences, simulation-driven stories, and adaptive content.",
    marketItems: [
      "Media Tech",
      "Innovation Labs",
      "Experimental Entertainment",
    ],
    serviceItems: [
      "AI-Enhanced Creative Systems",
      "Simulation-Based Storytelling",
    ],
    lifecycleItems: ["R&D", "Prototyping", "Experience Delivery"],
  },
  {
    id: "card-3",
    title: "Immersive Worldbuilding",
    theme: "blue",
    description:
      "ANVI creates cinematic universes and visually rich digital worlds that blend narrative depth with artistic precision. Our worldbuilding frameworks support games, films, virtual experiences, and narrative-driven environments.",
    marketItems: ["AI Gaming", "Cinematic Media", "VR/AR Experiences"],
    serviceItems: [
      "World & Environment Design",
      "Visual Narrative Development",
    ],
    lifecycleItems: ["Concept", "Design", "Experience Layering"],
  },
];

const whyEntertainmentData = [
  {
    number: "01.",
    title: "Engineering meets creativity",
    description:
      "We combine technology and imagination to build entertainment systems that are visually powerful and technically sound.",
  },
  {
    number: "02.",
    title: "Designed for emotional impact",
    description:
      "Every experience is shaped to evoke emotion and connect deeply with audiences, creating moments that stay with them.",
  },
  {
    number: "03.",
    title: "Built for immersive engagement",
    description:
      "Our experiences are interactive, adaptive, and crafted to pull viewers into the story, creating deeper engagement and emotional impact.",
  },
  {
    number: "04.",
    title: "Future-ready creative ecosystems",
    description:
      "ANVI develops entertainment that scales across screens, devices, and realities.",
  },
];

const Entertainment = () => {
  return (
    <section>
      <IndustryLayout
        backgroundImage="/images/industries/entertainment.jpg"
        title="Future of Immersive Entertainment"
        description="Where imagination, technology, and emotion merge to create extraordinary, immersive human-centered experiences."
        comingSoonText="From vision to experience, we’re creating worlds where stories come alive. Stay tuned for immersive journeys shaped by boundless creativity."
        ourTitle="Transforming Creativity Into Intelligent Worlds"
        gradientTitle="Crafting the Future of Entertainment."
        ourDescription={[
          "At ANVI, entertainment blends storytelling, design, and technology to create immersive, emotionally engaging experiences. From cinematic worlds to interactive simulations, we combine artistry and engineering to bring imagination to life",
          "Our focus spans worldbuilding, virtual experiences, interactive media, and creative tech innovations that are intuitive and unforgettable",
        ]}
        mobileDescription={[
          `At ANVI, we blend storytelling, design, and technology to create immersive and emotionally engaging 
          entertainment experiences.`,

          `From cinematic worlds to interactive simulations, we combine artistry and engineering to build intuitive, 
          unforgettable digital environments.`,
        ]}
      >

        {/* --- MAIN CONTENT CONTAINER --- */}
        <IndustriesBlackBox featuresData={featuresData} />

        {/*- why anvi section -*/}
        <div>
          <WhySection
            backgroundImage="/images/industries/entertainmentbox.webp"
            title={
              <>
                Why ANVI <br /> Entertainment Delivers
              </>
            }
            description={
              "ANVI builds high-performance, low-power semiconductor systems that are reliable, scalable, and future-ready."
            }
            cards={whyEntertainmentData}
          />
        </div>

        <GradientText
          ourTitle="Looking Ahead"
          ourDescription={[
            "ANVI is expanding into next-gen creative technologies from interactive universes to AI-driven storytelling and immersive multi-sensory worlds.",
            "This page marks the start of a broader vision built on new platforms, creative tools, and storytelling innovation. We welcome creators and studios ready to redefine the future of entertainment.",
          ]}
        />
      </IndustryLayout>
      <Footer footerUpBoxInfo={footerUpBoxInfoentertainment} />
    </section>
  );
};
export default Entertainment;
