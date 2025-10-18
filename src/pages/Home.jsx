import { Link } from "react-router-dom";
import { mainPagesLinksList } from "../data/PagesLinkList";
import { HomeIndustriesCard } from "../components/Home/Home_Industries_Cards";
import Footer from "../components/footer";
import { PravikayaInitiative } from "../components/Home/Pravikaya_Initiative";
import HeroSection from "../components/HeroSection";
import Button from "../utils/Button";

const footerUpBoxInfoObj = {
  head: "Ready to explore the future with Anvi?",
  para: "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const nextAtAnvi = {
  robotics: {
    imgUrl: "/images/home/robo_img.jpg",
    title: "Anvi Robotics",
    desc: "Witness the global launch of Anvi's Surveillance Robot on 30 June 2025...",
    link: mainPagesLinksList.Robotics,
  },
  space: {
    imgUrl: "/images/home/space.png",
    title: "Anvi Space",
    desc: "At Anvi Space, we design technologies expanding humanity’s reach.",
    link: mainPagesLinksList.Space,
  },
};

const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/videos/home-hero-video.webp"
          title="Engineering Your Edge ™"
          description="We build breakthrough products, deep-tech systems, and future-proof solutions that redefine industries and empower societies."
          descriptionWidth="700px"
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
        <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[102px] font-['Wix_Madefor_Display'] bg-[#F4F3F7]">
          <h2 className="text-[48px] mb-[16px] text-[#282828]">
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
        <section className="next-at-anvi w-full px-5 py-[50px] text-center xl:px-[118px] md:py-[80px]">
          <h2 className="text-[48px] mb-[16px] text-[#282828] font-['Wix_Madefor_Display']">Next At {" "}
            <span className="text-[53px] font-bauhaus">
              anvi
            </span>
          </h2>
          <p className="text-[18px] text-[#4C4C4C] mb-[30px] md:mb-[64px] font-[400] leading-[24px] text-center font-['Wix_Madefor_Display']">
            At anvi, our engineers don’t work by the clock - they work by
            vision.
          </p>
          
          <div className="px-10 w-full m-auto mb-[50px] grid sm:grid-cols-1 md:grid-cols-2 gap-[20px] py-4">
            {Object.keys(nextAtAnvi).map((each) => (
              <div
                key={nextAtAnvi[each].title}
                className="relative w-full max-w-[480px] group mx-auto overflow-hidden"
              >
                {/* Image */}
                <img
                  src={nextAtAnvi[each].imgUrl}
                  alt={nextAtAnvi[each].title}
                  className="w-full h-[320px] md:h-[500px] object-cover object-"
                />

                <div className="absolute inset-0 bg-transparent group-hover:bg-[linear-gradient(179.68deg,rgba(0,0,0,0.33)_0.32%,rgba(0,0,0,0.94)_69.93%)] transition-all duration-300"></div>

                {/* Overlay container */}
                <div className="absolute bottom-0 left-0 w-full px-5 pb-5 flex flex-col items-start">
                  {/* Title (always visible) */}
                  <span className="text-white text-[22px] font-semibold font-dm-sans block">
                    {nextAtAnvi[each].title}
                  </span>

                  {/* Description (hidden initially, slides down on hover) */}
                  <p className="text-[#FFFFFFE5] text-[22px] font-medium font-dm-sans max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 mt-2 text-left">
                    {nextAtAnvi[each].desc}
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* Read All Button */}
        <Button to={mainPagesLinksList.News} variant="secondary">
          Read all
        </Button>
        </section>

        {/* Pravikaya Initiative */}
        <div className="font-['Wix_Madefor_Display'] text-center mb-12">
          <p className="text-[46px]">
            <span className="text-[48px] font-bauhaus">anvi</span> social responsibility</p>
          <p className="text-[18px] text-[#4C4C4C]">Empowering young innovators through learning, <br/> fellowship, and real-world opportunities</p>
        </div>
        <PravikayaInitiative />
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};

export default Home;
