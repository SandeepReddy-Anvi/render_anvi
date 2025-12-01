import React from "react";

const SectionWithImage = ({
  title,
  description,
  points = [],
  backgroundImage = "images/careers/career3.1.webp",
  subtitleLineColor = "white",
}) => {
  return (
    <div className="relative w-screen max-w-[1600px] max-h-[600px] mx-auto   overflow-hidden font-inter">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src={backgroundImage}
          alt={`${title} background`}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.60)] bg-blend-multiply"></div>
      <div className="absolute z-1 inset-0 bg-[#02102DCC] opacity-60 bg-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center max-md:place-items-center md:flex-row px-[15px] md:px-[25px] lg:px-[50px] py-[70px] gap-[100px] max-lg:gap-[20px]">
        {/* Left Box */}
        <div className="bg-[#00000080] text-white px-[40px] py-[80px] rounded-2xl max-w-full md:max-w-md flex flex-col justify-start align-middle gap-[20px]">
          <h2 className="text-2xl font-bold uppercase">{title}</h2>
          <span
            className="block w-full max-w-[269px] h-[6px]"
            style={{ backgroundColor: subtitleLineColor }}
          ></span>
          <p className="text-[15px] leading-relaxed">{description}</p>
        </div>

        {/* Right Column */}
        {points.length > 0 && (
          <div className="flex flex-col w-fit max-md:w-[80%] text-[18px] font-normal leading-[20px] justify-evenly text-white gap-4">
            {points.map((point, index) => (
              <React.Fragment key={index}>
                <p>{point}</p>
                {index !== points.length - 1 && (
                  <span className="block w-full h-[0.5px] overflow-hidden bg-white"></span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWithImage;