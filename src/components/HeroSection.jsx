import { Link } from "react-router-dom";
import { HeroBackgroundSVG } from "./HeroBackgroundSVG";
import React from "react";
import { IconsObj } from "../utils/Iconify_icons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HeroSection = ({
  backgroundImage,
  title,
  description,
  page = "",
  buttonText,
  buttonLink,
  descriptionWidth,
}) => {
  const isVideo = backgroundImage?.endsWith(".mp4");

  return (
    <section className="w-full h-[calc(100vh-80px)] lg:h-[calc(100vh-100px)] md:min-h-[600px] m-auto overflow-hidden flex justify-start align-top relative">
      {/* Background container */}
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <div className="w-full h-full absolute top-0 left-0 bg-black">
          {isVideo ? (
            <video
              src={backgroundImage}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center sm:object-left-top md:object-center max-md:scale-[1.2]"
            />
          ) : (
            <img
              loading="eager"
              src={backgroundImage}
              alt="Hero Background"
              className="w-full h-full object-cover object-center sm:object-left-top md:object-center max-md:scale-[1.2]"
            />
          )}
        </div>
        <HeroBackgroundSVG />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="home-hero-content sticky z-10 w-full flex flex-col justify-start align-middle gap-[16px] max-md:p-3 ml-[2vw] md:ml-[30px] lg:ml-[4vw] mt-[30px] md:mt-[40px] lg:mt-[11vh] xl:mt-[14vh]"
      >
        <div className="overflow-hidden">
          {page === "home" ? (
            <motion.h1
              variants={itemVariants}
              className="bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent font-[600] text-[36px] md:text-[46px] w-full lg:w-max break-words"
            >
              Engineering Your{" "}
              <span className="whitespace-nowrap">
                Edge <span className="-ml-3 max-md:px-1">™</span>
              </span>
            </motion.h1>
          ) : (
            <motion.h1
              variants={itemVariants}
              className="text-[36px] w-full lg:text-[46px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] bg-clip-text text-transparent font-[600] leading-tight lg:w-max break-words"
            >
              {title}
            </motion.h1>
          )}
        </div>

        <div className="overflow-hidden">
          <motion.p
            variants={itemVariants}
            style={{
              width: window.innerWidth >= 768 ? descriptionWidth : "auto",
            }}
            className="w-full max-md:max-w-[600px] max-md:w-auto text-[18px] font-wix font-regular leading-6 text-black pr-2"
          >
            {description}
          </motion.p>
        </div>

        {buttonText && buttonLink && (
          <div className="overflow-hidden mt-[16px]">
            <motion.div variants={itemVariants}>
              <Link
                to={buttonLink}
                className="link-bg-icon hero-section-button w-max text-[18px] min-w-[170px]"
              >
                {buttonText}
                <i className="rotate-45">{IconsObj.arrow}</i>
              </Link>
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;