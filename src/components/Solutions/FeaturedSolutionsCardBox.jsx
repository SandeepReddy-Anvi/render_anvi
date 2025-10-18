import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IconsObj } from "../../utils/Iconify_icons";
import { pagesLinksList } from "../../data/PagesLinkList";

// Data for the two feature cards/slides
const slides = [
  {
    id: 1,
    title: "AROP – Anvi Runway Ops",
    description:
      "Autonomous FOD detection, perimeter surveillance & runway maintenance. Revolutionary AI-powered system that transforms airport operations with intelligent automation and real-time monitoring.",
    points: [
      "70% reduction in FOD incidents",
      "₹40+ Cr annual ROI for major airports",
      "24/7 autonomous operation",
    ],
    imageUrl: "/images/solutions/solutionCard-1.png",
    link: pagesLinksList.Solutions_AROP,
  },
  {
    id: 2,
    title: "Sewage Cleaning Robot",
    description:
      "An AI-powered sewage cleaning robot that predicts blockages, prevents risks, and cures problems through safe, autonomous operations—ensuring zero manual scavenging",
    points: [
      "Predictive Intelligence",
      "Autonomous Robotic Cleaning",
      "Zero Manual Scavenging",
    ],
    imageUrl: "/images/solutions/solutionCard-2.png",
    link: pagesLinksList.Solutions_Sewage,
  },
];

// Main Application Component
const FeaturedSolutionsCardBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const totalSlides = slides.length;

  // Reusable Arrow Button Component
  const ArrowButton = useCallback(
    ({ direction, onClick, disabled }) => (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`p-3 rounded-full border-1 border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2
      ${
        disabled
          ? "text-gray-400 bg-gray-100 cursor-not-allowed"
          : "text-gray-700 hover:bg-sky-50 hover:border-[#1E9AB0]"
      }`}
        aria-label={`${direction === "next" ? "Next Slide" : "Previous Slide"}`}
      >
        {direction === "next" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        )}
      </button>
    ),
    []
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, []);

  // Calculate the progress percentage for the active slide marker
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  // console.log(currentSlide)
  return (
    <div className="min-h-min bg-gray-50 font-sans p-4 flex items-center justify-center">
      <div
        style={{
          background: "linear-gradient(110.89deg, #FFFFFF 0%, #FFFAFF 100%)",
        }}
        className="w-full max-w-7xl bg-white p-10 shadow-2xl shadow-[#0000000D] rounded-3xl transition-all duration-500"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Content Area (Col 1-5 on large screens) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left  gap-[25px]">
            <h1 className="text-[36px] tracking-[-0.9px] font-[Dm sans] font-[500] text-gray-900 transition-opacity duration-500 ease-in-out">
              {currentSlide.title}
            </h1>
            <p className="text-[#626263] text-[18px] font-[400] leading-[30px] transition-opacity duration-500 ease-in-out">
              {currentSlide.description}
            </p>

            {/* Feature Points */}
            <ul className="space-y-3 transition-opacity duration-500 ease-in-out">
              {currentSlide.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 rounded-full bg-black"></span>
                  <span className="text-[#353535] font-[400] text-[16px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <Link
              to={currentSlide.link || "#"}
              className="link-bg-icon w-min whitespace-nowrap"
              aria-label={`Action for ${currentSlide.title}`}
            >
              Learn More
              <i className="rotate-45">{IconsObj.arrow}</i>
            </Link>
          </div>

          {/* Right Image/Carousel Area (Col 6-12 on large screens) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Image Container */}
            <div className="relative overflow-hidden w-full max-w-[567px] aspect-video rounded-2xl shadow-xl transition-all duration-500 ease-in-out">
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                className="w-full h-auto aspect-video object-cover transform scale-100 hover:scale-[1.01] transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/e2e8f0/0f172a?text=Image+Unavailable";
                }}
              />
              {/* Optional: Add a subtle overlay gradient on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-end items-center mt-6 space-x-4">
              {/* Progress Indicator */}
              <div className="w-40 h-1 bg-gray-200 rounded-full overflow-hidden mr-4 hidden sm:block">
                <div
                  className="h-full bg-sky-500 transition-all duration-500 ease-in-out"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-4">
                <ArrowButton direction="prev" onClick={prevSlide} />
                <ArrowButton direction="next" onClick={nextSlide} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSolutionsCardBox;
