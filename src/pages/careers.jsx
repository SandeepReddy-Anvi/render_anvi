import { Link } from "react-router-dom";
import { IconsObj } from "../utils/Iconify_icons";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import SectionWithImage from "../components/SectionWithImage";
import { pagesLinksObj } from "../data/PagesLinkList";
import GradientText from "../components/GradientText";

const footerUpBoxInfoObj = {
  head: "Looking for the Right Job ?",
  para: "Join Anvi to explore ambitious ideas, work with breakthrough technologies, and build a career that creates real impact.",
  linkLabel: "Browse Openings",
  link: pagesLinksObj.Career_Openings,
};

const ourDescriptionDesktop = [
  "At ANVI, culture is not a set of rules  it is how we think, build, and collaborate every day. We bring together engineers, designers, scientists, creators, and problem-solvers who share a deep respect for innovation and purpose. Curiosity drives us to question the obvious, ownership empowers us to build boldly, and collaboration ensures every idea grows stronger through collective thinking.",

  "We value experimentation over fear, learning over ego, and impact over noise. Our teams are encouraged to think long-term, act responsibly, and design with empathy  knowing that the technologies we build today will shape the world tomorrow. At ANVI, culture is our foundation, enabling us to create systems that are resilient, meaningful, and future-ready.",
];

const ourDescriptionMobile = [
  `At ANVI, culture is how we think, build, and collaborate. Our teams of engineers, designers, scientists, and 
  creators share a deep respect for innovation and purpose.`,

  `We value experimentation, ownership, empathy, and long-term thinking  shaping technologies that are 
  resilient, meaningful, and future ready.`,
];

const ourDescriptionDesktop2 = [
  "ANVI is powered by a diverse team of engineers, scientists, designers, storytellers, and innovators who share a common purpose — to build technology that creates meaningful impact. Our strength lies not just in individual expertise, but in how we collaborate across disciplines to solve complex challenges with clarity and conviction.",
  "Each team member brings a unique perspective, combining technical depth with creative thinking and a strong sense of responsibility. From robotics and space systems to immersive media and lifestyle design, our teams work with precision, curiosity, and long-term vision. United by trust, ownership, and ambition, the ANVI team is committed to engineering solutions that are resilient, ethical, and future-ready.",
];

const ourDescriptionMobile2 = [
  `ANVI is powered by a diverse team of engineers, scientists, designers, and innovators united by a purpose: 
  building technology with meaningful impact.`,

  `Our strength comes from cross-disciplinary collaboration, technical depth, and long-term vision as we 
  engineer resilient and ethical solutions for the future.`,
];

const cultureCards = [
  {
    id: 1,
    title: "Innovate with Purpose",
    image: "/images/careers/career6.1.png",
    description:
      "We believe innovation should create real impact. At Anvi, every idea starts with purpose—designing intelligent systems that make cities safer, smarter, and more sustainable.",
  },
  {
    id: 2,
    title: "Collaborate to Grow",
    image: "/images/careers/career6.2.jpg",
    description:
      "Great ideas grow stronger together. Our people bring diverse skills and perspectives that fuel creativity, teamwork, and progress—helping us build better, together.",
  },
  {
    id: 3,
    title: "Lead with Integrity",
    image: "/images/careers/career6.3.png",
    description:
      "Integrity is at the heart of everything we do. We act with honesty, responsibility, and transparency—earning trust through every action and decision.",
  },
];

