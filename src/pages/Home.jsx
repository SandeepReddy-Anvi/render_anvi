import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { IconsObj } from "../utils/Iconify_icons";

import { mainPagesLinksObj, pagesLinksObj } from "../data/PagesLinkList";
import { HomeIndustriesCard } from "../components/Home/Home_Industries_Cards";
import InitiativeSection from "../components/InitiativesSection";
import { PravikayaInitiative } from "../components/Home/Pravikaya_Initiative";
import CoreCapabilities from "../components/CoreCapabilities";
import HeroSection from "../components/HeroSection";
import Footer from "../components/footer";
import { CountAnimOnScroll, SmartCountUp } from "../components/CountAnimOnScroll";

const footerUpBoxInfoObj = {
  head: `Let's Build the Future Together`,
  para: "Ready to transform your operations with cutting-edge robotics? Get in touch with our team of innovation experts.",
  linkLabel: "Contact Us",
  link: mainPagesLinksObj.ContactUs,
};

const tickerItems = [
  "Next-Gen R&D Programs",
  "Advanced Systems Engineering",
  "AI & Autonomous Technologies",
  "Space Robotics & Satellite Intelligence",
  "Intelligent Infrastructure",
];

const countList = [
  {
    head: "4",
    subtext: "Core Verticals",
  },
  {
    head: "8+",
    subtext: "Industry Sectors",
  },
  {
    head: "50+",
    subtext: "R&D Experiments",
  },
  {
    head: "1 Purpose",
    subtext: "Engineering Your Edge",
  },
];

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

