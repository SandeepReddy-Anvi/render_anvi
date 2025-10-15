import { useState } from "react";
import { IconsObj } from "../../../utils/Iconify_icons";

const CarouselSection = () => {
  const slides = [
    {
      title: "Autonomous FOD Detection & Removal",
      description:
        "Foreign Object Debris (FOD) is one of the most common yet dangerous risks on runways. AROP uses AI-powered cameras, sensors, and autonomous mobility platforms to constantly scan runways and taxiways. Any object detected—like loose bolts, stones, or metal pieces—is instantly identified, classified by risk level, and removed without disrupting flight operations. This ensures real-time protection against costly accidents.",
      image: "/images/solutions/arop/slide1.png",
    },
    {
      title: "24/7 Perimeter Surveillance",
      description:
        "Airport perimeters are vast and vulnerable to threats like wildlife intrusions, unauthorized access, and fencing damage. AROP deploys smart surveillance robots that operate continuously, day and night. Using AI-based classification, the system can tell the difference between harmless movements and serious risks, sending instant alerts to the Airport Operations Control Center (AOCC). This reduces wildlife strikes and strengthens airport security.",
      image: "/images/solutions/arop/slide2.png",
    },
    {
      title: "AI-Driven Runway Inspection",
      description:
        "Traditional runway inspections often miss small cracks or early damage. AROP solves this with high-resolution imaging, LiDAR scanning, and AI analysis. It can detect even the smallest surface cracks, rubber deposits from aircraft tires, or faulty runway lighting before they become dangerous. This enables predictive maintenance, helping airports extend runway life and reduce repair costs.",
      image: "/images/solutions/arop/slide3.png",
    },
    {
      title: "Real-Time Data & Alerts",
      description:
        "AROP is built on an edge computing architecture, meaning all data is processed locally instead of relying on remote servers. This ensures instant detection with minimal delay. Whenever a hazard is detected, AROP automatically classifies it, attaches GPS coordinates, and sends real-time alerts with images and severity levels to the AOCC. This allows airport staff to act immediately.",
      image: "/images/solutions/arop/slide4.png",
    },
    {
      title: "Seamless Compliance Reporting",
      description:
        "Every inspection, detection, and response action taken by AROP is automatically logged into a structured digital record. These logs can be directly used for ICAO, FAA, and DGCA safety audits, reducing paperwork and ensuring complete transparency. This not only helps airports stay compliant but also builds a digital audit trail for long-term safety analysis.",
      image: "/images/solutions/arop/slide5.png",
    },
    {
      title: "Sustainable Operations",
      description:
        "AROP runs on electric-powered mobility platforms, replacing traditional diesel inspection vehicles. This reduces CO₂ emissions by 65–80 tonnes annually in large airports. By minimizing emergency heavy repair work, AROP also supports green airport practices, making operations more sustainable and eco-friendly",
      image: "/images/solutions/arop/slide6.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full p-[61px]">
      <h2 className="text-[32px] text-[#FFFFFF] font-medium font-dm-sans text-black mb-8 pl-8">
        Feature Highlights: How AROP Transforms Airports
      </h2>
      <div
        className="relative w-full bg-cover font-dm-sans bg-center py-16 px-2 sm:px-4 md:px-10 lg:px-14"
        style={{
          backgroundImage: `url("/images/solutions/arop/background.jpg")`,
        }}
      >
        <h2 className="text-[32px] text-[#FFFFFF] font-medium text-white mb-8 mt-4">
          AI-powered features for safer, smarter airports.
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-24">
          {/* Left Content */}
          <div className="flex-1 text-[#FFFFFF]">
            <h2 className="text-3xl md:text-4xl lg:text-[26px] font-normal mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-base md:text-lg lg:text-[18px] leading-[29px]">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex flex-col items-center lg:items-end gap-4 max-w-[280px]">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-auto object-cover"
            />

            {/* Navigation Arrows & Slide Indicators */}
            <div className="flex items-center gap-6 mt-4 pr-6">
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="text-white w-6 h-auto aspect-square rounded-full border border-white"
              >
                <span className="rotate-[-90deg] inline-block">
                  {IconsObj.arrow}
                </span>
              </button>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-0.5 w-3 rounded-full transition-all ${
                      index === currentSlide ? "bg-[#1E9AB0]" : "bg-[#1E9AB066]"
                    }`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="text-white p-0.5 rounded-full border border-white"
              >
                <span className="rotate-[90deg] inline-block">
                  {IconsObj.arrow}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
