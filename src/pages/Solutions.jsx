import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import FeaturedSolutionsCardBox from "../components/Solutions/FeaturedSolutionsCardBox";
import { mainPagesLinksList } from "../data/PagesLinkList";

const footerUpBoxInfoObj = {
  head: "Ready to Transform Your Operations with Anvi",
  para: "Discover how our solutions can transform your industry, driving efficiency, safety, and innovation with sustainable, compliant outcomes for a smarter, future-ready business.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

export const Solutions = () => {
  return (
    <div id="solutions" className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/solutions/solutions.webp"
        title="Our Solutions"
        description="From Robotics to Space, Anvi transforms industries with intelligent automation and advanced technology."
        buttonText="About Us"
        buttonLink={mainPagesLinksList.AboutUs}
        descriptionWidth="700px"
      />

      {/* Featured Solution */}
      <section className="w-full my-[30px] px-5 py-[50px] text-center xl:px-[118px] md:py-[60px] lg:py-[50px] font-['Wix_Madefor_Display']">
        <h2 className="text-[48px] mb-[16px] text-[#282828]">
          Featured Solution
        </h2>
        <p className="text-[16px] w-full md:w-[584px] m-auto text-[#4C4C4C] mb-[6px] font-[400] leading-[24px] text-center">
          Discover Anvi’s groundbreaking innovations that solve critical
          challenges and redefine what’s possible through intelligent
          automation.
        </p>

        {/* Featured Solutions Grid */}
        <FeaturedSolutionsCardBox />
      </section>

      {/* Why Our Solution Matter */}
      <section className="w-full bg-[#F4F3F7D1] mb-[100px]">
        <div className="w-full my-[20px] px-5 py-[50px] text-center xl:px-[118px] md:py-[60px] lg:py-[102px] font-['Wix_Madefor_Display']">
          <h2 className="text-[48px] mb-[16px] text-[#282828]">
            Why Our Solutions Matter
          </h2>
          <p className="text-[16px] w-full md:w-[752px] mx-auto text-[#4C4C4C] font-[400] leading-[24px] text-center">
            Our solutions address critical global challenges, empowering
            industries to innovate, enabling societies to thrive, and shaping a
            smarter, sustainable future.
          </p>
        </div>

        {/* Why */}
        <div className="relative w-screen max-w-[1300px] mx-auto">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              loading="lazy"
              src="images/careers/career3.1.png"
              alt="Team working"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col max-md:place-items-center md:flex-row px-[20px] md:px-[50px] lg:px-[160px] py-[70px] gap-[100px] max-lg:gap-[20px]">
            {/* Left Box */}
            <div className="bg-[#0A879EE5] text-white px-[40px] py-[80px] rounded-2xl max-w-md">
              <h2 className="text-2xl font-bold mb-2 uppercase">Why?</h2>
              <span className="block w-[269px] h-[6px] bg-[#1E9AB0] mb-2"></span>
              <p className="text-[15px] leading-relaxed">
                Our solutions create meaningful impact across industries and
                society. They safeguard people and assets, optimize operations,
                promote responsible practices, ensure compliance with standards,
                and drive continuous innovation — empowering businesses and
                communities to thrive today while shaping a smarter, more
                resilient tomorrow.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-fit font-inter text-[20px] font-normal leading-[20px] justify-center text-white gap-4">
              <p>Safety-Protecting people and assets.</p>
              <span className="block w-full h-[1px] bg-white"></span>

              <p>Efficiency – Doing more with less, faster.</p>
              <span className="block w-full h-[1px] bg-white"></span>

              <p>
                Sustainability – Responsible solutions for a better tomorrow.
              </p>
              <span className="block w-full h-[1px] bg-white"></span>

              <p>Compliance – Meeting standards, exceeding expectations.</p>
              <span className="block w-full h-[1px] bg-white"></span>

              <p>Innovation – Driving progress through new ideas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </div>
  );
};