const ProgressBar = ({ label, value, trigger }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (trigger) {
      setWidth(0); // ensure reset

      const id = requestAnimationFrame(() => {
        setWidth(value);
      });

      return () => cancelAnimationFrame(id);
    }
  }, [trigger, value]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center text-[#292929] text-[18px] font-medium">
        <span>{label}</span>
        <span><CountAnimOnScroll value={value} />%</span>
      </div>

      <div className="w-full h-[4px] bg-[#EAEAEA] rounded-full overflow-hidden">
        <div
          className="
            h-full rounded-full
            bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054]
            transition-[width] duration-1000 ease-out
          "
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Home = () => {
  const impactRef = useRef(null);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
          observer.disconnect(); // 🔥 run ONLY once
        }
      },
      { threshold: 0.5 }, // 30% visible
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="bg-[#FFFFFF] max-w-screen">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/videos/Heroo_org.mp4"
          title="Engineering Your Edge ™"
          description="We build breakthrough products, deep-tech systems, and future-proof solutions that redefine industries and empower societies."
          descriptionWidth="600px"
          page="home"
        />

        {/* We Build */}
        <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[110px]">
          <img
            loading="lazy"
            src="/images/home/we-build.png"
            className="w-full h-auto"
            alt="we_build_img"
          />
          <p className="text-[18px] md:text-[18px] text-[#000000] mt-[25px] font-medium text-center">
            Every leap forward begins with a bold idea. At ANVI, we don't just
            imagine the future{" "}
            <span className="hidden md:block h-0">
              <br />
            </span>{" "}
            we engineer it. Across every frontier, we build what tomorrow is
            made of.
          </p>
        </section>

        {/* Ticker Items */}
        <div className="w-full overflow-hidden">
          <div className="bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] py-4">
            <div
              style={{
                display: "flex",
                animation: "marquee 10s linear infinite",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  minWidth: "max-content",
                }}
              >
                {[...tickerItems, ...tickerItems].map((text, i) => (
                  <span
                    key={i}
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: 500,
                      padding: "0 32px",
                    }}
                  >
                    • {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {/* Section3 -> About */}
          <section className="w-full h-full px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px]">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
              <img
                src="/images/home/About.webp"
                alt="Team"
                className="w-[720px] h-[350px] lg:h-[420px] rounded-[24px] object-cover"
              />
              <div className="w-full flex flex-col gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#CD0054]" />
                  <p className="text-[14px] text-[#CD0054] font-bold font-wix">
                    ABOUT US
                  </p>
                </div>
                <h3 className="text-[34px] md:text-[38px] lg:text-[46px] text-[#100000] font-medium leading-[57px]">
                  We are committed to engineering meaningful innovation.
                </h3>
                <p className="text-[18px] text-[#100000]">
                  ANVI creates future-ready systems across robotics, space,
                  media, and lifestyle combining science, engineering, and
                  design to strengthen industries and shape a smarter world.
                </p>
                <Link
                  to={pagesLinksObj.AboutUs}
                  className="link-bg-icon1 font-semibold text-[14px] w-[150px]"
                >
                  <span>Learn More</span>
                  <i className="rotate-45">{IconsObj.arrow}</i>
                </Link>
              </div>
            </div>

            {/* Count Ul Box */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 lg:gap-[150px] pt-[60px] px-0 md:px-10 lg:px-20 justify-between text-center">
              {countList.map((each, index) =>
                <li key={each.head + index} className="w-max place-content-center mx-auto">
                  <h2 className="font-medium text-[20px] md:text-[40px] whitespace-nowrap bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent">
                    <SmartCountUp text={each.head} />
                  </h2>
                  <p className="font-medium text-[14px] md:text-[20px] text-[#100000] whitespace-nowrap">
                    {each.subtext}
                  </p>
                </li>
              )}
            </ul>
          </section>

          {/* Section 4 -> Impact */}
          <section
            ref={impactRef}
            className="w-full h-full px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px]"
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
              <div className="w-full flex flex-col gap-4 justify-center">
                {/* IMPACT label */}
                <div className="flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#CD0054]" />
                  <p className="text-[14px] text-[#CD0054] font-bold font-wix">
                    OUR IMPACT
                  </p>
                </div>

                {/* Heading */}
                <h3 className="text-[34px] md:text-[38px] lg:text-[46px] text-[#100000] font-medium leading-tight max-w-[900px]">
                  Delivering real-world engineering impact with measurable
                  outcomes.
                </h3>

                {/* Progress bars */}
                <div className="flex flex-col gap-8 max-w-[550px] mt-2">
                  {impactStats.map((item, index) => (
                    <ProgressBar
                      key={index}
                      label={item.label}
                      value={item.value}
                      trigger={animateBars}
                    />
                  ))}
                </div>
              </div>

              <img
                src="/images/home/impact.webp"
                alt="Team"
                className="w-[720px] h-[350px] md:h-[450px] lg:h-[520px] rounded-[24px] object-cover my-0 md:my-auto lg:my-0"
              />
            </div>
          </section>
        </div>

        {/* Section 5 -> Industries */}
        <section className="w-full py-[50px] md:py-[80px] text-center">

          <div className="flex items-center justify-center gap-2 pb-4">
            <span className="w-6 h-[2px] bg-[#CD0054]" />
            <p className="text-[14px] text-[#CD0054] font-bold font-wix">
              INDUSTRIES
            </p>
          </div>

          <h2 className="px-5 md:px-[60px] xl:px-[100px] text-[34px] md:text-[38px] lg:text-[46px] font-medium text-[#1000000] mb-4 md:mb-2">
            Industries We Transform
          </h2>
          <p className="md:px-[60px] xl:px-[80px] text-[16px] md:text-[18px] text-[#100000] font-[400] leading-[24px] max-w-[900px] mx-auto">
            From robotics to space exploration, we build advanced solutions that
            redefine the way industries function, innovate, and grow - driven by
            technology, precision, and vision.
          </p>

          {/* Industries Cards */}
          <div className="overflow-hidden home-indus-cards-container w-auto h-auto relative max-w-[1440px] mx-auto flex justify-center align-middle px-[0px] md:px-[20px] lg:px-[50px] pt-10 md:pt-16 lg:pt-20">
            <HomeIndustriesCard />
          </div>
        </section>

        {/* Next at Anvi */}
        <section className="w-screen relative h-auto max-w-[1461px] px-5 md:px-[60px] pt-[50px] xl:px-[100px] md:pt-[80px]">
          {/* Heading Content */}
          <div className="flex items-center gap-2 pb-4">
            <span className="w-6 h-[2px] bg-[#CD0054]" />
            <p className="text-[14px] text-[#CD0054] font-bold font-wix uppercase">
              Latest Innovation
            </p>
          </div>

          <div className="w-full max-w-[872px] text-[#100000] mb-[80px]">
            <h3 className="text-[32px] w-full md:text-[46px] font-medium mb-[24px]">
              Next at ANVI Shaping tomorrow with bold innovation.
            </h3>
          </div>
        </section>

        {/* Initiative Section */}
        <section className="px-5 md:px-[60px] xl:px-[100px]">
          {/* px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px]"> */}
          <InitiativeSection />
        </section>

        {/* Pravikaya Initiative */}
        <PravikayaInitiative />

        <CoreCapabilities />

        <section className="px-5 md:px-[100px] lg:px-[180px] py-[50px] md:py-[80px] flex flex-col gap-6">
          <img
            src="/images/home/quote.svg"
            className="w-[60px] h-[40px] md:w-[80px] md:h-[60px] lg:w-[100px] lg:h-[75px]"
          />
          <h2 className="font-inter font-medium text-[22px] md:text-[28px] lg:text-[30px] text-[#CD0054] leading-medium border-b border-[#DFDEE3] pb-10">
            “We are building a future where engineering goes beyond products -
            becoming a force that shapes industries, empowers people, and drives
            meaningful progress. <br />
            At ANVI, our vision is to unlock new possibilities through technology,
            combining innovation, purpose, and resilience to create systems that make
            a lasting impact on society and the world.”
          </h2>
          <div className="w-full flex items-center gap-4">
            <img
              src="favicon/192x192.png"
              className="w-[60px] h-[60px] rounded-full"
            />
            <div className="">
              <p className="font-bold text-[14px] uppercase">Anvi team</p>
              <p className="font-medium text-[14px]">Engineering Your Edge™</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};

export default Home;
