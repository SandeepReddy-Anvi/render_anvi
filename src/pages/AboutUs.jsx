import { ContentCardUl } from "../components/ContentCardUl";
import CareerAndGrowth from "../components/CareersAndGrowth";
import Footer from "../components/footer";
import GradientText from "../components/GradientText";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/TimelineSection";
import { mainPagesLinksObj } from "../data/PagesLinkList";
import UnitedComponent from "../components/UnitedComponent";
import { SmartCountUp } from "../components/CountAnimOnScroll";

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
    desc: [
      "At ANVI, our mission is to use technology as a force of transformation. We believe engineering should elevate people, improve systems, and shape a better future for generations to come. Through robotics, space innovation, creative storytelling, and lifestyle design, we build solutions that unlock human potential and bring progress closer to everyday life.",
      "We aim to go beyond product creation - challenging limitations, redefining industries, and making advanced technology accessible to all. By combining research, engineering, and creativity, we develop purposeful solutions that drive long-term growth. Our commitment is to build ethical, sustainable, and human-centric innovation that empowers communities, strengthens industries, and shapes the future of tomorrow.",
    ],
    mobile: [
      `At ANVI, we use technology to drive meaningful transformation.
      We believe engineering should elevate people, strengthen systems, and shape a better future. Through robotics, space innovation, storytelling, and lifestyle design, we create solutions that unlock human potential and bring progress closer to everyday life.
      Our mission is to build ethical, sustainable, and human-centric innovation that empowers communities and accelerates long-term growth.`,
    ],
    imgUrl: "/images/about/mission.webp",
  },
  {
    title: "Our Vision",
    desc: [
      "Our vision at ANVI is to become a global leader in deep-technology innovation, shaping industries and inspiring future generations through engineering, science, and creativity. We imagine a world where robotics, space technology, creative communication, and lifestyle design work together to build smarter, safer, and more sustainable systems for humanity. We aim to redefine how technology is created, experienced, and integrated into everyday life, expanding possibilities for businesses and communities.",
      "Through continuous research, ethical practices, and human-centric thinking, our vision is to engineer not just the future we imagine, but the future the world genuinely needs - driving lasting progress and inspiring change everywhere.",
    ],
    mobile: [
      `ANVI’s vision is to become a global leader in deep-tech innovation.
      We imagine a future where robotics, space technology, creative engineering, and lifestyle design come together to build smarter, safer, and more sustainable systems.
      Through continuous research and human-centric thinking, we aim to create technology that truly serves the world and drives long-term progress.`,
    ],
    imgUrl: "/images/about/about2.1.webp",
  },
  {
    title: "Our Value",
    desc: [
      "At ANVI, our values shape every idea and decision we make. Innovation drives us—we push boundaries, explore possibilities, and treat curiosity as a way of thinking. Engineering excellence guides our work, ensuring precision, reliability, and lasting impact. We act with transparency and integrity, building trust with teams, partners, and communities. Human-centric thinking inspires us to design technology that serves people and improves life.",
      "We value sustainability and create solutions that respect our planet and future generations. Collaboration fuels progress as we unite engineering, creativity, science, and strategy to solve challenges together. Above all, we value purpose - using technology to elevate humanity and turn ambitious ideas into real progress.",
    ],
    mobile: [
      `At ANVI, our values guide every idea and decision.
      We innovate boldly, pursue engineering excellence, and act with transparency and integrity.
      Our approach is human-centric, designing technology that truly serves people.
      We prioritise sustainability, creating solutions that respect the planet and future generations.
      Driven by collaboration and purpose, we use technology to elevate humanity and turn ambitious ideas into progress.`,
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
    head: "4",
    subtext: "Core Verticals",
  },
  {
    head: "8+",
    subtext: "Industry Sectors",
  },
  {
    head: "1 Purpose",
    subtext: "Engineering Your Edge",
  },
];

