import { ContentCardUl } from "../components/ContentCardUl";
import CareerAndGrowth from "../components/CareersAndGrowth";
import Initiatives from "../components/Initiatives";
import Footer from "../components/footer";
import GradientText from "../components/GradientText";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/TimelineSection";
import { mainPagesLinksList } from "../data/PagesLinkList";
 

const footerUpBoxInfoObj = {
   head: `Ready to explore the future with Anvi?`,
  //head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const aboutCardList = [
  {
    title: "Our Mission",
    desc: [
      "At ANVI, our mission is to use technology as a force of transformation. We believe engineering should elevate people, improve systems, and shape a better future for generations to come. Through robotics, space innovation, creative storytelling, and lifestyle design, we build solutions that unlock human potential and bring progress closer to everyday life.",
      "We aim to go beyond product creation - challenging limitations, redefining industries, and making advanced technology accessible to all. By combining research, engineering, and creativity, we develop purposeful solutions that drive long-term growth. Our commitment is to build ethical, sustainable, and human-centric innovation that empowers communities, strengthens industries, and shapes the future of tomorrow."
    ],
    imgUrl: "/images/about/mission.webp",
  },
  {
    title: "Our Vision",
    desc: [
      "Our vision at ANVI is to become a global leader in deep-technology innovation, shaping industries and inspiring future generations through engineering, science, and creativity. We imagine a world where robotics, space technology, creative communication, and lifestyle design work together to build smarter, safer, and more sustainable systems for humanity. We aim to redefine how technology is created, experienced, and integrated into everyday life, expanding possibilities for businesses and communities.",
      "Through continuous research, ethical practices, and human-centric thinking, our vision is to engineer not just the future we imagine, but the future the world genuinely needs - driving lasting progress and inspiring change everywhere."
    ],
    imgUrl: "/images/about/about2.1.webp",
  },
  {
    title: "Our Value",
    desc: [
      "At ANVI, our values shape every idea and decision we make. Innovation drives us—we push boundaries, explore possibilities, and treat curiosity as a way of thinking. Engineering excellence guides our work, ensuring precision, reliability, and lasting impact. We act with transparency and integrity, building trust with teams, partners, and communities. Human-centric thinking inspires us to design technology that serves people and improves life.",
      "We value sustainability and create solutions that respect our planet and future generations. Collaboration fuels progress as we unite engineering, creativity, science, and strategy to solve challenges together. Above all, we value purpose - using technology to elevate humanity and turn ambitious ideas into real progress."
    ],
    imgUrl: "/images/about/value.webp",
  },
];

const ourDescription = [
  "ANVI is a future-focused deep-tech organisation built on the belief that engineering can rewrite what humanity is capable of. From robots that solve ground-level operational problems to space technologies that take us beyond earth, ANVI exists to create products and systems that move industries, societies, and individuals forward.",

  "The foundation of ANVI is rooted in three core pillars: Engineering Excellence, Strategic Innovation, and Societal Purpose.",

  "In every vertical we touch, our goal is not just to build products — we build technological ecosystems that accelerate global progress."
];


