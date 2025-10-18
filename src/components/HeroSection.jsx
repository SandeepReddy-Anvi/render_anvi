import { Link } from "react-router-dom";
import { HeroBackgroundSVG } from "./HeroBackgroundSVG";

const HeroSection =
  ({
    backgroundImage,
    title,
    description,
    page = "",
    descriptionWidth,
  }) => {
    // console.log(backgroundImage);

    return (
      <section className="w-full h-[calc(100svh-100px)] m-auto overflow-hidden flex justify-start align-top relative">
        {/* REUSABLE BACKGROUND CONTAINER */}
        <div className="absolute scale-1 max-md:scale[1.1] max-md:p-[100px] top-0 left-0 w-full h-full z-1">
          <div className="w-full h-full absolute top-0 left-0 bg-black">
            <img
              loading="eager"
              src={backgroundImage}
              alt="Hero Background"
              className="w-full h-full object-center sm:object-left-top md:object-center object-cover max-md:scale-[1.2]"
            />
          </div>
          {/* 2. The Reusable White Curve Component */}
          <HeroBackgroundSVG />
        </div>

        {/* Hero Content */}
        <div
          style={{maxWidth: descriptionWidth}}
        className="home-hero-content sticky z-10 w-full md:max-w-[657px] flex flex-col justify-start align-middle gap-[16px] font-[Wix Madefor Display] max-md:px-3 ml-[2vw] md:ml-[30px] lg:ml-[4vw] mt-[50px] md:mt-[40px] lg:mt-[11vh]">
          {page === "home" ? (
            // for Home Page
            <h1 className="text-[48px] md:text-[56px] text-[#282828] font-[600]">
              Engineering Your{" "}
              <span className="whitespace-nowrap">
                Edge <span className="-ml-3 max-md:px-1">™</span>
              </span>
            </h1>
          ) : (
            // for Non-Home Pages
            <h1 className="text-[48px] w-[80%] lg:w-full md:text-[56px] text-[#282828] font-[600] leading-tight">
              {title}
            </h1>
          )}

          <p
            style={{ width: window.innerWidth >= 768 ? descriptionWidth : "auto" }}
            className="w-full max-md:max-w-[600px] text-[16px] font-[400] leading-[24px] text-black max-md:px-2 md:w-auto">
            {description}
          </p>
        </div>
      </section>
    );
  };

export default HeroSection;
