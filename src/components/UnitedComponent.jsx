const ecosystemLogos = [
  { name: "ANVI ROBOTICS", src: "/images/about/AnviRobotics-Logo.png" },
  { name: "ANVI SPACE", src: "/images/about/AnviSpace-Logo.png" },
  { name: "ANVI STUDIO", src: "/images/about/AnviStudio-Logo.png" },
  {
    name: "CAARYO LIFESTYLE",
    src: "/images/about/Caaryo-Logo.png",
    className: "logo-caaryo",
  },
];

const UnitedComponent = () => (
  <section className="max-w-auto max-w-[1800px] mx-auto px-6 md:px-10 py-20 font-raleway">
    <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20">
      {/* Left Side Text */}
      <div className="lg:w-[40%] text-center lg:text-left">
        <h2 className="text-[#100000] text-[36px] md:text-[48px] font-semibold leading-tight mb-6">
          United by One Purpose
        </h2>
        <p className="text-[#575757] text-lg leading-relaxed">
          ANVI is a unified, innovation-led ecosystem creating intelligent,
          future-ready solutions across all verticals driven by our mission,
          Engineering Your Edge™
        </p>
      </div>

      {/* Right Side Logo Tree */}
      <div className="lg:w-[60%] w-full flex flex-col items-center">
        {/* 1. Top Parent Logo */}
        <div className="flex flex-col items-center">
          <img
            src="/logos/anvi_black_logo.svg"
            alt="ANVI"
            className="h-12 mb-2"
          />

          {/* 2. Vertical Stem Line */}
          <div className="w-[1.5px] h-12 bg-gray-300" />
        </div>

        {/* 3. Horizontal Shoulder Line & Droppers */}
        <div className="relative w-full">
          {/* The Horizontal Line */}
          <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[1.5px] bg-gray-300" />

          {/* The 4 Logos and Vertical Connectors */}
          <ul className="united-comp-ul w-full grid grid-cols-4">
            {ecosystemLogos.map((logo, index) => (
              <li key={index} className="flex flex-col items-center">
                {/* Vertical Dropper Line */}
                <div className="w-[1.5px] h-10 bg-gray-300" />

                {/* Logo Image */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-12 w-auto md:max-w-[140px] lg:max-w-[120px] xl:max-w-[150px] mt-3 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default UnitedComponent;
