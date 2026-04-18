import { ContentCardUl } from "../components/About/ContentCardUl";
import CareerAndGrowth from "../components/About/CareersAndGrowth";
import WeWork from "../components/About/WeWork";
import Footer from "../components/footer";
import GradientText from "../components/GradientText";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/About/TimelineSection";
import { mainPagesLinksObj } from "../data/PagesLinkList";
import { SmartCountUp } from "../components/CountAnimOnScroll";
import { text } from "framer-motion/client";

const footerUpBoxInfoObj = {
  head: `Ready to explore the future with anvi?`,
  //head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const aboutCardList = [
  {
    title: "Our Mission",
    desc1: `To transform human potential through purposeful engineering - building technology that is 
       bold, accessible, and future-shaping.`,
    desc: [
      `We use technology as a force for progress, creating solutions that elevate people, 
      strengthen industries, and improve everyday life. Through robotics, space innovation, 
      creative media, and lifestyle design, ANVI develops systems that challenge limitations, 
      redefine industries, and make advanced innovation accessible to all. Our commitment is 
      simple - build ethical, sustainable, and human-centric technologies that create long-term 
      impact.`,
    ],
    imgUrl: "/images/about/mission.webp",
  },
  {
    title: "Our Vision",
    desc1: `Engineering a Future Where Deep Technology Transforms Industries, Elevates Humanity, 
      and Expands What’s Possible.`,
    desc: [

      `At ANVI, our vision is to lead global deep-tech innovation by uniting engineering, 
      science, and creativity. We imagine a world where robotics, space systems, communication, 
      and lifestyle design come together to build smarter and more sustainable solutions. 
      Through continuous research and human-centric thinking, we create technology that 
      serves real needs and drives meaningful progress for future generations.`,
    ],
    imgUrl: "/images/about/about2.1.webp",
  },
  {
    title: "Our Value",
    desc1: `Guided by Values That Drive Innovation, Integrity, Human-Centered Progress, 
       and Meaningful Transformation.`,
    desc: [
      `At ANVI, our values shape how we think, build, and solve problems. Innovation pushes 
      us to explore new possibilities, while engineering excellence ensures precision and 
      lasting impact. We act with transparency and integrity, design with people at the 
      center, and create solutions that respect our planet. Through collaboration and 
      purpose-driven thinking, we use technology to elevate humanity and turn ambitious 
      ideas into meaningful progress.`,
    ],
    imgUrl: "/images/about/value.webp",
  },
];

const ourDescriptionDesktop = [
  "ANVI is a future-focused deep-tech organisation built on the belief that engineering can rewrite what humanity is capable of. From robots that solve ground-level operational problems to space technologies that take us beyond earth, ANVI exists to create products and systems that move industries, societies, and individuals forward.",

  "The foundation of ANVI is rooted in three core pillars: Engineering Excellence, Strategic Innovation, and Societal Purpose.",

  "In every vertical we touch, our goal is not just to build products — we build technological ecosystems that accelerate global progress.",
];

const ourDescriptionMobile = [
  `ANVI is a future-focused deep-tech company building advanced robotic systems, space technologies, and 
  intelligent engineering solutions.Our work combines engineering excellence, strategic innovation, and 
  societal purpose to solve real-world challenges.`,

  `Across every vertical, we create scalable technological ecosystems that drive industrial growth, improve 
  human lives, and accelerate global progress.`,
];

const countList = [
  {
    text: "Building across focused verticals that drive innovation and long-term impact.",
    head: "4",
    subtext: "Core Verticals",
  },
  {
    text: "Delivering intelligent solutions across diverse industries and real-world applications.",
    head: "8+",
    subtext: "Industry Sectors",
  },
  {
    text: "Driving continuous innovation through research, experimentation, and advanced development.",
    head: "50+",
    subtext: "R&D Experiments",
  },
  {
    text: "Driven by a single unified purpose - Engineering Your Edge - to build meaningful, future-ready solutions.",
    head: "1",
    subtext: "Unified Purpose",
  },
];

