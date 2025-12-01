import React from "react";
 
export default function InitiativesSection({
  title = "Initiatives",
  mainImage = "/images/about/surveillance.png",
  topLogo = "/images/about/galactica.jpg",
  rightSmallImg = "/images/about/project_shudh.png",
}) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h3 className="text-4xl font-wix  text-gray-900 mb-8">{title}</h3>

        {/* Grid: left large image, right column with two stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left big image */}
          <div className="lg:col-span-5">
            <div className="rounded-md overflow-hidden shadow">
              <img
                src={mainImage}
                alt="Main initiative - large"
                className="w-full h-auto sm:h-[420px] md:h-[420px] object-cover"
                draggable={false}
              />
            </div>

            {/* Caption / title under left image */}
            <div className="mt-6">
              <h4 className="text-base font-medium text-gray-900">Anvi’s Surveillance Robot</h4>
              <p className="mt-2 text-sm font-dm-sans  text-gray-600 max-w-2xl">
                Delivering intelligent security, autonomous monitoring, and precision performance
                redefining how cities stay safe. Launch 30 June 2025.
              </p>
            </div>
          </div>

          {/* Right column */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:col-span-7">

  {/* Card 1 */}
  <div className="flex flex-col space-y-3">
    <div className="w-full lg:h-[160px] md:h-[200px] sm:h-[150px] min-[410px]:h-[180px]  min-[526px]:h-[250px]  rounded-md overflow-hidden bg-black flex items-center justify-center">
      <img
        src={topLogo}
        alt="Galactica logo"
        className="w-full h-full object-cover p-2"
        draggable={false}
      />
    </div>

    <h5 className="text-sm font-semibold text-gray-900">Anvi’s Galactica</h5>
    <p className="mt-1 font-dm-sans text-gray-600">
      Building sustainable space systems through debris removal, recycling, and
      future-ready infrastructure — powering a cleaner, smarter orbital future.
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col space-y-3">
    <div className="w-full lg:h-[230px] md:h-[250px] sm:h-[150px] rounded-md overflow-hidden  bg-gray-100">
      <img
        src={rightSmallImg}
        alt="Project SHUDH"
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>

    <h5 className="text-sm font-semibold text-gray-900">Project SHUDH</h5>
    <p className="mt-1 text-sm font-dm-sans text-gray-600">
      Revolutionizing urban sanitation through AI-powered, autonomous, and sustainable
      robotic cleaning systems — ensuring safety, precision, and dignity for all.
    </p>
  </div>

</div>


        </div>
      </div>
    </section>
  );
}