const About = () => {
  return (
    <div id="about" className="w-full bg-[#FFFFFF] overflow-hidden">
      {/* Hero Section */}
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
         ourDescription={ourDescription}
        />    
      </div>
  

      {/* section 3 -> Vision, Mission, Value Section*/}
      <section className="">
        <ContentCardUl infoList={aboutCardList} />
      </section>

      {/* section 4 -> Purpose*/}
      <section className="relative px-5 md:px-[60px] py-[100px] md:py-[102px]">
        <div className="flex flex-col md:flex-row">
          <img 
            src="/images/about/anvi.png"
            alt="Anvi Entrance"
            className="w-full h-[300px] md:w-[450px] md:h-auto pr-0 md:pr-14 mb-10 md:mb-0"
          />
          <div className="flex flex-col justify-center items-start md:items-start text-left">
            <h2 className="font-medium text-[32px] md:text-[36px] lg:text-[43px]">Our journey began with a bold purpose</h2>
            <p className="font-medium text-[16px] md:text-[18px] text-[#3D3D3D] py-8">ANVI began with the belief that technology should evolve beyond products and shape how humanity lives, works, and explores. What started as engineering excellence grew into a deep-tech ecosystem spanning robotics, space, creative media, and lifestyle innovation - expanding what technology can mean for people and the planet.</p>
            <p className="font-medium text-[16px] md:text-[18px] text-[#3D3D3D]">Today, ANVI operates at the intersection of science, creativity, and engineering, building purposeful, resilient, and future-ready systems that turn challenges into possibilities.</p>

            <div className="flex flex-cols-3 gap-4 md:gap-10 pt-10">
              <div>
                <h2 className="font-medium text-[40px] md:text-[55px] lg:text-[70px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">4</h2>
                <p className="font-semibold text-[14px] md:text-[18px] text-[#100000]">Core Verticals</p>
              </div>
              <div>
                <h2 className="font-medium text-[40px] md:text-[55px] lg:text-[70px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">8+</h2>
                <p className="font-semibold text-[14px] md:text-[18px] text-[#100000]">Industry Sectors</p>
              </div>
              <div>
                <h2 className="font-medium text-[40px] md:text-[55px] lg:text-[70px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">1 <span className="text-[24px] md:text-[30px] lg:text-[47px]">Purpose</span></h2>
                <p className="font-semibold text-[14px] md:text-[18px] text-[#100000]">Engineering Your Edge</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="w-full bg-[#F9FAFB] px-5 lg:px-[60px] py-[100px]">
        {/* Heading Section */}
        <div className="  sm:flex-row md:flex-row items-center justify-center text-clip">
          <div className="mt-0 2xl:mt-[20px] max-w-[1161px] text-center text-[#100000] mx-auto ">
            <p className="w-full max-md:text-center leading-[50.569px] text-[32px] md:text-[46px] font-medium">
              What Makes ANVI Different
            </p>
            <p className="w-full text-center justify-center mt-6 px-0 lg:px-[130px] text-[18px] md:text-[20]">
              ANVI stands apart not by what we build, but how we build  combining science, creativity, and human-centric design to create technology that truly transforms lives, industries, and our shared future.
            </p>
          </div>
        </div>

        {/* Image Grid Section   */}
        <div className="w-full flex flex-col gap-6 mt-[50px] lg:mt-[60px] 2xl:mt-[100px]">
          {/* Row 1: Large + Small */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-6">
            {/* Large Card */}
             <div className="relative group px-6 py-6 overflow-hidden rounded-3xl md:rounded-[46px] bg-[#FFFFFF] content-center h-full ">
              <div className="sm:mx-20  md:mx-10 mb-5 md:mb-10">
                  <h3 className="text-[22px] md:text-[25px] text-[#100000] font-medium">
                    Technological Excellence
                  </h3>
                  <p className="text-[15px] text-[#100000] font-regular mt-2">
                    Robotics engineered with precision and innovation        
                  </p>
              </div>
              <div className="md:object-cover sm:mx-20  md:mx-10 content-center h-[240px] lg:h-[440px]">
                <img
                  loading="lazy"
                  src="/images/about/about3.1.webp"
                  alt="Strategic Focus"
                  className=" rounded-3xl md:rounded-[37px] object-cover h-full  w-full content-center  "
                />
              </div>
              </div>

            {/* Small Card */}
            <div className="relative group px-6 py-6 overflow-hidden rounded-3xl md:rounded-[46px] bg-[#FFFFFF] content-center h-full ">
              <div className="sm:mx-20  md:mx-10 mb-5 md:mb-10">
               <h3 className="text-[22px] md:text-[25px] text-[#100000] font-medium">
                  Strategic Focus
                </h3>
                <p className="text-[15px] text-[#100000] font-regular mt-2">
                 Solutions addressing real challenges with impact and scalability
                </p>
              </div>
              <div className="md:object-cover sm:mx-20  md:mx-10 content-center h-[240px] lg:h-[440px]">
                <img
                  loading="lazy"
                  src="/images/about/about3.2.webp"
                  alt="Strategic Focus"
                  className="rounded-3xl md:rounded-[37px] object-cover h-full  w-full content-center"
                />
              </div> 
            </div>
          </div>

          {/* Row 2: Small + Large */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr] gap-6">
            {/* Small Card */}
            <div className="relative group px-6 py-6 overflow-hidden rounded-3xl md:rounded-[46px] bg-[#FFFFFF] content-center h-[370px] md:h-full ">
              <div className="sm:mx-20  md:mx-10 mb-5 md:mb-10">
                <h3 className="text-[22px] md:text-[25px] text-[#100000] font-medium">
                 Collaborative Approach
                </h3>
                <p className="text-[15px] text-[#100000] font-regular mt-2">
                  Progress through partnerships driving collective growth
                </p>
              </div>
              <div className="md:object-cover sm:mx-20  md:mx-10 content-center h-[240px] lg:h-[440px]">
                <img
                  loading="lazy"
                  src="/images/about/about3.3.webp"
                  alt="Strategic Focus"
                 className="rounded-3xl md:rounded-[37px] object-cover h-full  w-full content-center"
                />
              </div>            
            </div>

            {/* Large Card          */}
            <div className="relative group px-6 py-6 overflow-hidden rounded-3xl md:rounded-[46px] bg-[#FFFFFF] content-center h-[370px] md:h-full ">
              <div className="sm:mx-20  md:mx-10 mb-5 md:mb-10">
                <h3 className="text-[22px] md:text-[25px] text-[#100000] font-medium">
                  Impact-Driven Solutions
                </h3>
                <p className="text-[15px] text-[#100000] font-regular mt-2">
                   Designing systems for measurable impact
                </p>
              </div>
              <div className="md:object-cover sm:mx-20  md:mx-10 content-center h-[240px] lg:h-[440px]">
                <img
                  loading="lazy"
                  src="/images/about/about3.4.webp" 
                  alt="Strategic Focus"
                  className="rounded-3xl md:rounded-[37px] object-cover h-full  w-full content-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* careers and growth */}
      <CareerAndGrowth/>

      {/*section 4*/}
      <div className="relative w-full py-20 px-8 md:px-20 lg:px-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start">
          {/* Section Heading */}
          

      
<div className="md:sticky md:top-[120px] lg:sticky  self-start">
  <h2 className="text-[32px] md:text-[46px] font-medium leading-[54.7px] text-[#100000] mb-[27px]">
    Our Journey of Innovation
  </h2>
  <p className="text-[16px] md:text-[18px] font-medium text-[#323232]">Shaping the Future, Step by Step</p>
  <p className="text-[16px] md:text-[18px] font-medium text-[#323232]">
Shaping the Future, Step by Step.
From our first prototypes to large-scale deployments, every milestone reflects our vision to engineer meaningful innovation.
  </p>
</div>
 
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.6px] rounded-full top-0 h-full mt-[5px] w-[2px] bg-gradient-to-b from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054]">
              <div className="w-1 h-2 bg-blue-600 sticky top-10"></div>
            </div>

            {/* Timeline Section Component */}
            <TimelineSection />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};

export default About;