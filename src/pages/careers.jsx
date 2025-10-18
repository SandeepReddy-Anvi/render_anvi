import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import { PravikayaInitiative } from "../components/Home/Pravikaya_Initiative";
import SectionWithImage from "../components/SectionWithImage";
import { pagesLinksList } from "../data/PagesLinkList";


const footerUpBoxInfoObj = {
  head: "Looking for the Right Job ?",
  para: "Join Anvi to explore ambitious ideas, work with breakthrough technologies, and build a career that creates real impact.",
  linkLabel: "Browse Openings",
  link: pagesLinksList.Career_Openings,
};

const Careers = () => {
  return (
    <div id="careers" className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/careers/hero.png"
        title="Engineer the Future With Us"
        description="At Anvi, we're building tomorrow's technology today - and we want visionaries like 
            you to join us in creating the next generation of intelligent systems."
        buttonText="Browse Openings"
        buttonLink={pagesLinksList.Career_Openings}
        descriptionWidth="750px"
      />

      <section className="px-2 md:px-6 lg:px-[118px] py-8 sm:py-12 md:py-[100px]">
      <div className="flex flex-col items-center text-center gap-[16px] font-['Wix_Madefor_Display'] mb-[76px]">
        <p className="text-[#000000] text-[48px] font-normal">
          Reason to Join in Anvi
        </p>
        <p className="text-black text-[16px] font-normal max-w-[495px]">
          At Anvi, you'll find more than a career - you'll discover purpose,
          growth, collaboration, and impact
        </p>
      </div>
      <div className="font-dm-sans font-normal grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-[67.39px]">
        {/* Card 1 */}
        <div>
          <div className="w-full h-[200px] sm:h-[250px] md:w-[500px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
            <img
              loading="lazy"
              src="/images/careers/career2.1.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-[32px] font-normal text-[24px]">
            Innovate with Purpose
          </p>
          <p className="mt-[11px] text-[16px] text-[#484848]">
            Work on breakthrough robotics and deep-tech innovations that go
            beyond boundaries, solving real-world challenges across industries
            and communities. At Anvi, you will explore ambitious ideas, design
            scalable systems, and collaborate with bright minds. Together, we
            shape industries of the future while driving safety, efficiency,
            and sustainability for people, businesses, and the planet.
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <div className="w-full h-[200px] sm:h-[250px] md:w-[500px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
            <img
              loading="lazy"
              src="/images/careers/career2.2.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-[32px] font-normal text-[24px]">
            Grow Without Limits
          </p>
          <p className="mt-[11px] text-[16px] text-[#484848]">
            Explore ambitious ideas, embrace challenges, upskill continuously,
            collaborate with innovators, and build a career that grows,
            evolves, and scales with your limitless potential.
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <div className="w-full h-[200px] sm:h-[250px] md:w-[500px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
            <img
              loading="lazy"
              src="/images/careers/career2.3.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-[32px] font-normal text-[24px]">
            Collaborate & Belong
          </p>
          <p className="mt-[11px] text-[16px] text-[#484848]">
            Be part of a culture that values teamwork, inclusion, respect, and
            diverse perspectives, where collaboration, creativity, and shared
            purpose drive excellence and meaningful progress.
          </p>
        </div>

        {/* Card 4 */}
        <div>
          <div className="w-full h-[200px] sm:h-[250px] md:w-[500px] md:h-[310px] overflow-hidden rounded-lg bg-gray-100">
            <img
              loading="lazy"
              src="/images/careers/career2.4.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-[32px] font-normal text-[24px]">
            Impact That Matters
          </p>
          <p className="mt-[11px] text-[16px] text-[#484848]">
            Create solutions that drive industry progress, deliver measurable
            impact, and at the same time inspire communities while supporting
            sustainability for a smarter, safer, and better shared future.
          </p>
        </div>
      </div>
    </section>


      {/* Section 3 Life at Anvi*/}
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

      {/* Section 4*/}
      <section className="px-4 sm:px-6 md:px-[123px] py-8 sm:py-12 md:py-[80px]">
        {/* Text Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-[80px] mb-8 sm:mb-10 md:mb-[60px]">
          <p className="text-[46px] leading-[56px] text-[#121212] font-['Wix_Madefor_Display'] font-medium text-center md:text-left">
            Great Team <br /> Build Great Things
          </p>

          <p className="w-full md:w-[520px] text-[18px] leading-[28px] font-dm-sans text-[#484848] font-normal text-center md:text-left">
            Driven by passion and purpose, our people transform bold ideas into
            deep-tech innovations that shape industries and communities.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            loading="lazy"
            src="images/careers/career4.png"
            alt="Team"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Pravikaya Initiative */}
      <PravikayaInitiative />

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};

export default Careers;
