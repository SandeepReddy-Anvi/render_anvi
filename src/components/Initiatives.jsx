"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { FaArrowRight } from "react-icons/fa";

const scrollItems = [
  {
    title: "Anvi’s Surveillance Robot",
    description:
      "Delivering intelligent security, autonomous monitoring, and precision performance redefining how cities stay safe. Launching March 2026.",
    img_1: "/images/about/surveillance.webp",
    img_2: "/images/home/surveillance_outdoor.png",
  },
  {
    title: "Anvi’s Galactica",
    description:
      "Building sustainable space systems through debris removal, recycling, and future-ready infrastructure - powering a cleaner, smarter orbital future.",
    img_1: "/images/home/space-galactica.png",
    img_2: "/images/home/galactica-logo.webp",
  },
  {
    title: "Project SHUDH",
    description:
      "Revolutionizing urban sanitation through AI-powered, autonomous, and sustainable robotic cleaning systems - ensuring safety, precision, and dignity for all.",
    img_1: "/images/solutions/sewage/sewage3.1.webp",
    img_2: "/images/about/project_shudh.webp",
  },
];

const InitiativeSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-188%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "72vw"]);
  const arrowScroll = useTransform(scrollYProgress, [0, 1], ["0%", "70vw"]);

  return (
    <>
      {/* On Scroll Component */}
      <div
        ref={containerRef}
        className="relative w-full h-auto md:h-[300vw] flex items-center justify-center md:items-start"
      >
        {/* Sticky Wrapper */}
        <div className="w-auto sticky top-[100px] lg:top-[calc(100vh-651px)] overflow-hidden flex items-start">
          {/* Desktop Scroll Ul Box */}
          <motion.ul
            style={{ x: xScroll }}
            className="w-max max-md:hidden flex flex-col md:flex-row flex-nowrap gap-x-[20px] gap-y-[20px] md:gap-y-[180px] md:gap-[120px] mb-[80px] items-center md:px-[80px] max-md:px-[20px] max-lg:pr-[120px] lg:px-[100px] transition-transform ease-linear duration-200"
          >
            {scrollItems.map((item, index) => (
              <li
                key={index}
                className="w-full relative flex-shrink-0 flex flex-row place-content-center gap-[20px] md:gap-[40px] mx-auto"
              >
                <div className="w-full max-w-[631px]">
                  <img
                    src={item.img_1}
                    alt={item.title}
                    className="w-full lg:max-w-[631px] lg:max-h-[80vh] xl:max-w-[631px] aspect-square h-auto rounded-[12px] object-cover"
                    draggable={false}
                  />
                </div>

                {/* Right Image+Content Box */}
                <div className="w-full max-w-max relative flex max-md:items-center">
                  <div className="w-full max-w-[531px] mt-[30px] lg:mt-[6%] xl:mt-[60px] 2xl:mt-[100px]">
                    <h5 className="text-[20px] md:text-[24px] text-[#100000] font-semibold">
                      {item.title}
                    </h5>
                    <p className="mt-2 text-[16px] text-[#100000] font-[400] leading-[24px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Image Box */}
                  <div
                    className="absolute w-auto max-md:hidden
                    md:bottom-[-80px] lg:bottom-[40px] xl:bottom-[40px]
                    md:left-[-110px] lg:left-[-110px] xl:left-[-100px]"
                  >
                    <img
                      src={item.img_2}
                      alt={item.title + "_2"}
                      className="w-full max-w-[50vw] aspect-[16/9] h-auto rounded-[12px] object-fit
                        md:max-w-[350px] lg:max-w-[350px] xl:max-w-[490px] 2xl:max-w-[500px]"
                      draggable={false}
                    />
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>

          {/* Mobile Ul Box */}
          <ul className="w-full md:w-max flex md:hidden flex-col flex-wrap gap-x-[20px] gap-y-[60px] md:gap-y-[20px] items-center px-[20px] pb-[100px]">
            {scrollItems.map((item, index) => (
              <li
                key={index}
                className="w-full relative flex-shrink-0 flex flex-col-reverse place-content-center gap-[20px] md:gap-[40px] mx-auto"
              >
                <div className="w-full md:max-w-[631px]">
                  <img
                    src={item.img_1}
                    alt={item.title}
                    className="w-full aspect-square h-auto rounded-[12px] object-cover"
                    draggable={false}
                  />
                </div>

                {/* Right Image+Content Box */}
                <div className="w-full md:max-w-max relative flex max-md:items-center">
                  <div className="w-full max-w-[531px]">
                    <h5 className="text-[20px] md:text-[24px] text-[#100000] font-semibold">
                      {item.title}
                    </h5>
                    <p className="mt-2 text-[16px] text-[#100000] font-[400] leading-[24px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Image Box */}
                  <div
                    className="absolute w-auto max-md:hidden
                    md:bottom-[-80px] lg:bottom-[40px] xl:bottom-[40px]
                    md:left-[-110px] lg:left-[-110px] xl:left-[-100px]"
                  >
                    <img
                      src={item.img_2}
                      alt={item.title + "_2"}
                      className="w-full max-w-[50vw] aspect-[16/9] h-auto rounded-[12px] object-cover
                        md:max-w-[350px] lg:max-w-[350px] xl:max-w-[490px] 2xl:max-w-[500px]"
                      draggable={false}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Fixed Arrow Box */}
          <div
            className="absolute max-md:hidden bottom-[5px] lg:bottom-[110px]
            left-[70px] lg:left-[110px] xl:left-[9vw] 2xl:left-[18vw]"
          >
            <div className="relative w-auto">
              <div className="sticky z-[5]">
                <motion.span
                  className="w-[64px] h-[64px] grid place-content-center rounded-full bg-[#FA293E] shadow-xl"
                  style={{
                    x: arrowScroll,
                    outline: "2px solid #FA293E",
                    outlineOffset: "4px",
                  }}
                >
                  <FaArrowRight color="white" className="w-[20px] h-auto" />
                </motion.span>
              </div>

              {/* Scroll HR Line */}
              <div className="absolute max-md:hidden bottom-[30px] lg:bottom-[30px] left-0 w-[100%] h-[1px] z-[4]">
                <motion.div
                  style={{
                    width: lineWidth,
                    background:
                      "linear-gradient(to right, #FE7F2C, #FF4A3A, #FA293E, #CD0054)",
                  }}
                  className="h-full shadow-[0_0_10px_#FA293E]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitiativeSection;
