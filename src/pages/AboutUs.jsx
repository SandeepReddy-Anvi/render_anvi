import { ContentCardUl } from "../components/ContentCardUl";
import CareerAndGrowth from "../components/CareersAndGrowth";
import Initiatives from "../components/Initiatives";
import Footer from "../components/footer";
import GradientText from "../components/GradientText";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/TimelineSection";
import { mainPagesLinksList } from "../data/PagesLinkList";
 

const footerUpBoxInfoObj = {
  head: `Ready to explore the future with <span class="text-[38px] sm:text-[48px] font-bauhaus leading-[27px]">anvi</span>?`,
  para: "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const aboutCardList = [
  {
    title: "Our Vision",
    desc: "At Anvi, our vision is to redefine industries through deep-tech innovation. We aim to build robotics and intelligent systems that not only enhance safety and efficiency but also ensure long-term sustainability. By blending advanced technologies with real-world applications, we aspire to shape a future where industries and communities thrive together.",
    imgUrl: "/images/about/about2.1.webp",
  },
  {
    title: "Our Mission",
    desc: "Our mission is to bridge traditional practices with advanced technologies. We design scalable solutions that empower industries to overcome critical challenges, improve operational efficiency, and deliver measurable impact. Every project we build is focused on creating value for businesses, protecting people, and enabling sustainable growth for future generation",
    imgUrl: "/images/about/mission.webp",
  },
  {
    title: "Our Value",
    desc: "At the heart of Anvi are values that guide everything we do. We believe in Innovation First, always pushing boundaries to deliver new possibilities. Our work is Impact Driven, ensuring real benefits for industries and communities. With Integrity as our foundation, we uphold transparency and responsibility in every solution. Our commitment to Sustainability ensures that our technologies protect both people and the planet, while Collaboration reminds us that progress is best achieved together.",
    imgUrl: "/images/about/value.webp",
  },
];

const About = () => {
  return (
    <div id="about" className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/videos/Heroo2_org.mp4"
        title="We Engineer It."
        description="At Anvi, we don’t just build robots - we build the future. Our mission is to deliver strategic 
        advantage through breakthrough products, deep-tech systems, and future-proof solutions."
        
        descriptionWidth="450px"
      />
      <div className=" items-center justify-center content-center"> 
       

        <GradientText
         ourTitle="About Us"
        gradientTitle="Engineering Tomorrow. Empowering Today."
        ourDescription=" Every leap forward begins with a bold idea. At Anvi, we don’t just imagine the future - we engineer it. We build intelligent systems that make cities smarter, safer, and more connected. For us, innovation isn’t just about what’s next - it’s about creating impact today."
    At
        />    
      </div>
  

      {/* section 2 */}
      {/* Vision, Mission, Value Section */}
      <section className="relative w-screen h-full   bg-[#FCFCFC] font-dm-sans from-white to-gray-50">
        <ContentCardUl infoList={aboutCardList} />
      </section>

      {/* section 3 */}
      <section className="w-full bg-gradient-to-b from-[#F4F3F7] to-[#FCFCFC] px-8 lg:px-20 py-[100px]">
        {/* Heading Section */}
        <div className="  sm:flex-row md:flex-row items-center justify-center   font-dm-sans text-clip">
          <div className="   max-w-[1161px] text-center mx-auto ">
            <p className="w-full max-md:text-center  text-center text-[#121212] font-normal leading-[50.569px] text-3xl sm:text-3xl md:text-4xl lg:text-[42px]">
              Where Innovation Meets Purpose
            </p>
            <p className="w-full  text-center justify-center ">
              At Anvi, transforming bold ideas into impactful technologies that
              empower industries, inspire communities, and create a sustainable
              future.
            </p>
          </div>
        </div>

        {/* Image Grid Section   */}
        <div className="flex flex-col gap-6 mt-[50px] lg:mt-[107.03px]">
          {/* Row 1: Large + Small */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-6">
            {/* Large Card */}
             <div className="relative group  p-2 overflow-hidden rounded-2xl shadow-xl h-[351px]  content-center  ">
               <h3 className="text-[30px] font-dm-sans font-normal  text-center">
                Technological Excellence
                </h3>
                <p className="text-sm font-urbanist font-light text-center mb-3">
Robotics engineered with precision and innovation                </p>
        <div className="md:object-cover sm:mx-20  md:mx-10 content-center  ">
                  <img
                loading="lazy"
     src="/images/about/about3.1.webp"
                alt="Strategic Focus"
                 className=" rounded-3xl object-cover h-[240px]  w-full content-center  "
              />

                </div>
                  
              
            </div>

            {/* Small Card */}
       <div className="relative group  p-2 overflow-hidden rounded-2xl shadow-xl h-[351px]  content-center  ">
               <h3 className="text-[30px] font-dm-sans font-normal  text-center">
                  Strategic Focus
                </h3>
                <p className="text-sm font-urbanist font-light text-center mb-3">
                 Solutions addressing real challenges with impact and scalability
                </p>
        <div className="md:object-cover sm:mx-20  md:mx-10 content-center  ">
                  <img
                loading="lazy"
                src="/images/about/about3.2.webp"
                alt="Strategic Focus"
                 className=" rounded-3xl object-cover h-[240px]  w-full content-center  "
              />

                </div>
                  
             
            </div>
          </div>

          {/* Row 2: Small + Large */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr] gap-6">
            {/* Small Card */}
    <div className="relative group  p-2 overflow-hidden rounded-2xl shadow-xl h-[351px]  content-center  ">
               <h3 className="text-[30px] font-dm-sans font-normal  text-center">
        Collaborative Approach
                </h3>
                <p className="text-sm font-urbanist font-light text-center mb-3">
             Progress through partnerships driving collective growth
                </p>
        <div className="md:object-cover sm:mx-20  md:mx-10 content-center  ">
                  <img
                loading="lazy"
             src="/images/about/about3.3.webp"
                alt="Strategic Focus"
                 className=" rounded-3xl object-cover h-[240px]  w-full content-center  "
              />

                </div>
                  
             
            </div>

            {/* Large Card          */}
            <div className="relative group  p-2 overflow-hidden rounded-2xl shadow-xl h-[351px]  content-center  ">
               <h3 className="text-[30px] font-dm-sans font-normal  text-center">
                Impact-Driven 
Solutions
                </h3>
                <p className="text-sm font-urbanist font-light text-center mb-3">
            Designing systems for measurable impact
                </p>
        <div className="md:object-cover sm:mx-20  md:mx-10 content-center  ">
                  <img
                loading="lazy"
              src="/images/about/about3.4.webp" 
                alt="Strategic Focus"
                 className=" rounded-3xl object-cover h-[240px]  w-full content-center  "
              />

                </div>
                  
              
            </div>
          </div>
        </div>
      </section>
{/* careers and growth */}
<CareerAndGrowth/>
 <Initiatives/>
      {/*section 4*/}
      <div className="relative w-full py-20 px-8 md:px-20 lg:px-32 font-dm-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start">
          {/* Section Heading */}
          <div className="md:sticky md:top-[120px] self-start">
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
            <div className="absolute left-[1.6px] rounded-full top-0 h-full mt-[5px] w-1 bg-[#1E9AB066]">
              <span className="w-1 h-2 bg-blue-600 sticky top-10"></span>
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
