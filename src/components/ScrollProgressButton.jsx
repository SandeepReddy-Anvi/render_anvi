import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ScrollProgressButton = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const [screenSize, setScreenSize] = useState("md");

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 640) setScreenSize("sm");       // mobile
    else if (width < 1024) setScreenSize("md"); // tablet
    else setScreenSize("lg");                   // desktop
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(percent);

      setShow(scrollTop > 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius =
  screenSize === "sm" ? 14 :   // mobile
  screenSize === "md" ? 18 :   // tablet
  20;                          // desktop (reduced from 26)

const circumference = 2 * Math.PI * radius;

  return (
    <div
      onClick={scrollToTop}
      className={`fixed 
        bottom-4 right-4 md:right-6 lg:right-10 
        z-[999] cursor-pointer 
        transition-all duration-300 
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
      `}
    >
      <div
        className="
          relative flex items-center justify-center
          w-[48px] h-[48px] 
          sm:w-[52px] sm:h-[52px]
          md:w-[60px] md:h-[60px]
        "
      >
        {/* Background Circle */}
        <svg className="absolute w-full h-full rotate-[-90deg]">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Progress Circle */}
        <svg className="absolute w-full h-full rotate-[-90deg]">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={(1 - progress) * circumference}
            strokeLinecap="round"
            className="transition-all duration-200"
          />

          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#FE6100" />
              <stop offset="100%" stopColor="#D10000" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow */}
        <span className="transition-transform duration-300 hover:-translate-y-1">
          <Icon
            icon="ep:arrow-up"
            className="
              w-4 h-4
              sm:w-5 sm:h-5 
              md:w-6 md:h-6
            "
            color="#CD0034"
          />
        </span>
      </div>
    </div>
  );
};

export default ScrollProgressButton;