import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink
}) => {
  // console.log(backgroundImage);
  const [dimensions, setDimensions] = useState({ width: "100", height: "100" });
  
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // console.log(dimensions);
  
    useEffect(() => {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);
  
    useEffect(() => {
      // console.log(dimensions);
    }, [dimensions]);
  
    const responsiveHeroSvgStyle = (
      <>
        {/* desktop svg */}
        {dimensions.width > 767 && (
          <div className="w-[100vw] scale-125 max-md:scale-[1.8] max-md:translate-y-[-40%] md:scale-100 object-cover bg-center h-auto overflow-hidden absolute -z-5 right-0 md:left-0 bottom-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1438 550"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <clipPath id="image-shape">
                  <path d="M1438 549.5H0V474C44.0961 434.557 71.6097 415.971 124.5 387.5C209.167 335.338 265.558 318.978 363.5 286C458.221 265.486 511.459 254.846 607 240.5L913 204L1024 188.5C1109.08 174.129 1155.31 162.704 1235 136C1288.4 116.053 1315.55 101.964 1360 72L1395 44.5L1438 0V549.5Z" />
                </clipPath>
              </defs>

              {/* Hero Image */}
              <image
                href={backgroundImage}
                x="0"
                y="0"
                width={100}
                height={100}
                clipPath="url(#image-shape)"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <rect
                width="1438"
                height="550"
                fill="#0000007A"
                clipPath="url(#image-shape)"
              />
            </svg>
          </div>
        )}

        {/* mobile svg */}
        {dimensions.width <= 767 && (
          <svg
            className="w-screen h-screen sticky -z-1 md:hidden scale-125"
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            fill="none"
          >
            <defs>
              <clipPath id="image-shape2">
                <path d="M754.603 894L0 893.195V773.299C0 773.299 44.2928 669.324 133.673 588.224C226.573 503.93 365.55 442.098 412.337 426.163C484.995 402.559 504.103 386.377 573.498 353.796C694.393 266.964 719.033 114.742 754.603 0.5V894Z" />
              </clipPath>
            </defs>
            <image
              // href="/videos/home-hero-video.webp"
              href={backgroundImage}
              // xlinkHref="/videos/home-hero-video.webp"
              xlinkHref={backgroundImage}
              x="0"
              y="0"
              clipPath="url(#image-shape2)"
              preserveAspectRatio="xMidYMid slice"
              className="w-auto h-screen object-cover"
            />
            
          {/* Overlay */}
          <rect
            width={dimensions.width}
            height={dimensions.height}
            fill="#0000007A"
            clipPath="url(#image-shape)"
          />
          </svg>
        )}
      </>
    );

  return (
    <section className="w-[101vw] h-[calc(101dvh-106px)] overflow-hidden flex justify-start items-start relative">
      {/* Hero Content */}
      <div className="home-hero-content sticky z-10 w-full md:max-w-[657px] flex flex-col justify-start align-middle gap-[16px] font-[Wix Madefor Display] max-md:px-3 ml-[2vw] md:ml-[60px] lg:ml-[5vw] mt-[50px] md:mt-[60px] lg:mt-[11vh]">
        <h1 className="text-[48px] md:text-[56px] text-[#282828] font-[600] leading-tight">
          {title}
        </h1>

        <p className="w-full max-md:w-[85%] max-md:max-w-[600px] text-[16px] font-[400] leading-[24px] text-black max-md:px-2 md:w-auto">
          {description}
        </p>

        {buttonText && buttonLink && (
          <Link to={buttonLink} className="link-round-mid mt-[8px] max-md:px-2">
            {buttonText}
          </Link>
        )}
      </div>

      {/* Hero Background with Clip Path for desktop */}
      <div className="w-[100vw] max-md:hidden scale-125 max-md:scale-[1.8] max-md:translate-y-[-40%] md:scale-100 object-cover bg-center h-auto overflow-hidden absolute -z-5 right-0 md:left-0 bottom-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1438 550"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="image-shape">
              <path d="M1438 549.5H0V474C44.0961 434.557 71.6097 415.971 124.5 387.5C209.167 335.338 265.558 318.978 363.5 286C458.221 265.486 511.459 254.846 607 240.5L913 204L1024 188.5C1109.08 174.129 1155.31 162.704 1235 136C1288.4 116.053 1315.55 101.964 1360 72L1395 44.5L1438 0V549.5Z" />
            </clipPath>
          </defs>

          {/* Hero Image */}
          <image
            href={backgroundImage}
            x="0"
            y="0"
            width={100}
            height={100}
            clipPath="url(#image-shape)"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <rect
            width="1438"
            height="550"
            fill="#0000007A"
            clipPath="url(#image-shape)"
          />
        </svg>
      </div>

      {/* Hero Bg Container */}
        <div className="w-[100vw] scale-100 object-cover bg-center h-auto overflow-hidden absolute bottom-0 -z-5 right-0
            max-sm:translate-x-[0px] max-sm:translate-y-0
            max-md:translate-x-[-5%] max-md:scale-[1.1] max-md:translate-y-[10vh]  
            md:left-0 md:scale-[1.2] md:translate-y-[46%] md:h-screen
            lg:w-[110vw] lg:translate-x-[-80px]
            xl:translate-x-[-100px] xl:scale-[1.1]
            2xl:scale-[1.15]">
            {responsiveHeroSvgStyle}
            {/* <img loading="lazy" src="/images/about.png" loading="lazy" alt="about" className="w-screen h-full object" /> */}
            {/* {respHeroSec2} */}
        </div>
    </section>
  );
};

export default HeroSection;
