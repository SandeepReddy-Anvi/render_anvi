import React from "react";

export default function SectionWithImage({
  title,
  description,
  points = [],
  backgroundImage = "images/careers/career3.1.webp",
  subtitleLineColor = "white",
}) {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.60)] bg-blend-multiply"></div>
      <div className="absolute z-1 inset-0 bg-[#02102DCC] opacity-60 bg-blend-multiply"></div>

      {/* CONTENT GRID */}
      <div className="
        relative z-10
        grid grid-cols-1 lg:grid-cols-12
        gap-10 lg:gap-20
        px-6 sm:px-10 lg:px-16
        py-14 sm:py-20
        mx-auto
      ">
        {/* Left BOX */}
        <div className="lg:col-span-6 bg-black/40 text-[#FFFFFF] px-6 sm:px-10 py-10 sm:py-16 rounded-2xl flex flex-col gap-6 max-w-[600px]">
          <h2 className="text-2xl sm:text-3xl lg:text-[24px] font-bold uppercase">
            {title}
          </h2>

          <span
            className="block w-full max-w-[240px] h-[5px] bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054]"
          />

          <p className="text-[14px] font-medium leading-relaxed ">
            {description}
          </p>
        </div>

        {/* RIGHT POINTS COLUMN (Responsive) */}
        {points.length > 0 && (
          <div className="
            lg:col-span-6 
            flex flex-col max-w-[600px]
            text-[16px] md:text-[18px] font-semibold leading-[20px] justify-evenly text-white gap-4
          ">
            {points.map((point, index) => (
              <React.Fragment key={index}>
                <p className="max-w-xl">{point}</p>

                {index !== points.length - 1 && (
                  <span className="block w-full h-[0.5px] overflow-hidden bg-white"></span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
