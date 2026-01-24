import { Link } from "react-router-dom";
import { IconsObj } from "../utils/Iconify_icons";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import { PravikayaInitiative } from "../components/Home/Pravikaya_Initiative";
import SectionWithImage from "../components/SectionWithImage";
import { pagesLinksList } from "../data/PagesLinkList";
import GradientText from "../components/GradientText";
 

 
const footerUpBoxInfoObj = {
  head: "Looking for the Right Job ?",
  para: "Join Anvi to explore ambitious ideas, work with breakthrough technologies, and build a career that creates real impact.",
  linkLabel: "Browse Openings",
  link: pagesLinksList.Career_Openings,
  //  link: pagesLinksList.Career_Openings+"#job-openings-container",
};

const ourDescription = [
  "At ANVI, culture is not a set of rules  it is how we think, build, and collaborate every day. We bring together engineers, designers, scientists, creators, and problem-solvers who share a deep respect for innovation and purpose. Curiosity drives us to question the obvious, ownership empowers us to build boldly, and collaboration ensures every idea grows stronger through collective thinking.",

  "We value experimentation over fear, learning over ego, and impact over noise. Our teams are encouraged to think long-term, act responsibly, and design with empathy  knowing that the technologies we build today will shape the world tomorrow. At ANVI, culture is our foundation, enabling us to create systems that are resilient, meaningful, and future-ready."
];

