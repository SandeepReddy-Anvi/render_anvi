import { Link } from "react-router-dom";
import { useState } from "react";
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
    image: "/images/careers/career6.1.jpg",
    description:
      "Build solutions that matter - not just technology for the sake of it, but innovations that create real-world impact and meaningful progress.",
  },
  {
    id: 2,
    title: "Collaborate to Grow",
    image: "/images/careers/career6.2.jpg",
    description:
      "Work together across teams, ideas, and disciplines to learn faster, build better, and grow as one unified ecosystem.",
  },
  {
    id: 3,
    title: "Lead with Integrity",
    image: "/images/careers/career6.3.jpg",
    description:
      "Act with honesty, accountability, and responsibility in everything we do  ensuring trust, transparency, and long-term value.",
  },
];

const Careers = () => {
  const [active, setActive] = useState(0);

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
          <div className="flex items-center gap-2 pb-4">
            <span className="w-6 h-[2px] bg-[#CD0054]" />
            <p className="text-[14px] text-[#CD0054] font-bold font-wix uppercase">
              ANVI CAREERS
            </p>
          </div>
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
        header="Our Culture"
        ourTitle="Built on curiosity, responsibility, and the courage to engineer what’s next."
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
        header="Our Team"
        ourTitle="A collective of engineers, creators, and thinkers shaping the future together."
        ourDescription={ourDescriptionDesktop2}
        mobileDescription={ourDescriptionMobile2}
      />

      {/* Team Picture */}
      <section className="w-full overflow-hidden">
        <div className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[90vh] py-5 sm:py-6 md:py-10 lg:py-16 px-4">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <img
              src="/images/careers/team.jpg"
              alt="Our Team"
              /* className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[28px] lg:rounded-[32px] max-md:object-contain" */
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col py-14 md:py-[100px] px-[20px] md:px-[60px] 2xl:px-[100px]">

        <div className="flex items-center gap-2 pb-4">
          <span className="w-6 h-[2px] bg-[#CD0054]" />
          <p className="text-[14px] text-[#CD0054] font-bold font-wix uppercase">
            Our Core Values
          </p>
        </div>
        <h2 className="text-[#100000] font-medium text-[30px] md:text-[40px] lg:text-[46px] leading-[57px] my-2">
          The Core Values That Shape Everything We Do
        </h2>

        <div className="w-full flex lg:flex-cols-2 gap-10 items-center py-6 hidden lg:flex">

          {/* LEFT */}
          <div className="w-[65%] shrink-0">
            {cultureCards.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActive(index)}
                className={`flex gap-6 items-start p-8 border-b border-[#CBCBCB] transition-all duration-300 cursor-pointer
                ${active === index ? "bg-[#F5F5F7]" : "bg-transparent"}
              `}
              >
                {/* NUMBER */}
                <h1 className="font-medium font-wix text-[#CBCBCB] text-[40px] md:text-[48px] lg:text-[58px] text-gray-300 font-light w-[60px]">
                  {String(item.id).padStart(2, "0")}
                </h1>

                {/* CONTENT */}
                <div className="border-l-[1.5px] border-[#CBCBCB] px-6 ml-2">
                  <h2 className="text-[20px] md:text-[22px] font-semibold mb-2">
                    {item.title}
                  </h2>
                  <p className="font-medium text-[#4B4B4B] text-[18px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-center">
            <img
              src={cultureCards[active].image}
              alt="visual"
              className="w-full max-w-[420px] h-[420px] object-cover rounded-xl transition-all duration-500"
            />
          </div>
        </div>

        {/* mobile + tablet */}
        <div className="flex flex-col gap-10 lg:hidden px-4 py-6">
          {cultureCards.map((item, index) => (
            <div key={item.id} className="flex gap-4 items-stretch border-b border-[#CBCBCB] pb-6">

              {/* LEFT NUMBER + LINE */}
              <div className="flex w-[10%] shrink-0 h-auto items-center font-medium font-wix text-[#CBCBCB] text-[22px] md:text-[48px]">
                <h1 className="">
                  {String(item.id).padStart(2, "0")}
                </h1>
                {/* <div className="w-[2px] h-auto bg-[#CBCBCB]"></div> */}
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 border-l border-[#CBCBCB] pl-4">
                <h2 className="text-[18px] font-semibold mb-2 text-[#100000]">
                  {item.title}
                </h2>

                <p className="text-[14px] text-[#4B4B4B] leading-[20px] mb-4">
                  {item.description}
                </p>

                {/* IMAGE */}
                <div className="w-full h-[180px] md:h-[300px] object-cover rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};

export default Careers;
