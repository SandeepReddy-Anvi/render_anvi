import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import { mainPagesLinksList } from "../utils/PagesLinkList";

const footerUpBoxInfoObj = {
  head: "Ready to explore the future with Anvi?",
  para: "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const About = () => {
  return (
    <div id="about" className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/about/hero.png"
        title="We Engineer It."
        description="At Anvi, we don’t just build robots - we build the future. Our mission is to deliver strategic 
        advantage through breakthrough products, deep-tech systems, and future-proof solutions."
        buttonText="Explore Careers"
        buttonLink="#careers"
        descriptionWidth="700px"
      />

      {/* section 2 */}
      {/* Vision, Mission, Value Section */}
      <section className="relative w-full px-6 sm:px-10 lg:px-[100px] py-[80px] sm:py-[100px] bg-[#FCFCFC] font-dm-sans from-white to-gray-50">
        <div className="max-w-6xl mx-auto grid gap-[90px]">
          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[120px] items-center">
            <div>
              <h2 className="text-[48px] font-normal leading-[61.6px] tracking-[-1px] text-[#0D1F21] mb-[32px]">
                Our Vision
              </h2>
              <p className="text-[#0D1F21] text-[18px] font-normal">
                At Anvi, our vision is to redefine industries through deep-tech
                innovation. We aim to build robotics and intelligent systems
                that not only enhance safety and efficiency but also ensure
                long-term sustainability. By blending advanced technologies with
                real-world applications, we aspire to shape a future where
                industries and communities thrive together.
              </p>
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/about/about2.1.png"
                alt="Our Vision"
                className="w-[444px] h-[518px] object-cover"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[120px] items-center">
            <div className="order-2 md:order-1">
              <img
                loading="lazy"
                src="/images/about/mission.png"
                alt="Our Mission"
                className="w-[444px] h-[518px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[48px] font-normal leading-[61.6px] tracking-[-1px] text-[#0D1F21] mb-[32px]">
                Our Mission
              </h2>
              <p className="text-[#0D1F21] leading-relaxed">
                Our mission is to bridge traditional practices with advanced
                technologies. We design scalable solutions that empower
                industries to overcome critical challenges, improve operational
                efficiency, and deliver measurable impact. Every project we
                build is focused on creating value for businesses, protecting
                people, and enabling sustainable growth for future generation.
              </p>
            </div>
          </div>

          {/* Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[120px] items-center">
            <div>
              <h2 className="text-[48px] font-normal leading-[61.6px] tracking-[-1px] text-[#0D1F21] mb-[32px]">
                Our Value
              </h2>
              <p className="text-[#0D1F21] leading-relaxed">
                At the heart of Anvi are values that guide everything we do. We
                believe in Innovation First, always pushing boundaries to
                deliver new possibilities. Our work is Impact Driven, ensuring
                real benefits for industries and communities. With Integrity as
                our foundation, we strive for sustainability in every solution,
                fostering collaboration and building trust so that industries
                and societies can thrive together.
              </p>
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/about/value.png"
                alt="Our Value"
                className="w-[444px] h-[518px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <div className="w-full bg-gradient-to-b from-[#F4F3F7] to-[#FCFCFC] px-20 py-[100px]">
        {/* Heading Section */}
        <div className="flex-col sm:flex-row justify-center font-dm-sans">
          <div className="flex flex-row gap-6 pl-[33px] max-w-[1161px] flex-wrap">
            <p className="w-[583px] text-[#121212] font-normal leading-[50.569px] text-[42px]">
              Where <br /> Innovation Meets Purpose
            </p>
            <p className="flex-1 text-[#465455] font-normal leading-[28px] text-[16px]">
              At Anvi, transforming bold ideas into impactful technologies that
              empower industries, inspire communities, and create a sustainable
              future.
            </p>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="flex flex-col gap-6 mt-[107.03px]">
          {/* Row 1: Large + Small */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            {/* Large Card */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-[351px]">
              <img
                loading="lazy"
                src="/images/about/about3.1.png"
                alt="Technological Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1E1EE5] flex flex-col justify-end p-8 text-white">
                <h3 className="text-[30px] font-dm-sans font-normal mb-2">
                  Technological Excellence
                </h3>
                <p className="text-sm font-urbanist max-w-[340px]">
                  We engineer robotics and deep-tech solutions with precision,
                  innovation, and future-readiness at the core
                </p>
              </div>
            </div>

            {/* Small Card */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-lg h-[351px]">
              <img
                loading="lazy"
                src="/images/about/about3.2.png"
                alt="Strategic Focus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1E1EE5] flex flex-col justify-end p-8 text-white">
                <h3 className="text-[30px] font-dm-sans font-normal mb-2">
                  Strategic Focus
                </h3>
                <p className="text-sm font-urbanist font-light">
                  Our solutions are aligned with real industry challenges,
                  ensuring meaningful impact and scalability.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Small + Large */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
            {/* Small Card */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-[351px]">
              <img
                loading="lazy"
                src="/images/about/about3.3.png"
                alt="Collaborative Approach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1E1EE5] flex flex-col justify-end p-8 text-white">
                <h3 className="text-[30px] font-dm-sans font-normal mb-2">
                  Collaborative Approach
                </h3>
                <p className="text-sm font-urbanist font-light">
                  We believe progress comes through partnerships, uniting
                  visionaries, industries, and communities.
                </p>
              </div>
            </div>

            {/* Large Card */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-[351px]">
              <img
                loading="lazy"
                src="/images/about/about3.4.png"
                alt="Impact-Driven Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1E1EE5] flex flex-col justify-end p-8 text-white">
                <h3 className="text-[30px] max-w-[337px] font-dm-sans font-normal mb-2">
                  Impact-Driven Solutions
                </h3>
                <p className="text-sm max-w-[337px] font-urbanist font-light">
                  Every system we design delivers measurable outcomes - safety,
                  efficiency, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*section 4*/}
      <div className="relative w-full py-20 px-6 md:px-20 lg:px-32 font-dm-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start">
          {/* Section Heading */}
          <div className="pr-[40px] md:sticky top-[110px]">
            <h2 className="text-4xl font-normal text-[#1E2024] mb-[27px]">
              Our Journey of Innovation
            </h2>
            <p className="text-[#7B828E]">Shaping the Future, Step by Step</p>
            <p className="text-[#7B828E]">
              Subtext: From our first prototypes to large-scale deployments,
              every milestone reflects our vision to engineer meaningful
              innovation.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-11 rounded-full top-0 h-full w-1 bg-gray-200">
              <span className="w-2 h-2 bg-blue-600 sticky top-10"></span>
            </div>

            <div className="space-y-12">
              {/* 2020 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-right pr-8">
                  <span className="text-sm text-gray-400">2020</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Foundation of Anvi Robotics
                  </h3>
                  <p className="text-[#7B828E] text-[16px] font-normal mt-1">
                    Started with a vision to revolutionize industries through
                    deep-tech innovation
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-right pr-8">
                  <span className="text-sm text-gray-400">2022</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    First Surveillance Robot Launch
                  </h3>
                  <p className="text-[#7B828E] text-[16px] font-normal mt-1">
                    Deployed intelligent surveillance systems across multiple
                    installations, enabling real-time monitoring, threat
                    detection, and faster response.
                  </p>
                  <img
                    loading="lazy"
                    src="/images/about/about5.jpg"
                    alt="Surveillance Robot"
                    className="mt-4 rounded-lg shadow-lg w-full max-w-sm"
                  />
                </div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-right pr-8">
                  <span className="text-sm text-gray-400">2023</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    AROP White Paper Release
                  </h3>
                  <p className="text-[#7B828E] text-[16px] font-normal mt-1">
                    Published groundbreaking research on autonomous runway
                    operations.
                  </p>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 text-right pr-8">
                  <span className="text-sm text-gray-400">2024</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Multi-Industry Expansion
                  </h3>
                  <p className="text-[#7B828E] text-[16px] font-normal mt-1">
                    "Extended our solutions across 8+ industries globally,
                    driving innovation and delivering measurable impact through
                    intelligent systems that enhance safety, efficiency, and
                    sustainability."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer  footerUpBoxInfo={footerUpBoxInfoObj}/>
    </div>
  );
};

export default About;
