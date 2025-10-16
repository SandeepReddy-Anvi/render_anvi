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
          buttonText="Explore Solutions"
          buttonLink={mainPagesLinksList.Solutions}
          descriptionWidth="700px"
          page="home"
        />

        {/* We Build */}
        <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[102px] font-['Wix_Madefor_Display']">
          <h2 className="text-[48px] mb-[16px] text-[#282828]">
            Pioneering the Future of Deep-Tech
          </h2>
          <p className="text-[16px] text-[#4C4C4C] mb-[64px] font-[400] leading-[24px] text-center">
            At Anvi, we don't just build robots - we build the future. Our
            vision is to redefine{" "}
            <span className="hidden md:block h-0">
              <br />
            </span>{" "}
            industries with breakthrough innovations, deep-tech systems, and
            future-proof solutions across multiple sectors.
          </p>
          <img
            loading="lazy"
            src="/images/home/we-build.png"
            className="w-full h-auto"
            alt="we_build_img"
          />
        </section>

        {/* Transforming Industries */}
        <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[102px] font-['Wix_Madefor_Display'] bg-[#F4F3F7]">
          <h2 className="text-[48px] mb-[16px] text-[#282828]">
            Transforming Industries
          </h2>
          <p className="text-[16px] text-[#4C4C4C] mb-[64px] font-[400] leading-[24px] text-center">
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
        <section className="next-at-anvi w-full px-5 py-[50px] text-center xl:px-[118px] md:py-[80px] font-['Wix_Madefor_Display']">
          <h2 className="text-[48px] mb-[16px] text-[#282828]">Next At Anvi</h2>
          <p className="text-[16px] text-[#4C4C4C] mb-[30px] md:mb-[64px] font-[400] leading-[24px] text-center">
            At anvi, our engineers don’t work by the clock - they work by
            vision.
          </p>
          <div className="w-full m-auto mb-[50px] grid sm:grid-cols-1 md:grid-cols-2 max-lg:flex-col justify-center align-middle gap-[50px] py-4">
            {Object.keys(nextAtAnvi).map((each) => (
              <div
                key={nextAtAnvi[each].title}
                className="w-auto mx-auto h-auto px-5 py-10 hover:shadow-lg hover:shadow-gray-200 transition-all duration-200 max-w-[750px] bg-[#F4F3F7] rounded-[16px] grid sm:grid-cols-1 lg:grid-cols-2 justify-center place-items-center align-middle gap-[20px]"
              >
                <div className="w-full max-md:m-auto max-md:max-w-[350px] self-center md:max-w-[350px] lg:max-w-1/2 aspect-square md:aspect-[4/3] object-cover object-center rounded-[16px]">
                  <img
                    loading="lazy"
                    src={nextAtAnvi[each].imgUrl}
                    alt={nextAtAnvi[each].title + nextAtAnvi[each].imgUrl}
                    className="bg-cover w-full h-full rounded-[16px] object-cover object-center"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col w-full max-w-[450px] justify-start align-middle gap-[5px] text-left">
                  <span className="text-[12px] self-auto w-min whitespace-nowrap text-[#0D1F21] font-[400] min-w-[90px] px-[16px] py-[10px] font-[manrope] rounded-[400px] bg-[#EEFCFF]">
                    {nextAtAnvi[each].title}
                  </span>
                  <p className="font-[Dm sans] w-full text-[20px] font-[500] text-[#0D1F21]">
                    {nextAtAnvi[each].desc}
                  </p>
                  <Link
                    to={nextAtAnvi[each].link}
                    className="text-[#465455] text-[14px] max-md:my-3 font-[400] font-[Manrope] hover:font-bold self-start"
                  >
                    Read more
                  </Link>
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
        <PravikayaInitiative />
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};

export default Home;
