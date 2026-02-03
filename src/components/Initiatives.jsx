import React from "react";
 
export default function InitiativesSection({
  title = "Next At ANVI",
  mainImage = "/images/about/surveillance.webp",
  topLogo = "/images/home/galactica.webp",
  rightSmallImg = "/images/about/project_shudh.webp",
}) {
  return (
    <section className="w-full px-5 md:px-[60px] py-[50px] xl:px-[100px] md:py-[80px] bg-[#F9FAFB]">
        <h3 className="text-[32px] md:text-[46px] font-medium text-[#100000] mb-4">{title}</h3>

        {/* Grid: left large image, right column with two stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Left big image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden shadow sm:h-[500px]">
              <img
                src={mainImage}
                alt="Main initiative - large"
                className="w-full  h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Caption / title under left image */}
            <div className="mt-6 text-[#100000]">
              <h4 className="text-[20px] md:text-[22px] font-semibold">Anvi’s Surveillance Robot</h4>
              <p className="mt-2 text-[14px] font-medium max-w-2xl">
                Delivering intelligent security, autonomous monitoring, and precision performance
                redefining how cities stay safe. Launching March 2026.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:col-span-7">

            {/* Card 1 */}
            <div className="flex flex-col space-y-3">
              <div className="w-full h-[230px] md:h-[218px] lg:h-[220px] xl:h-[260px] flex items-center justify-center">
                <img
                  src={topLogo}
                  alt="Galactica logo"
                  className="w-full   h-full object-cover"
                  draggable={false}
                />
              </div>

              <h5 className="text-[20px] md:text-[24px] text-[#100000] font-semibold">Anvi’s Galactica</h5>
              <p className="mt-1 text-[14px] text-[#100000] font-medium">
                Building sustainable space systems through debris removal, recycling, and
                future-ready infrastructure — powering a cleaner, smarter orbital future.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col space-y-3">
              <div className="w-full sm:h-[150px] md:h-[328px] lg:h-[328px] overflow-hidden">
                <img
                  src={rightSmallImg}
                  alt="Project SHUDH"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              <h5 className="text-[20px] md:text-[24px] font-semibold text-[#100000]">Project SHUDH</h5>
              <p className="mt-1 text-[14px] text-[#100000] font-medium">
                Revolutionizing urban sanitation through AI-powered, autonomous, and sustainable
                robotic cleaning systems — ensuring safety, precision, and dignity for all.
              </p>
            </div>

          </div>


        </div>
    </section>
  );
}
