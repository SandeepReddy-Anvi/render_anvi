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
 
     
const cards = [
  {
    img: "/images/careers/career2.1.webp",
    title: "Innovate with Purpose",
    desc: "Work on breakthrough robotics and deep-tech innovations that go beyond boundaries, solving real-world challenges across industries and communities. At Anvi, you will explore ambitious ideas, design scalable systems, and collaborate with bright minds. Together, we shape industries of the future while driving safety, efficiency, and sustainability for people, businesses, and the planet.",
  },
  {
    img: "/images/careers/career2.2.webp",
    title: "Grow Without Limits",
    desc: "Explore ambitious ideas, embrace challenges, upskill continuously, collaborate with innovators, and build a career that grows, evolves, and scales with your limitless potential.",
  },
  {
    img: "/images/careers/career2.3.webp",
    title: "Collaborate & Belong",
    desc: "Be part of a culture that values teamwork, inclusion, respect, and diverse perspectives, where collaboration, creativity, and shared purpose drive excellence and meaningful progress.",
  },
  {
    img: "/images/careers/career2.4.webp",
    title: "Impact That Matters",
    desc: "Create solutions that drive industry progress, deliver measurable impact, and at the same time inspire communities while supporting sustainability for a smarter, safer, and better shared future.",
  },
];
 

const Careers = () => {
  return (
    <div id="careers" className="w-full">
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
      <section className="relative w-full h-[100vh]">
        <div className="absolute inset-0">
          <img
            src="/images/careers/career.png"
            className="w-full h-full object-cover"
          />
        </div>

        {/* background overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.62)] w-full h-full" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center p-[20px] md:p-[30px] lg:p-[50px]">
          <div className="p-6 sm:p-8 md:p-10 pr-10 lg:pr-[180px] bg-white max-w-[680px] rounded-lg">
            <p className="font-arial text-[19px] text-[#5C5D5E]">ANVI CAREERS</p>

            <h2 className="text-[#282828] font-['Wix_Madefor_Display'] font-medium text-[28px] md:text-[38px] lg:text-[44px]">
              Together, We Build What’s Next
            </h2>

            <div className="h-[2px] lg:h-[4px] w-10 bg-[#282828]"></div>

            <p className="my-6 text-[14px] text-[#282828] font-dm-sans font-regular">
              At Anvi, innovation starts with people. We build intelligent systems
              for smarter, safer cities and sustainability. Join us to create
              technology that empowers lives and shapes tomorrow.
            </p>

            <Link to={pagesLinksList.Career_Openings} className="w-[220px] link-bg-icon">
              Browse Openings <i className="rotate-45">{IconsObj.arrow}</i>
            </Link>
          </div>
        </div>
      </section>

      <GradientText 
        ourTitle ="Our Culture"
        gradientTitle ="Driven by Purpose. United by Passion."
        ourDescription = "At Anvi, culture is driven by curiosity, collaboration, and care. Diverse minds build meaningful innovation. Every voice matters as we create technology that improves lives and protects our planet."
      />

      {/* Section 4 Life at Anvi*/}
      <div className="mb-10">
        <SectionWithImage
          title="Life At Anvi"
          description="Life at Anvi is about more than work — it’s about purpose, growth, and collaboration. Here, innovation thrives, ambitious ideas take shape, and every individual contributes to meaningful impact. With a culture that values teamwork, learning, and sustainability, Anvi is where talent transforms into progress and the future is engineered together."
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
      
      <section className="px-10 lg:px-[60px] overflow-hidden">

        <GradientText 
          ourTitle="Our Team"
          gradientTitle="The People Behind the Innovation."
          ourDescription="At Anvi, our team powers every breakthrough. Engineers, designers, and creators turn bold ideas into intelligent systems, advancing cities, learning together, pushing limits, and shaping the future as one team."
        />

        <div className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] py-5 md:py-8 lg:py-16">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/careers/team.jpg"
              className="h-full w-full object-cover rounded-[20px] md:rounded-[30px]"
              alt="Our Team"
            />
          </div>

          {/* Overlay Card */}
          <div className="absolute inset-0 flex items-end justify-center md:translate-y-8 lg:translate-y-12">
            <div className="bg-white rounded-3xl shadow-md px-6 py-6 md:px-24 md:py-10 max-w-[700px] w-[90%] text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#222222] font-['Wix_Madefor_Display'] font-medium leading-snug">
                The Core Values That Shape Everything We Do
              </p>
            </div>
          </div>
        </div>
      </section>


      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-6 md:gap-28 p-6 md:p-20 lg:p-24 font-['Wix_Madefor_Display']">
        <div className="flex flex-col gap-4 text-[#282828] font-normal p-2">
          <h2 className="text-[26px] md:pr-8 lg:pr-10">Innovate with Purpose</h2>
          <p className="text-[14.4px]">We believe innovation should create real impact. At Anvi, every idea starts with purpose designing intelligent systems that make cities safer, smarter, and more sustainable.</p>
        </div>

        <div className="flex flex-col gap-4 text-[#282828] font-normal p-2">
          <h2 className="text-[26px] md:pr-8 lg:pr-10">Collaborate to Grow</h2>
          <p className="text-[14.4px]">Great ideas grow stronger together. Our people bring diverse skills and perspectives that fuel creativity, teamwork, and progress helping us build better, together.</p>
        </div>          

        <div className="flex flex-col gap-4 text-[#282828] font-normal p-2">
          <h2 className="text-[26px] md:pr-8 lg:pr-16">Lead with Integrity</h2>
          <p className="text-[14.4px]">Integrity is at the heart of everything we do. We act with honesty, responsibility, and transparency earning trust through every action and decision.</p>
        </div>
      </div>


      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};
 
export default Careers;