import IndustryLayout from "../../components/IndustryLayout";
import GradientText from "../../components/GradientText";
import WhySection from "../../components/WhySection";
import Footer from "../../components/footer";
import { mainPagesLinksObj } from "../../data/PagesLinkList";
import { IndustriesBlackBox } from "../../components/All_Industries/IndustriesBlackBox";

const footerUpBoxInfoenergy = {
  head: "Let’s Build the Future of Energy",
  para: "Get in touch with us to explore how intelligent energy systems can power your next chapter.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const featuresData = [
  {
    id: "card-0",
    title: "Intelligent Energy Systems",
    theme: "green",
    description:
      "ANVI builds advanced digital platforms that analyse, optimise, and automate energy usage in real time. Our systems help organisations detect inefficiencies early, prevent failures, and maintain stable operations across facilities.",
    marketItems: ["Smart Cities", "Manufacturing", "Energy Utilities"],
    serviceItems: ["Energy Monitoring Systems", "Automated Fault Detection"],
    lifecycleItems: ["Design", "Deployment", "Continuous Optimisation"],
  },
  {
    id: "card-1",
    title: "Sustainable Power Solutions",
    theme: "red",
    description:
      "ANVI enables companies to transition toward cleaner and more responsible energy ecosystems. We design and deploy solar, wind, and hybrid solutions that reduce environmental impact while improving operational efficiency.",
    marketItems: ["Green Energy", "EV Charging", "Industrial Facilities"],
    serviceItems: ["Solar & Wind Integration", "Battery Storage Systems"],
    lifecycleItems: ["Assessment", "Installation", "Performance Monitoring"],
  },
  {
    id: "card-2",
    title: "Smart Infrastructure Integration",
    theme: "blue",
    description:
      "ANVI connects digital intelligence with physical power networks to create smarter and more scalable infrastructure systems. Our integrations ensure reliability, adaptability, and seamless performance across industries and geographies",
    marketItems: ["Urban Infrastructure", "Industrial IoT", "Utilities"],
    serviceItems: ["IoT Power Infrastructure", "Grid-Level Data Intelligence"],
    lifecycleItems: ["Integration", "Scaling", "System Optimisation"],
  },
  {
    id: "card-3",
    title: "Predictive & Adaptive Technologies",
    theme: "purple",
    description:
      "With advanced analytics and automation, ANVI’s energy systems forecast demand, anticipate risks, and optimise performance before issues arise. This ensures long-term stability and reduced downtime for organisations.",
    marketItems: ["Smart Cities", "Large Enterprises", "Critical Facilities"],
    serviceItems: ["Predictive Analytics", "Demand-Response Automation"],
    lifecycleItems: ["Data Collection", "Prediction", "Automated Action"],
  },
];

const whyEnergyData = [
    {
      number: "01.",
      title: "Engineering-First Approach",
      description:
        "We prioritise robust engineering backed by real-world testing to ensure every energy solution works reliably in live environments.",
    },
    {
      number: "02.",
      title: "Sustainability at the Core",
      description:
        "Our systems are designed with sustainability built in reducing waste, improving efficiency, and supporting cleaner energy adaptation.",
    },
    {
      number: "03.",
      title: "Scalable by Design",
      description:
        "Whether it's a single facility or an entire city network, ANVI Energy solutions grow seamlessly with your operational demands.",
    },
    {
      number: "04.",
      title: "Intelligence for the Future",
      description:
        "With data driven insights and adaptive technology, our systems improve decision-making and ensure long-term resilience.",
    },
];

const Energy = () => {
  return (
    <section>
      <IndustryLayout
        backgroundImage="/images/industries/energy.webp"
        title="Powering the Future of Energy"
        description="Transforming how industries generate, manage, and sustain power through intelligent and sustainable innovation."
        comingSoonText="We're building solutions to transform the energy sector. Stay tuned for groundbreaking innovations that will power the future."
        ourTitle="Powering a Smarter, Cleaner, and More Resilient Future"
        gradientTitle="Powering Tomorrow. Sustaining Today."
        ourDescription={[
          "Energy is the foundation of modern society  powering industries, cities, and everyday life. At ANVI, we believe the future of energy must be intelligent, sustainable, and adaptable. Our Energy vertical focuses on building advanced systems that help organisations transition toward cleaner operations, improve efficiency, and strengthen long-term resilience.",
          "We combine engineering expertise, digital intelligence, and sustainability-driven thinking to create energy solutions that respond to today’s challenges while preparing for tomorrow’s demands.",
        ]}
        mobileDescription={[
          `ANVI’s Energy vertical builds intelligent, sustainable systems that help organisations shift to cleaner 
          operations, boost efficiency, and strengthen long-term resilience.`,
          `By combining engineering, digital intelligence, and sustainability, we create energy solutions designed for 
          today’s needs and tomorrow’s demands.`,
        ]}
      >
        {/* --- MAIN CONTENT CONTAINER --- */}
        <IndustriesBlackBox 
         title={<>What ANVI <br className="hidden md:block" /> Energy Delivers</>}
        featuresData={featuresData} />

        {/*- Why Anvi section -*/}
        <WhySection
          backgroundImage="/images/industries/energybox.webp"
          title={
            <>
              Why ANVI <br /> Energy
            </>
          }
          description="Technology that strengthens power systems, reduces waste, and prepares industries for a smarter future."
          cards={whyEnergyData}
        />

        {/* Gradient Text Section */}
        <GradientText
          ourTitle="Looking Ahead"
          ourDescription={[
            "The Energy vertical at ANVI is continuously evolving. This page represents the foundation of a broader roadmap that will expand with deeper solutions, advanced platforms, and real-world impact storie",
            "As We grow this vertical, new technologies,insights,and case studeis be added here.ANVI welcomes collaborators , partners and innovatorsto shape the future of energy together.",
          ]}
        />

        {/* Industry Section */}
      </IndustryLayout>

      <Footer footerUpBoxInfo={footerUpBoxInfoenergy} />
    </section>
  );
};

export default Energy;
