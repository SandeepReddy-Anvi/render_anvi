import IndustryLayout from "../../components/IndustryLayout";
import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import Footer from "../../components/footer";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
import { IndustriesBlackBox } from "../../components/All_Industries/IndustriesBlackBox";

const footerUpBoxInfosemiconductors = {
  head: "Let’s Build the Future of SemiConductors",
  para: "Get in touch with us to explore how intelligent energy systems can power your next chapter.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const featuresData = [
  {
    id: "card-0",
    title: "Next-Generation SemiConductor Materials",
    theme: "blue",
    description:
      "We engineer advanced SemiConductor materials built for durability, thermal stability, and energy efficiency. These materials support the next generation of AI systems, robotics platforms, and high-speed computing devices.",
    marketItems: ["AI Systems", "Robotics", "Edge Computing"],
    serviceItems: [
      "High-Performance Material Engineering",
      "Reliability & Stress Testing",
    ],
    lifecycleItems: ["R&D", "Material Engineering", "Performance Optimisation"],
  },
  {
    id: "card-1",
    title: "Predictive & Adaptive SemiConductor Technologies",
    theme: "purple",
    description:
      "ANVI develops adaptive SemiConductor systems using advanced analytics, AI optimisation, and automated tuning. These technologies anticipate failures, balance workloads, and ensure long-term stability - significantly reducing downtime and operational risk.",
    marketItems: [
      "Critical Infrastructure",
      "Data Centers",
      "Enterprise Systems",
    ],
    serviceItems: [
      "SemiConductor Performance Analytics",
      "Adaptive AI-Driven Chip Optimisation",
    ],
    lifecycleItems: ["Data Collection", "Prediction", "Automated Optimisation"],
  },
  {
    id: "card-2",
    title: "Advanced Chip Engineering",
    theme: "green",
    description:
      "ANVI designs and develops high-performance SemiConductor chips built for speed, efficiency, and precision. Our architectures power intelligent devices, automation platforms, and large-scale computing environments - enabling industries to operate at next-level performance.",
    marketItems: [
      "Consumer Electronics",
      "Industrial Automation",
      "Research Labs",
    ],
    serviceItems: [
      "Chip Architecture & Design",
      "High-Performance IC Development",
    ],
    lifecycleItems: ["Design", "Fabrication Support", "Validation"],
  },
  {
    id: "card-3",
    title: "Integrated Micro-Systems & Embedded Intelligence",
    theme: "red",
    description:
      "ANVI builds intelligent embedded SemiConductor systems that seamlessly integrate with sensors, devices, and industrial IoT networks. Our micro-systems enable real-time decision-making, automation, and scalable digital transformation.",
    marketItems: ["Smart Devices", "Industrial IoT", "Automation Platforms"],
    serviceItems: [
      "Embedded System Design",
      "Sensor Integration & Micro-Architecture",
    ],
    lifecycleItems: ["Integration", "Scaling", "System Calibration"],
  },
];

const whySemiConductorsData = [
  {
    number: "01.",
    title: "Precision Engineering at Scale",
    description:
      "Our chips and materials are designed using advanced research, world-class engineering, and strict validation standards.",
  },
  {
    number: "02.",
    title: "Built for Next-Gen Electronics",
    description:
      "We engineer semiconductors optimised for AI systems, robotics, automation, IoT, and high-speed industrial electronics.",
  },
  {
    number: "03.",
    title: "Scalable, Reliable, Future-Ready",
    description:
      "Our semiconductor platforms grow with your innovation  from prototypes to full-scale production.",
  },
  {
    number: "04.",
    title: "Intelligence at the Core",
    description:
      "ANVI integrates real-time processing, adaptive optimisation, and AI-driven performance to make every system smarter.",
  },
];

const SemiConductors = () => {
  return (
    <section>
      <IndustryLayout
        backgroundImage="/images/industries/semiconductors.jpg"
        title="Future of SemiConductors"
        description="Transforming next-gen electronics through high-performance materials, precision chip engineering, and intelligent semiconductor systems."
        comingSoonText="We're building solutions to transform the energy sector. Stay tuned for groundbreaking innovations that will power the future."
        ourTitle="A Smarter, Faster, and More Intelligent Tomorrow"
        gradientTitle="Building the Core of Modern Technology."
        ourDescription={[
          "SemiConductors power the world’s devices, industries, and intelligent systems. At ANVI, we develop advanced semiconductor technologies that accelerate computation, enhance reliability, and enable breakthroughs in robotics, AI, space, automation, and consumer electronics.",
          "Our work spans chip design, material engineering, embedded intelligence, and adaptive micro-systems helping organisations scale faster, operate smarter, and innovate with confidence.",
        ]}
        mobileDescription={[
          `ANVI develops advanced semiconductor technologies that accelerate computation, enhance reliability, 
          and enable breakthroughs in robotics, AI, space, and automation.
          `,

          `Our work spans chip design, material engineering, embedded intelligence, and adaptive microsystems  
          helping organisations scale faster and innovate with confidence.`,
        ]}
      >
        {/* --- MAIN CONTENT CONTAINER --- */}
        <IndustriesBlackBox featuresData={featuresData} />

        {/*- why anvi section -*/}
        <WhySection
          backgroundImage="/images/industries/semiconductorsbox.webp"
          title={
            <>
              Why ANVI <br /> Semiconductors
            </>
          }
          description="ANVI builds high-performance, low-power semiconductor systems that are reliable, scalable, and future-ready."
          cards={whySemiConductorsData}
        />

        <GradientText
          ourTitle="Looking Ahead"
          ourDescription={[
            "ANVI’s Semiconductors vertical is evolving, and this page marks the foundation of a larger roadmap that will expand into new materials, advanced chip platforms, and real-world applications.",
            "As we grow through new technologies and partnerships, our mission remains the same: to build semiconductor innovations that accelerate industries, empower intelligence, and shape the future of global electronics.",
          ]}
        />
      </IndustryLayout>

      <Footer footerUpBoxInfo={footerUpBoxInfosemiconductors} />
    </section>
  );
};
export default SemiConductors;
