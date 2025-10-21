import { Link } from "react-router-dom";
import { HeroBackgroundSVG } from "./HeroBackgroundSVG";

const HeroSection = ({
  backgroundImage,
  title,
  description,
  page = "",
  descriptionWidth,
}) => {
  // Detect if background is a video
  const isVideo = backgroundImage?.endsWith(".mp4");

  return (
    <section className="w-full h-[calc(100svh-100px)] m-auto overflow-hidden flex justify-start align-top relative">
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
      {/* Hero Content */}
<div
  className="home-hero-content sticky z-10 w-full flex flex-col justify-start align-middle gap-[16px] font-['Wix_Madefor_Display'] max-md:px-3 ml-[2vw] md:ml-[30px] lg:ml-[4vw] mt-[50px] md:mt-[40px] lg:mt-[11vh]"
>
  {page === "home" ? (
    <h1 className="text-[48px] md:text-[56px] text-[#282828] font-[600]">
      Engineering Your{" "}
      <span className="whitespace-nowrap">
        Edge <span className="-ml-3 max-md:px-1">™</span>
      </span>
    </h1>
  ) : (
    <h1 className="text-[48px] w-[80%] lg:w-full md:text-[56px] text-[#282828] font-[600] leading-tight">
      {title}
    </h1>
  )}

  <p
    style={{
    width: window.innerWidth >= 768 
      ? descriptionWidth 
      : window.innerWidth < 440 
        ? "300px" // or specific width like "300px"
        : "auto",
  }}
    className="max-md:max-w-[600px] max-md:w-auto text-base font-normal leading-6 text-black max-md:px-2 sm:pr-[58px]"
  >
    {description}
  </p>
</div>

    </section>
  );
};

export default HeroSection;
