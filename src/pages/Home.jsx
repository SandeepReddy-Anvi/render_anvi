import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from 'lucide-react';
import { mainPagesLinksList, pagesLinksList } from "../data/PagesLinkList";
import { HomeIndustriesCard } from "../components/Home/Home_Industries_Cards";
import Footer from "../components/footer";
import { PravikayaInitiative } from "../components/Home/Pravikaya_Initiative";
import HeroSection from "../components/HeroSection";
import Button from "../utils/Button";

const footerUpBoxInfoObj = {
  head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const nextAtAnvi = {
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
    imgUrl: "/images/home/space.png",
    title: "Anvi Space",
    desc: "Anvi Space is pioneering advanced space robotics and intelligent satellite systems to ensure sustainable orbital operations, extend mission lifetimes, reduce debris, and build a self-reliant future space ecosystem.",
    link: mainPagesLinksList.Space,
  },
};

const Home = () => {
  return (
    <>
      <main> 
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/videos/Heroo_compr.mp4"
          title="Engineering Your Edge ™"
          description="We build breakthrough products, deep-tech systems, and future-proof solutions that redefine industries and empower societies."
          descriptionWidth="680px"
          page="home"
        />

        {/* We Build */}
        <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[150px] font-['Wix_Madefor_Display']">
          <img
            loading="lazy"
            src="/images/home/we-build.png"
            className="w-full h-auto"
            alt="we_build_img"
          />
          <p className="text-[22px] text-[#4C4C4C] mt-[25px] font-[400] leading-[24px] text-center">
            Every leap forward begins with a bold idea. At ANVI, we don't just imagine the future {" "}
            <span className="hidden md:block h-0">
              <br />
            </span>{" "}
            we engineer it. Across every frontier, we build what tomorrow is made of.
          </p>
        </section>

        {/* Industries */}
        <section className="w-full px-5 md:px-[60px] py-[100px] text-center xl:px-[100px] md:py-[102px] font-['Wix_Madefor_Display'] bg-[#F4F3F7]">
          <h2 className="text-[38px] sm:text-[48px] mb-[16px] text-[#282828]">
            Industries
          </h2>
          <p className="text-[18px] text-[#4C4C4C] mb-[64px] font-[400] leading-[24px] text-center">
            From robotics to space exploration, we’re creating advanced
            solutions that
            <span className="hidden md:block h-0">
              <br />
            </span>{" "}
            reshape how industries operate and innovate.
          </p>

          {/* Industries Cards */}
          <HomeIndustriesCard />
        </section>

        {/* Next at Anvi */}
        <section className="next-at-anvi w-full px-5 md:px-[60px] py-[50px] text-center xl:px-[100px] md:py-[80px]">
          <h2 className="text-[38px] sm:text-[48px] mb-[16px] text-[#282828] font-['Wix_Madefor_Display']">Next At {" "}
            <span className="text-[43px] sm:text-[53px] font-bauhaus">
              anvi
            </span>
          </h2>
          <p className="text-[18px] text-[#4C4C4C] mb-[30px] md:mb-[64px] font-[400] leading-[24px] text-center font-['Wix_Madefor_Display']">
            At anvi, our engineers don’t work by the clock - they work by vision. Relentlessly innovating, designing, and building what’s next. 'Next at anvi' is where tomorrow’s breakthroughs begin - and the future takes shape.
          </p>
          
          <div className="w-full m-auto md:mb-[50px] grid sm:grid-cols-1 md:grid-cols-2 gap-[20px] py-4">
            {/* Left big card */}
            <div className="flex flex-col justify-between h-full md:row-span-2 bg-[#F4F3F7] shadow rounded-2xl p-4 text-start">
              <div className="grid grid-cols-2 items-center">
                <p className="text-[39px] font-medium font-inter text-start">01</p>
                <a 
                  href={pagesLinksList.Robotics}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareArrowOutUpRight className="justify-self-end" />
                </a>
              </div>
              <span className="h-[2px] bg-[#00000066] my-1"></span>
              <div>
                <p className="font-semibold text-[19px] mt-2 font-['Wix_Madefor_Display']">Surveillance Robot</p>
                <p className="text-[#000000] mt-1 font-inter">
                  Anvi’s Surveillance Robot delivers intelligent security, autonomous monitoring,
                  and precision performance launching 30 June 2025.
                </p>
              </div>
              <img
                src="/images/home/robo_img.jpg"
                alt="Surveillance Robot"
                className="w-full h-[400px] md:h-full object-cover rounded-xl mt-3"
              />
            </div>

            {/* Right stacked cards */}
            <div className="grid grid-rows-2 gap-[20px]">
              <div className="bg-[#F4F3F7] shadow rounded-2xl p-4 flex flex-col justify-between text-start">
                <div className="grid grid-cols-2 items-center">
                  <p className="text-[39px] font-medium font-inter text-start">02</p>
                  <a 
                    href={pagesLinksList.Space}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SquareArrowOutUpRight className="justify-self-end" />
                  </a>
                </div>
                <span className="h-[2px] bg-[#00000066] my-1"></span>
                <div>
                  <p className="font-semibold text-[19px] mt-2 font-['Wix_Madefor_Display']">Anvi Space</p>
                  <p className="text-[#000000] mt-1 font-inter">
                    Anvi’s Galactica builds sustainable space systems through debris removal, recycling,
                    and future-ready infrastructure.
                  </p>
                </div>
                <img
                  src="/images/home/galactica.png"
                  alt="Anvi Space"
                  className="w-[528px] h-[211px] object-cover rounded-xl mt-3"
                />
              </div>

              <div className="bg-[#F4F3F7] shadow rounded-2xl p-4 flex flex-col justify-between text-start">
                <div className="grid grid-cols-2 items-center">
                  <p className="text-[39px] font-medium font-inter text-start">03</p>
                  <Link to={pagesLinksList.Solutions_Sewage}>
                    <SquareArrowOutUpRight className="justify-self-end" />
                  </Link>
                </div>
                <span className="h-[2px] bg-[#00000066] my-1"></span>
                <div>
                  <p className="font-semibold text-[19px] mt-2 font-['Wix_Madefor_Display']">Project Shudhi</p>
                  <p className="text-[#000000] mt-1 font-inter">
                    Project SHUDHI revolutionizes urban sanitation through AI-powered, autonomous,
                    and sustainable robotic cleaning systems.
                  </p>
                </div>
                <img
                  src="/images/solutions/solutionCard-2.png"
                  alt="Project Shudhi"
                  className="w-[528px] h-[211px] object-cover rounded-xl mt-3"
                />
              </div>
            </div>
          </div>


          {/* Read All Button 
        <Button to={mainPagesLinksList.News} variant="secondary">
          Read all
        </Button>*/}
        </section>

        {/* Pravikaya Initiative */}
        <div className="font-['Wix_Madefor_Display'] text-center mb-12">
          <p className="text-[38px] sm:text-[46px] mb-2">
            <span className="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span> social responsibility</p>
          <p className="text-[16px] sm:text-[18px] text-[#4C4C4C]">Empowering young innovators through learning, <br/> fellowship, and real-world opportunities</p>
        </div>
        <PravikayaInitiative />
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};

export default Home;
