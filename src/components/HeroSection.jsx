import { Link } from "react-router-dom";
import { HeroBackgroundSVG } from "./HeroBackgroundSVG";
import React from "react";
import { IconsObj } from "../utils/Iconify_icons";

const HeroSection = ({
  backgroundImage,
  title,
  description,
  page = "",
  buttonText,
  buttonLink,
  descriptionWidth,
}) => {
  // Detect if background is a video
  const isVideo = backgroundImage?.endsWith(".mp4");
  // const [button]

  return (
    <section className="w-full h-[calc(100vh-100px)] m-auto overflow-hidden flex justify-start align-top relative">
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

        {/* Reusable white curve component */}
        <HeroBackgroundSVG />
      </div>

      {/* Hero Content */}
      <div
        className="home-hero-content sticky z-10 w-full flex flex-col justify-start align-middle gap-[16px] font-['Wix_Madefor_Display'] max-md:p-3 ml-[2vw] md:ml-[30px] lg:ml-[4vw] mt-[30px] md:mt-[40px] lg:mt-[11vh]"
      >
        {page === "home" ? (
          <h1 className="text-[36px] md:text-[56px] w-max bg-gradient-to-r from-[#FE842B] to-[#CD0054] bg-clip-text text-transparent font-[600]" style={{width: "max-content"}}>
            Engineering Your{" "}
            <span className="whitespace-nowrap">
              Edge <span className="-ml-3 max-md:px-1">™</span>
            </span>
          </h1>
        ) : (
          <h1 className="text-[36px] w-max lg:w-full lg:text-[56px] bg-gradient-to-r from-[#FE842B] to-[#CD0054] bg-clip-text text-transparent font-[600] leading-tight"
          style={{width: "max-content"}}>
            {title}
          </h1>
        )}

        <p
          style={{
            width: window.innerWidth >= 768 ? descriptionWidth : "auto",
          }}
          className="max-md:max-w-[600px] max-md:w-auto text-base font-normal leading-6 text-black pr-2"
        >
          {description}
        </p>
        {buttonText && buttonLink && (
          <Link
            to={buttonLink} 
            className="link-bg-icon hero-section-button w-max text-[16px] min-w-[170px] mt-[16px]"
            
          >
            
            {buttonText}
             <i className="rotate-45">{IconsObj.arrow}</i>
          </Link>
        )}

         
      </div>
    </section>
  );
};

export default HeroSection;