const whyList = [
  {
    sectionImg: "/images/about/about3.1.webp",
    number:"01",
    text: "Technological Excellence",
    desc: "Robotics engineered with precision and innovation",
  },
  {
    sectionImg: "/images/about/about3.2.webp",
    number:"02",
    text: "Strategic Focus",
    desc: "Solutions addressing real challenges with impact and scalability",
  },
  {
    sectionImg: "/images/about/about3.3.webp",
    number:"03",
    text: "Collaborative Approach",
    desc: "Progress through partnerships driving collective growth",
  },
  {
    sectionImg: "/images/about/about3.4.webp",
    number:"04",
    text: "Impact-Driven Solutions",
    desc: "Designing systems for measurable impact",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#FFFFFF] overflow-hidden lg:overflow-visible"
    >
      {/* section 1 -> Hero Section */}
      <HeroSection
        backgroundImage="/videos/Heroo2_org.mp4"
        title="We Engineer It."
        description="At Anvi, we build breakthrough deep-tech robots and future-ready systems that deliver strategic advantages for industries."
        descriptionWidth="600px"
      />

      {/* section 2 */}
      <div className="items-center justify-center content-center">
        <GradientText

          header="About Us"
          ourDescription={ourDescriptionDesktop}
          mobileDescription={ourDescriptionMobile}
        />
      </div>

      <div className="px-[20px] md:px-[40px] lg:px-[60px] pb-14 md:pb-[100px]">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 lg:gap-[32px]">
          {countList.map((each, index) =>
            <li key={each.head + index} className="flex flex-col gap-4 place-content-center bg-[#F5F5F7] p-6 rounded-[12px]">
              <p className="font-medium text-[14px] md:text-[14px] text-[#000000] mb-4">
                {each.text}
              </p>
              <h2 className="font-wix font-medium text-[20px] md:text-[40px] lg:text-[60px] whitespace-nowrap bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">
                <SmartCountUp text={each.head} />
              </h2>
              <p className="font-medium text-[16px] md:text-[18px] text-[#100000] whitespace-nowrap">
                {each.subtext}
              </p>
            </li>
          )}
        </ul>
      </div>

      {/* section 3 -> Mission, Vision, Value Section*/}
      <section className="w-full overflow-hidden">
        <ContentCardUl infoList={aboutCardList} />
      </section>

      {/* section 4 -> Our journey began*/}
      <section className="w-full relative px-[20px] md:px-[40px] lg:px-[60px] py-[60px] md:py-[80px]">
        <div className="w-full flex flex-col md:flex-row md:gap-[2vw] lg:gap-[60px] place-content-center">
          <div className="w-full md:w-[40%] xl:w-[50%] xl:max-w-[500px]">
            <img
              src="/images/about/anvi.webp"
              alt="Anvi Entrance"
              className="w-full max-w-full max-md:max-w-[600px] max-md:mx-auto max-md:aspect-[4/3] md:h-auto mb-10 md:mb-0 md:max-h-[630px] aspect-[9/16]"
            />
          </div>

          <div className="w-full md:w-[60%] xl:w-[50%] max-w-[744px] flex flex-col justify-center items-start md:items-start text-left">
            <div className="flex items-center gap-2 pb-4">
              <span className="w-6 h-[2px] bg-[#CD0054]" />
              <p className="text-[14px] text-[#CD0054] font-bold font-wix uppercase">
                Our Story
              </p>
            </div>
            <div className="flex gap-4">
              <span className="h-auto w-[2px] bg-[#CD0054]" />
              <h2 className="w-full font-semibold text-[32px] md:text-[36px] lg:text-[46px] uppercase leading-tight">
                "Our story began <br className="hidden lg:block" />with a bold purpose."
              </h2>
            </div>
            <div className="w-full hidden md:flex md:flex-col">
              <p className="font-medium text-[16px] text-[#3D3D3D] py-8">
                ANVI began with a simple belief  that engineering can rewrite what humanity 
                is capable of. What started as a pursuit of deep-tech excellence has grown 
                into a multi-vertical ecosystem spanning robotics, space technologies, 
                creative studios, lifestyle innovation, and sustainable future systems.
              </p>
              <p className="font-medium text-[16px] text-[#3D3D3D]">
                From solving ground-level challenges with intelligent robots to designing 
                orbital platforms that expand the boundaries of exploration, 
                <span className="font-semibold text-[#100000]"> ANVI has always been driven by one unified Purpose: Engineering Your Edge™.</span>
              </p>
              <p className="font-medium text-[16px] text-[#3D3D3D] py-8">
                Every milestone in our journey reflects curiosity, courage, and a 
                commitment to building technology that creates real progress  for 
                industries, for communities, and for the world. Our story is still unfolding, 
                powered by ideas that dare to challenge the present and shape the next 
                era of human innovation.
              </p>
            </div>

            <div className="block md:hidden">
              <p className="font-medium text-[16px] md:text-[18px] text-[#3D3D3D] py-8">
                ANVI began with a belief that technology should shape how
                humanity lives, works, and explores not just create products.
                What started as engineering excellence has grown into a
                deep-tech ecosystem spanning robotics, space, creative media,
                and lifestyle innovation.
              </p>
              <p className="font-medium text-[16px] md:text-[18px] text-[#3D3D3D]">
                Today, we unite science, creativity, and engineering to build
                purposeful, resilient systems that turn challenges into
                possibilities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* section 6 -> What Makes ANVI Different */}
      <section className="w-full max-w-[1800px] mx-auto px-5 lg:px-[60px] py-[60px]">
        {/* Heading Section */}
        <div className="sm:flex-row md:flex-row items-center justify-center text-clip">
          <div className="flex items-center gap-2 pb-4 justify-center">
            <span className="w-6 h-[2px] bg-[#CD0054]" />
            <p className="text-[14px] text-[#CD0054] font-bold font-wix uppercase">
              Why ANVI
            </p>
          </div>
          <div className="mt-0 2xl:mt-[20px] max-w-[1100px] text-center text-[#100000] mx-auto ">
            <p className="w-full max-md:text-center leading-[50.569px] text-[32px] md:text-[46px] font-medium">
              What Makes ANVI Different
            </p>
            <p className="w-full text-center justify-center mt-6 px-0 lg:px-[130px] text-[16px] md:text-[18]">
              ANVI stands apart not by what we build, but how we build - combining science, 
              creativity, and human-centric design to create technology that truly transforms 
              lives, industries, and our shared future.
            </p>
          </div>
        </div>

        <div className="my-[60px]">
          <ul className="grid grid-row md:grid-cols-2 gap-[2px] bg-[#E0E0E0] rounded-[12px] overflow-hidden">
            {whyList.map((i, item) =>
              <li key={i.head + item} className="group relative flex flex-col gap-2 place-content-center 
                bg-[#F5F5F7] p-5 lg:p-[60px] transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:h-[3px] after:w-0 after:bg-[#CD0054] after:transition-all after:duration-300 hover:after:w-full"
              >
                <div className="overflow-hidden max-w-[532px] h-[250px]">
                  <img 
                    loading="lazy"
                    src={i.sectionImg}
                    className="w-full h-full object-cover content-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <p className="font-wix font-medium text-[32px] md:text-[36px] lg:text-[46px] text-[#00000038] my-1">
                  {i.number}
                </p>
                <h2 className="font-medium text-[20px] lg:text-[22px]">
                  {i.text}
                </h2>
                <p className="font-regular text-[16px] text-[#000000] whitespace-nowrap">
                  {i.desc}
                </p>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Section 6 -> Our Journey of Innovation Timeline Box */}
      <div className="relative w-full py-20 px-8 md:px-20 lg:px-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start">
          {/* Section Heading */}
          <div className="md:sticky md:top-[120px] lg:sticky  self-start">

            <div className="flex items-center gap-2 pb-4">
              <span className="w-6 h-[2px] bg-[#CD0054]" />
              <p className="text-[14px] text-[#CD0054] font-bold font-wix uppercase">
                Our Journey
              </p>
            </div>

            <h2 className="text-[32px] md:text-[46px] font-medium leading-[54.7px] text-[#100000] mb-[27px]">
              Our Journey of Innovation
            </h2>
            <p className="text-[14px] font-medium text-[#323232]">
              Shaping the Future, Step by Step. <br />
              From our first prototypes to large-scale deployments, every
              milestone reflects our vision to engineer meaningful innovation.
            </p>
          </div>

          {/* Timeline Box */}
          <div className="relative">
            {/* Timeline Section Component */}
            <TimelineSection />
          </div>
        </div>
      </div>

      {/* section 7 -> Careers and Growth */}
      <CareerAndGrowth />

      <WeWork />

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </section>
  );
};

export default About;
