import React from "react";
import { IconsObj } from "../utils/Iconify_icons";
 

export default function CareersGrowthComponent({
  title = "Careers and Growth",
  body = `At ANVI, growth is about more than a job - it’s about solving real challenges, building deep-tech innovations, and shaping a sustainable future. Driven by purpose and inspired by our mission, our team explores ambitious ideas, works with breakthrough technologies, and creates impact across industries and communities. If you’re ready to grow and be part of a future engineered by innovation, your next role could start here.`,
  buttonLabel = "Explore Careers",
  buttonAriaLabel = "Explore Careers and Growth",
  onExplore = null, // function or link
  imageSrc = "images/about/careerGrowth1.webp", // pass a string url or import
}) {
  // If onExplore is not provided, default to a no-op that logs; you can replace with react-router navigation.
  const handleExplore = (e) => {
    if (onExplore) return onExplore(e);
    // sensible default: try to navigate to /careers
    if (typeof window !== "undefined") window.location.href = "/ContactUs";
  };

  return (
    <section className="bg-black ">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-10">

          {/* Background Full Image */}
          <div className="absolute inset-0">
          <img
            aria-hidden
            src="/images/about/careerGrowth2.webp"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover -z-20 mix-blend-multiply opacity-45"
          />
          </div>

          <div className="absolute inset-0 bg-[rgba(0,0,0,0.60)] w-full h-full"/>

          {/* Left - Text */}
          <div className="lg:col-span-7 z-10 px-5 md:px-[60px] text-[#FFFFFF]">
            <h2 className="text-[32px] md:text-[46px] font-medium leading-tight">
              {title}
            </h2>

            <p className="mt-6 max-w-2xl text-[16px] md:text-[18px] font-regular leading-relaxed">
              {body}
            </p>

            <div className="mt-8">
      
              <button
                onClick={handleExplore}
                aria-label={buttonAriaLabel}
                className="link-bg-icon1 text-semibold text-[14px]"
              >
                <span>{buttonLabel}</span>
                <i className="rotate-45">{IconsObj.arrow}</i>
                
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full   ">
              <div className="rounded-2xl overflow-hidden shadow-2xl  ">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="Careers and Growth"
                    className="w-full h-[120px] sm:h-[300px] md:h-[420px] lg:h-[460px] object-cover"
                    draggable={false}
                  />
                ) : (
                  <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 w-full h-[320px] sm:h-[360px] md:h-[420px] lg:h-[460px] flex items-center justify-center text-gray-300">
                    <span className="text-center px-6">Replace <code>imageSrc</code> prop with your image path</span>
                  </div>
                )}

                {/* {/* subtle overlay to match the screenshot mood /}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                {/* decorative rounded cut on top-right to mimic screenshot /}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-white/6 to-white/3 rounded-br-3xl rounded-tl-3xl opacity-50 mix-blend-screen" /> */}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