const ourDescription2 = [
  "ANVI is powered by a diverse team of engineers, scientists, designers, storytellers, and innovators who share a common purpose — to build technology that creates meaningful impact. Our strength lies not just in individual expertise, but in how we collaborate across disciplines to solve complex challenges with clarity and conviction.",
  "Each team member brings a unique perspective, combining technical depth with creative thinking and a strong sense of responsibility. From robotics and space systems to immersive media and lifestyle design, our teams work with precision, curiosity, and long-term vision. United by trust, ownership, and ambition, the ANVI team is committed to engineering solutions that are resilient, ethical, and future-ready."
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
        descriptionWidth="680px"
      />

      {/* <section className="px-2 md:px-6 lg:px-[118px] py-8 sm:py-12 md:py-[100px]">
        <div className="flex flex-col items-center text-center gap-[16px] font-['Wix_Madefor_Display'] mb-[76px]">
          <p className="text-[#000000] text-4xl sm:text-4xl md:text-4xl lg:text-[48px] font-normal">
            {cards.title}
          </p>
          <p className="text-black text-[16px] font-normal max-w-[495px]">
            {cards.desc}
          </p>
        </div>
        <div className="font-dm-sans font-normal grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-[67.39px]">
          {
            cards.map((card, index) => {
              return (
                <div key={card+index+2}>
                  <div className="w-full h-[200px] sm:h-[250px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
                    <img
                      loading="lazy"
                      src={card.img}
                      alt="Team"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <h1 className="mt-8 font-normal text-[24px]">
                    {card.title}
                  </h1>
                  <p className="mt-3 text-[16px] text-[#484848] leading-[1.6] text-justify">
                    {card.desc}
                  </p>
                </div>
              )
            })
          }


          {/* Card 1 */}
          {/* <div>
          <div className="w-full h-[200px] sm:h-[250px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
            <img
              loading="lazy"
              src={cards[0].img}
              alt="Team"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <h1 className="mt-8 font-normal text-[24px]">
           {cards[0].title}
          </h1>
          <p className="mt-3 text-[16px] text-[#484848] leading-[1.6] text-justify">
           {cards[0].desc}
          </p>
        </div> */}

          {/* Card 2 */}
          {/* <div>
          <div className="w-full h-[200px] sm:h-[250px] md:w-[500px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
            <img
              loading="lazy"
              src= {cards[1].img}
              alt="Team"
               className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <h1 className="mt-[32px] font-normal text-[24px]">
            {cards[1].title}
          </h1>
          <p className="mt-[11px] text-[16px] text-[#484848] text-justify">
            {cards[1].desc}
          </p>
        </div> */}

          {/* Card 3 */}
          {/* <div>
          <div className="w-full h-[200px] sm:h-[250px] md:w-[500px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
            <img
              loading="lazy"
              src={cards[2].img}
              alt="Team"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <h1 className="mt-[32px] font-normal text-[24px]">
            {cards[2].title}
          </h1>
          <p className="mt-[11px] text-[16px] text-[#484848] text-justify">
            {cards[2].desc}
          </p>
        </div> */}

          {/* Card 4 */}
          {/* <div>
          <div className="w-full h-[200px] sm:h-[250px] md:w-[500px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
            <img
              loading="lazy"
              src={cards[3].img}
              alt="Team"
               className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <h1 className="mt-[32px] font-normal text-[24px]">
           {cards[3].title}
          </h1>
          <p className="mt-[11px] text-[16px] text-[#484848] text-justify">
            {cards[3].desc}
          </p>
        </div> /} //commment

        </div>
      </section> */}

      {/* Section 2 */}
      <section className="relative w-full h-[100vh] md:max-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="/images/careers/career.webp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* background overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.62)] w-full h-full" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center p-[20px] md:p-[30px] lg:p-[50px]">
          <div className="p-6 sm:p-8 md:p-10 pr-10 lg:pr-[180px] bg-[#FFFFFF] max-w-[680px] rounded-lg">
            <p className="text-[18px] text-[#5C5D5E] font-medium">ANVI CAREERS</p>

            <h2 className="text-[#100000] font-medium text-[30px] md:text-[40px] lg:text-[46px] leading-[57px] my-2">
              Together, We Build What’s Next
            </h2>

            {/* <div className="h-[2px] lg:h-[4px] w-10 bg-[#282828]"></div> */}

            <p className="mt-4 mb-6 text-[14px] text-[#282828] font-regular">
              At Anvi, innovation starts with people. We build intelligent systems
              for smarter, safer cities and sustainability. Join us to create
              technology that empowers lives and shapes tomorrow.
            </p>

            <Link to={pagesLinksList.Career_Openings} className="link-bg-icon1 text-[14px] w-[180px]">
              Browse Openings <i className="rotate-45">{IconsObj.arrow}</i>
            </Link>
          </div>
        </div>
      </section>

      <GradientText 
        ourTitle ="Our Culture"
        para="Built on curiosity, responsibility, and the courage to engineer what’s next."
        ourDescription = {ourDescription}
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
      {/*
      <section className="px-4 sm:px-6 md:px-[123px] py-8 sm:py-12 md:py-[80px]">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-[80px] mb-8 sm:mb-10 md:mb-[60px]">
          <p className="text-[46px] leading-[56px] text-[#121212] font-['Wix_Madefor_Display'] font-medium text-center md:text-left">
            Great Team <br /> Build Great Things
          </p>

          <p className="w-full md:w-[520px] text-[18px] leading-[28px] font-dm-sans text-[#484848] font-normal text-center md:text-left">
            Driven by passion and purpose, our people transform bold ideas into
            deep-tech innovations that shape industries and communities.
          </p>
        </div> 

        
        <div className="w-full">
          <img
            loading="lazy"
            src="images/careers/career4.png"
            alt="Team"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Pravikaya Initiative 
      <PravikayaInitiative />*/}
      <GradientText 
        ourTitle="Our Team"
        gradientTitle="The People Behind the Innovation."
        para="A collective of engineers, creators, and thinkers shaping the future together."
        ourDescription= {ourDescription2}
      />
      
      {/* Team Picture */}
      <section className="px-10 lg:px-[60px] overflow-hidden">
        <div className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[90vh] py-5 sm:py-6 md:py-10 lg:py-16">

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
            <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] 
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 p-6 md:p-20 lg:p-24 text-center">
        {cultureCards.map((card) => (
          <div key={card.id} className="flex flex-col items-center gap-2 group">

            {/* IMAGE / FLIP WRAPPER */}
            <div className="relative w-[250px] lg:w-[290px] h-[220px] [perspective:1200px]">

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

          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};
 
export default Careers;