const anviDiffList = [
  {
    head: "Technological Excellence",
    para: "Robotics engineered with precision and innovation",
    imgLink: "/images/about/about3.1.webp",
    size: "small",
  },
  {
    head: "Strategic Focus",
    para: "Solutions addressing real challenges with impact and scalability",
    imgLink: "images/about/about3.2.webp",
    size: "big",
  },
  {
    head: "Collaborative Approach",
    para: "Progress through partnerships driving collective growth",
    imgLink: "images/about/about3.3.webp",
    size: "big",
  },
  {
    head: "Impact-Driven Solutions",
    para: "Designing systems for measurable impact",
    imgLink: "images/about/about3.4.webp",
    size: "small",
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
      <div className=" items-center justify-center content-center">
        <GradientText
          ourTitle="About Us"
          ourDescription={ourDescriptionDesktop}
          mobileDescription={ourDescriptionMobile}
        />
      </div>

      {/* section 3 -> Mission, Vision, Value Section*/}
      <section className="w-full overflow-hidden">
        <ContentCardUl infoList={aboutCardList} />
      </section>

      {/* section 4 -> Our journey began*/}
      <section className="w-full relative px-[20px] md:px-[40px] lg:px-[60px] py-[100px] md:py-[102px]">
        <div className="w-full flex flex-col md:flex-row md:gap-[2vw] lg:gap-[70px] place-content-center">
          <div className="w-full md:w-[35%] xl:w-[50%] xl:max-w-[500px]">
            <img
              src="/images/about/anvi.webp"
              alt="Anvi Entrance"
              className="w-full max-w-full max-md:max-w-[600px] max-md:mx-auto max-md:aspect-[4/3] md:h-auto mb-10 md:mb-0 md:max-h-[630px] aspect-[9/16]"
            />
          </div>
          <div className="w-full md:w-[65%] xl:w-[50%] max-w-[744px] flex flex-col justify-center items-start md:items-start text-left">
            <h2 className="w-full font-medium text-[32px] md:text-[36px] lg:text-[43px]">
              Our journey began with a bold purpose
            </h2>
            <div className="w-full hidden md:flex md:flex-col">
              <p className="font-medium text-[16px] md:text-[18px] text-[#3D3D3D] py-8">
                ANVI began with the belief that technology should evolve beyond
                products and shape how humanity lives, works, and explores. What
                started as engineering excellence grew into a deep-tech
                ecosystem spanning robotics, space, creative media, and
                lifestyle innovation - expanding what technology can mean for
                people and the planet.
              </p>
              <p className="font-medium text-[16px] md:text-[18px] text-[#3D3D3D]">
                Today, ANVI operates at the intersection of science, creativity,
                and engineering, building purposeful, resilient, and
                future-ready systems that turn challenges into possibilities.
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

            {/* Count Ul Box */}
            <ul className="w-full mt-[60px] hidden lg:flex justify-between text-center">
              {countList.map((each, index) => (
                <li
                  key={each.head + index}
                  className="w-max place-content-center mx-auto"
                >
                  <h2 className="font-medium text-[20px] md:text-[40px] lg:text-[70px] whitespace-nowrap bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent leading-[1em]">
                    {/* {console.log(each.head)} */}
                    <SmartCountUp text={each.head} />
                  </h2>
                  <p className="font-medium text-[14px] md:text-[20px] text-[#100000] md:whitespace-normal lg:whitespace-nowrap">
                    {each.subtext}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Count Ul Box */}
        <ul className="w-full mt-[60px] flex max-md:flex-wrap max-md:gap-[30px] flex-row lg:hidden justify-between text-center">
          {countList.map((each, index) => (
            <li
              key={each.head + index}
              className="w-max place-content-center mx-auto"
            >
              <h2 className="font-medium text-[50px] lg:text-[70px] whitespace bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">
                <SmartCountUp text={each.head} />
              </h2>
              <p className="font-medium text-[16px] md:text-[20px] text-[#100000] md:whitespace-normal lg:whitespace-nowrap">
                {each.subtext}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* section 5 -> United Section*/}
      <UnitedComponent />

      {/* section 6 -> What Makes ANVI Different */}
      <section className="w-full max-w-[1800px] mx-auto bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF] px-5 lg:px-[60px] py-[100px]">
        {/* Heading Section */}
        <div className="sm:flex-row md:flex-row items-center justify-center text-clip">
          <div className="mt-0 2xl:mt-[20px] max-w-[1161px] text-center text-[#100000] mx-auto ">
            <p className="w-full max-md:text-center leading-[50.569px] text-[32px] md:text-[46px] font-medium">
              What Makes ANVI Different
            </p>
            <p className="w-full text-center justify-center mt-6 px-0 lg:px-[130px] text-[18px] md:text-[20]">
              ANVI stands apart not by what we build, but how we build combining
              science, creativity, and human-centric design to create technology
              that truly transforms lives, industries, and our shared future.
            </p>
          </div>
        </div>

        {/* Image Grid Section (Dynamic) */}
        <ul className="w-full flex flex-col gap-[10px] md:gap-y-[30px] mt-[50px] lg:mt-[60px] 2xl:mt-[100px]">
          {anviDiffList.map((item, index) => {
            // Group items into rows of 2
            if (index % 2 !== 0) return null;

            const first = anviDiffList[index];
            const second = anviDiffList[index + 1];

            // Alternate grid pattern
            const isEvenRow = Math.floor(index / 2) % 2 === 0;

            return (
              <li
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[${
                  isEvenRow ? "1.5fr_2fr" : "2fr_1.5fr"
                }] gap-0 lg:gap-6 gap-y-[10px] md:gap-y-[50px]`}
              >
                {[first, second].map((i, idx) => (
                  <div
                    key={idx}
                    className="relative p-4 group overflow-hidden rounded-3xl md:rounded-[46px] bg-[#fff] content-center h-full"
                  >
                    {/* Text */}
                    <div className="pt-2 pb-4">
                      <h3 className="text-[22px] md:text-[25px] text-[#100000] font-medium">
                        {i.head}
                      </h3>

                      <p className="text-[15px] text-[#100000] font-regular mt-2">
                        {i.para}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="overflow-hidden md:object-cover content-center h-[340px] md:h-[340px] lg:h-[440px] rounded-3xl md:rounded-[37px]">
                      <img
                        loading="lazy"
                        src={i.imgLink}
                        alt={i.head}
                        className="object-cover h-full w-full transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </li>
            );
          })}
        </ul>
      </section>

      {/* section 8 -> Careers and Growth */}
      <CareerAndGrowth />

      {/* Section 9 -> Our Journey of Innovation Timeline Box */}
      <div className="relative w-full py-20 px-8 md:px-20 lg:px-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start">
          {/* Section Heading */}
          <div className="md:sticky md:top-[120px] lg:sticky  self-start">
            <h2 className="text-[32px] md:text-[46px] font-medium leading-[54.7px] text-[#100000] mb-[27px]">
              Our Journey of Innovation
            </h2>
            <p className="text-[16px] md:text-[18px] font-medium text-[#323232]">
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

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </section>
  );
};

export default About;
