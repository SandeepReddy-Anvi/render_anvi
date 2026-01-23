import React from "react";
import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";
import { mainPagesLinksList, pagesLinksList } from "../data/PagesLinkList";
import { HomeIndustriesCard } from "../components/Home/Home_Industries_Cards";
import Footer from "../components/footer";
import InitiativeSection from "../components/Initiatives";
import { PravikayaInitiative } from "../components/Home/Pravikaya_Initiative";
import HeroSection from "../components/HeroSection";
import { IconsObj } from "../utils/Iconify_icons";
import LiveVideo from "../components/Home/LiveVideo";
const footerUpBoxInfoObj = {
  head: `Ready to explore the future with Anvi?`,
  //head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};
 
/* const nextAtAnvi = {
  robotics: {
    imgUrl: "/images/home/robo_img.jpg",
    title: "Surveillance Robot",
    desc: "Witness the global launch of Anvi’s Surveillance Robot, an advanced innovation under Anvi Robots, engineered to deliver intelligent security, autonomous monitoring, and precision performance. Launching on 26 January 2026.",
    link: mainPagesLinksList.Robotics,
  },
  Sewage: {
    imgUrl: "/images/solutions/solutionCard-2.png",
    title: "Sewage Cleaning Robot",
    desc: "Introducing Anvi’s Sewage Cleaning Robot under Bot Factory — an AI-powered system that predicts, prevents, and cures blockages through robotic automation, ensuring safe, efficient, and sustainable urban sanitation for smart cities.",
    link: mainPagesLinksList.Solutions,
  },
  space: {
    imgUrl: "/images/home/space.webp",
    title: "Anvi Space",
    desc: "Anvi Space is pioneering advanced space robotics and intelligent satellite systems to ensure sustainable orbital operations, extend mission lifetimes, reduce debris, and build a self-reliant future space ecosystem.",
    link: mainPagesLinksList.Space,
  },
}; */

const impactStats = [
  {
    label: "Robotics Automation",
    value: 92,
  },
  {
    label: "Space Research & Systems",
    value: 85,
  },
  {
    label: "Environmental & Clean-Tech Innovation",
    value: 89,
  },
  {
    label: "Digital Media (EVOX) & Immersive Tech",
    value: 74,
  },
];


 
const Home = () => {
  return (
    <>
      <main className="bg-[#FFFFFF]">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/videos/Heroo_org.mp4"
          title="Engineering Your Edge ™"
          description="We build breakthrough products, deep-tech systems, and future-proof solutions that redefine industries and empower societies."
          descriptionWidth="680px"
          page="home"
        />
 
        {/* Video Live Section */}
        {/* <section className="w-full px-5 md:px-[60px] py-[100px] text-center md:py-[102px] font-['Wix_Madefor_Display'] bg-[#F4F3F7]">
          <h2 className="text-[32px] md:text-[46px] font-medium text-[#282828] mb-[16px] px-5 md:px-[60px] text-center md:py-[30px] font-['Wix_Madefor_Display'] bg-[#F4F3F7]">
            ANVI Collective 2025 Live
          </h2>
          <LiveVideo />
        </section> */}
 
        {/* We Build */}
        <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[150px]">
          <img
            loading="lazy"
            src="/images/home/we-build.png"
            className="w-full h-auto"
            alt="we_build_img"
          />
          <p className="text-[20px] md:text-[23px] text-[#000000] mt-[25px] font-medium leading-[24px] text-center">
            Every leap forward begins with a bold idea. At ANVI, we don't just
            imagine the future{" "}
            <span className="hidden md:block h-0">
              <br />
            </span>{" "}
            we engineer it. Across every frontier, we build what tomorrow is
            made of.
          </p>
        </section>
        
        {/* Section3 -> About */}
        <section className="w-full h-full px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px] bg-[#F9FAFB]">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <img 
              src="/images/home/About.jpg"
              alt="Team"
              className="w-[720px] h-[250px] md:h-[350px] lg:h-[420px] rounded-[24px] object-cover"
            />
            <div className="w-full flex flex-col gap-4 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CD0054]"/>
                <p className="text-[14px] text-[#CD0054] font-medium">ABOUT US</p>
              </div>
              <h3 className="text-[34px] md:text-[38px] lg:text-[46px] text-[#100000] font-medium leading-tight">
                We are committed to engineering meaningful innovation.
              </h3>
              <p className="text-[18px] text-[#100000]">
                ANVI creates future-ready systems across robotics, space, media, and lifestyle combining science, engineering, and design to strengthen industries and shape a smarter world.
              </p>
              <Link to={pagesLinksList.AboutUs} className="link-bg-icon1 font-semibold text-[14px] w-[150px]">
                Learn More<i className="rotate-45">{IconsObj.arrow}</i>
              </Link>
            </div>
          </div>

          <div className="flex flex-cols-4 gap-4 md:gap-10 pt-10 px-0 md:px-10 lg:px-20 justify-between text-center">
            <div>
              <h2 className="font-medium text-[20px] md:text-[38px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">4</h2>
              <p className="font-medium text-[14px] md:text-[18px] text-[#100000]">Core Verticals</p>
            </div>
            <div>
              <h2 className="font-medium text-[20px] md:text-[38px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">8+</h2>
              <p className="font-medium text-[14px] md:text-[18px] text-[#100000]">Industry Sectors</p>
            </div>
            <div>
              <h2 className="font-medium text-[20px] md:text-[38px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">50+</h2>
              <p className="font-medium text-[14px] md:text-[18px] text-[#100000]">R&D Experiments</p>
            </div>
            <div>
              <h2 className="font-medium text-[20px] md:text-[38px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">1 Purpose</h2>
              <p className="font-medium text-[14px] md:text-[18px] text-[#100000]">Engineering Your Edge</p>
            </div>
          </div>
        </section>
        
        {/* Section 4 -> Impact */}
        <section className="w-full h-full px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px] bg-[#F9FAFB]">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="w-full flex flex-col gap-4 justify-center">
              {/* IMPACT label */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CD0054]" />
                <p className="text-[14px] text-[#CD0054] font-medium ">
                  IMPACT
                </p>
              </div>

              {/* Heading */}
              <h3 className="text-[34px] md:text-[38px] lg:text-[46px] text-[#100000] font-medium leading-tight max-w-[900px]">
                Delivering real-world engineering impact with measurable outcomes.
              </h3>

              {/* Progress bars */}
              <div className="flex flex-col gap-8 max-w-[550px] mt-2">
                {impactStats.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    {/* Label + Percentage */}
                    <div className="flex justify-between items-center text-[#292929] text-[18px] font-medium">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-[4px] bg-[#EAEAEA] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img 
              src="/images/home/impact.png"
              alt="Team"
              className="w-[720px] h-[250px] md:h-[450px] lg:h-[520px] rounded-[24px] object-cover my-0 md:my-auto lg:my-0"
            />
          </div>
        </section>
 
        {/* Section 5 -> Industries */}
        <section className="w-full px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px] text-center">
          <h2 className="text-[34px] md:text-[38px] lg:text-[46px] font-medium text-[#1000000] mb-4 md:mb-2">
            Industries We Transform
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#100000] font-[400] leading-[24px] max-w-[800px] mx-auto">
            From robotics to space exploration, we build advanced solutions that redefine the way industries function, innovate, and grow - driven by technology, precision, and vision.
          </p>
 
          {/* Industries Cards */}
          <HomeIndustriesCard />
        </section>
 
        {/* Next at Anvi */}
        <InitiativeSection />
 
        {/* Pravikaya Initiative */}
        <PravikayaInitiative />
      </main>
 
      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};
 
export default Home;
 
 