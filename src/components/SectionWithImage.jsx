import React from "react";

const SectionWithImage = ({
  title,
  description,
  points = [],
  backgroundImage = "images/careers/career3.1.png",
  subtitleLineColor = "#1E9AB0",
}) => {
  return (
    <div className="relative w-screen max-w-[1300px] mx-auto font-inter">
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
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col max-md:place-items-center md:flex-row px-[20px] md:px-[50px] lg:px-[160px] py-[70px] gap-[100px] max-lg:gap-[20px]">
        {/* Left Box */}
        <div className="bg-[#00000080] text-white px-[40px] py-[80px] rounded-2xl max-w-md">
          <h2 className="text-2xl font-bold mb-2 uppercase">{title}</h2>
          <span
            className="block w-[269px] h-[6px] mb-2"
            style={{ backgroundColor: subtitleLineColor }}
          ></span>
          <p className="text-[15px] leading-relaxed">{description}</p>
        </div>

        {/* Right Column */}
        {points.length > 0 && (
          <div className="flex flex-col w-fit text-[18px] font-normal leading-[20px] justify-center text-white gap-4">
            {points.map((point, index) => (
              <React.Fragment key={index}>
                <p>{point}</p>
                {index !== points.length - 1 && (
                  <span className="block w-full h-[1px] bg-white"></span>
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