const Careers = () => {
  return (
    <div id="careers" className="w-full bg-[#FFFFFF]">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/videos/Heroo5_org.mp4"
        title="Engineer the Future With Us"
        description="At Anvi, we're building tomorrow's technology today - and we want visionaries like 
            you to join us in creating the next generation of intelligent systems."
        descriptionWidth="600px"
      />

      {/* Section 2 */}
      <section className="w-full flex flex-col md:flex-row gap-10 items-center px-5 md:px-[60px] 2xl:px-[100px] py-[60px] md:py-[100px] bg-[#FFFFFF]">
        {/* Left Content */}
        <div className="md:max-w-[506px] 2xl:max-w-[650px] pr-10">
          <p className="text-[18px] text-[#5C5D5E] font-medium">ANVI CAREERS</p>
          <h2 className="text-[#100000] font-medium text-[30px] md:text-[40px] lg:text-[46px] leading-[57px] my-2">
            Together, We Build What’s Next
          </h2>
          {/* <div className="h-[2px] lg:h-[4px] w-10 bg-[#282828]"></div> */}
          <p className="mt-4 mb-6 text-[16px] text-[#100000] font-regular leading-[30px]">
            At Anvi, innovation starts with people. We build intelligent systems
            for smarter, safer cities and sustainability. Join us to create
            technology that empowers lives and shapes tomorrow.
          </p>
          <Link
            to={pagesLinksObj.Career_Openings}
            className="link-bg-icon1 text-[14px] w-[180px]"
          >
            <span>Browse Openings</span>
            <i className="rotate-45">{IconsObj.arrow}</i>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 h-full ">
          <img
            src="/images/careers/career.webp"
            alt="Careers"
            className="w-full h-full md:h-[390px] object-cover rounded-lg"
          />
        </div>
      </section>

      <GradientText
        ourTitle="Our Culture"
        para="Built on curiosity, responsibility, and the courage to engineer what’s next."
        ourDescription={ourDescriptionDesktop}
        mobileDescription={ourDescriptionMobile}
        className="bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF]"
      />

      {/* Section 4 Life at Anvi*/}
      <div className="mb-10">
        <SectionWithImage
          title="Life At Anvi"
          description="Life at Anvi is about more than work - it’s about purpose, growth, and collaboration. Here, innovation thrives, ambitious ideas take shape, and every individual contributes to meaningful impact. With a culture that values teamwork, learning, and sustainability, Anvi is where talent transforms into progress and the future is engineered together."
          points={[
            "Collaborative and innovative work environment",
            "Competitive compensation and benefits",
            "Professional development opportunities",
            "Work-life balance and flexible arrangements",
            "Mentorship and career growth programs",
          ]}
        />
      </div>

      <GradientText
        ourTitle="Our Team"
        gradientTitle="The People Behind the Innovation."
        para="A collective of engineers, creators, and thinkers shaping the future together."
        ourDescription={ourDescriptionDesktop2}
        mobileDescription={ourDescriptionMobile2}
      />

      {/* Team Picture */}
      <section className="px-10 lg:px-[60px] overflow-hidden">
        <div className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[90vh] py-5 sm:py-6 md:py-10 lg:py-16 px-4">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <img
              src="/images/careers/team.jpg"
              alt="Our Team"
              className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[28px] lg:rounded-[32px] max-md:object-contain"
              draggable={false}
            />
          </div>

          {/* Overlay Card */}
          <div className="absolute inset-0 flex items-end justify-center z-10">
            <div
              className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] 
              bg-[#FFFFFF] backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-[32px] 
              px-5 py-6 sm:px-8 sm:py-7 md:px-12 md:py-9 lg:px-16 lg:py-12
              translate-y-3 sm:translate-y-5 md:translate-y-10"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#100000] text-center font-medium leading-[37px]">
                The Core Values That Shape Everything We Do
              </p>
            </div>
          </div>
        </div>
      </section>

      <ul className="px-5 md:px-[60px] xl:px-[100px] flex flex-col md:flex-row justify-center md:gap-4 lg:gap-16 py-6 md:py-20 lg:py-24 text-center">
        {cultureCards.map((card) => (
          <li key={card.id} className="flex flex-col items-center gap-2 group">
            {/* IMAGE / FLIP WRAPPER */}
            <div className="relative w-full max-w-[400px] md:max-w-[250px] lg:max-w-[290px] aspect-[4/3] h-[220px]">
              {/* FLIP CARD — only active on lg+ */}
              <div
                className="
                  relative w-full h-full
                  lg:transition-transform lg:duration-700 lg:ease-in-out
                  lg:[transform-style:preserve-3d]
                  lg:group-hover:[transform:rotateY(180deg)]
                "
              >
                {/* FRONT — IMAGE */}
                <div
                  className="
                    absolute inset-0 rounded-[12px] overflow-hidden
                    [backface-visibility:hidden]
                  "
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />

                  {/* DARK OVERLAY + TEXT (mobile & md only) */}
                  <div
                    className="
                      absolute inset-0 flex items-center justify-center px-5
                      bg-black/50 text-white
                      text-[14px] font-medium leading-relaxed
                      lg:hidden
                    "
                  >
                    {card.description}
                  </div>
                </div>

                {/* BACK — DESCRIPTION (lg+ only) */}
                <div
                  className="
                    absolute inset-0 rounded-[12px]
                    hidden lg:flex items-center justify-center px-6
                    bg-[#100000] text-white
                    text-[14px] font-medium leading-relaxed
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  {card.description}
                </div>
              </div>
            </div>

            {/* TITLE — NEVER FLIPS */}
            <h2 className="text-[18px] text-[#100000] font-medium">
              {card.title}
            </h2>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};

export default Careers;
